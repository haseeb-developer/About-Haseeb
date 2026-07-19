(function () {
  "use strict";

  let activeCategory = "All";
  let searchQuery = "";

  const elements = {
    profileName: document.getElementById("profile-name"),
    profileTitle: document.getElementById("profile-title"),
    profileBio: document.getElementById("profile-bio"),
    profileAvatar: document.getElementById("profile-avatar"),
    profileTags: document.getElementById("profile-tags"),
    headerInitials: document.getElementById("header-initials"),
    emailCta: document.getElementById("email-cta"),
    footerName: document.getElementById("footer-name"),
    footerYear: document.getElementById("footer-year"),
    aboutText: document.getElementById("about-text"),
    quickInfo: document.getElementById("quick-info"),
    accountsGrid: document.getElementById("accounts-grid"),
    categoryFilters: document.getElementById("category-filters"),
    searchInput: document.getElementById("search-input"),
    noResults: document.getElementById("no-results"),
    menuToggle: document.getElementById("menu-toggle"),
    mobileMenu: document.getElementById("mobile-menu"),
    menuIconOpen: document.getElementById("menu-icon-open"),
    menuIconClose: document.getElementById("menu-icon-close"),
    statusBadge: document.getElementById("status-badge"),
    statusText: document.getElementById("status-text"),
    toast: document.getElementById("toast"),
    constellation: document.getElementById("constellation"),
  };

  /* ---------------- Icons ---------------- */

  const icons = {
    copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><rect x="9" y="9" width="12" height="12" rx="2" stroke-linecap="round" stroke-linejoin="round"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,
    link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M10 13a5 5 0 007.07 0l2.83-2.83a5 5 0 00-7.07-7.07l-1.5 1.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M14 11a5 5 0 00-7.07 0L4.1 13.83a5 5 0 007.07 7.07l1.5-1.5"/></svg>`,
    open: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`,
  };

  function getInitials(name) {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("");
  }

  /* ---------------- Profile ---------------- */

  function renderProfile() {
    const { name, title, bio, avatar, email, tags, about, quickInfo, status, statusOnline } = profileData;

    elements.profileName.textContent = name;
    elements.profileTitle.textContent = title;
    elements.profileBio.textContent = bio;
    elements.profileAvatar.src = avatar;
    elements.profileAvatar.alt = `${name} profile photo`;
    elements.headerInitials.textContent = getInitials(name);
    elements.footerName.textContent = name;
    elements.footerYear.textContent = new Date().getFullYear();
    elements.aboutText.textContent = about;
    elements.emailCta.href = `mailto:${email}`;

    if (status) {
      elements.statusText.textContent = status;
    }
    if (statusOnline === false) {
      elements.statusBadge.style.opacity = "0.6";
    }

    elements.profileTags.innerHTML = tags
      .map((tag) => `<span class="tag-pill">${tag}</span>`)
      .join("");

    elements.quickInfo.innerHTML = quickInfo
      .map(({ label, value, href }) => {
        const valueHtml = href
          ? `<a href="${href}" class="text-accent-light transition hover:text-accent-glow">${value}</a>`
          : `<span class="font-mono text-slate-300">${value}</span>`;

        return `
          <div class="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
            <dt class="text-sm text-slate-500">${label}</dt>
            <dd class="text-sm font-medium">${valueHtml}</dd>
          </div>`;
      })
      .join("");
  }

  /* ---------------- Filters + search ---------------- */

  function getCategories() {
    const categories = [...new Set(accountsData.map((account) => account.category))];
    return ["All", ...categories.sort()];
  }

  function renderFilters() {
    elements.categoryFilters.innerHTML = getCategories()
      .map(
        (category) =>
          `<button type="button" class="filter-btn${category === activeCategory ? " active" : ""}" data-category="${category}">${category}</button>`
      )
      .join("");
  }

  function filterAccounts() {
    return accountsData.filter((account) => {
      const matchesCategory = activeCategory === "All" || account.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        account.platform.toLowerCase().includes(query) ||
        account.username.toLowerCase().includes(query) ||
        account.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }

  /* ---------------- Toast ---------------- */

  let toastTimer = null;

  function showToast(message) {
    if (!elements.toast) return;

    const existing = elements.toast.querySelector(".toast-pill");
    if (existing) existing.remove();
    if (toastTimer) clearTimeout(toastTimer);

    const pill = document.createElement("div");
    pill.className = "toast-pill";
    pill.innerHTML = `${icons.check}<span>${message}</span>`;
    elements.toast.appendChild(pill);

    toastTimer = setTimeout(() => {
      pill.classList.add("toast-out");
      setTimeout(() => pill.remove(), 260);
    }, 1900);
  }

  /* ---------------- Clipboard ---------------- */

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (err) {
      /* fall through to legacy method */
    }

    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      return true;
    } catch (err) {
      return false;
    }
  }

  function flashButtonSuccess(button) {
    const originalHtml = button.innerHTML;
    const originalTooltip = button.getAttribute("data-tooltip");

    button.classList.add("is-success");
    button.innerHTML = icons.check;
    button.setAttribute("data-tooltip", "Copied!");

    setTimeout(() => {
      button.classList.remove("is-success");
      button.innerHTML = originalHtml;
      if (originalTooltip) button.setAttribute("data-tooltip", originalTooltip);
    }, 1400);
  }

  /* ---------------- Cards ---------------- */

  function createAccountCard(account, index) {
    const card = document.createElement("article");
    card.className =
      "account-card group rounded-2xl border border-white/5 bg-surface-800/60 p-5 shadow-card backdrop-blur-sm transition hover:-translate-y-1";
    card.style.animationDelay = `${Math.min(index, 12) * 55}ms`;
    card.setAttribute("role", "listitem");

    card.innerHTML = `
      <div class="flex items-start justify-between gap-4">
        <div
          class="platform-icon-wrap flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style="background: ${account.bgColor}; color: ${account.color};"
        >
          ${account.icon}
        </div>
        <span class="rounded-full border border-white/8 bg-white/5 px-2.5 py-0.5 font-mono text-xs font-medium text-slate-400">
          ${account.category}
        </span>
      </div>

      <div class="mt-4">
        <h3 class="font-display text-lg font-semibold text-white">${account.platform}</h3>
        <p class="account-username mt-1 truncate text-sm text-slate-500">@${account.username}</p>
      </div>

      <div class="card-actions mt-5">
        <button
          type="button"
          class="action-btn action-copy-username"
          data-tooltip="Copy username"
          aria-label="Copy username for ${account.platform}"
        >
          ${icons.copy}
        </button>
        <button
          type="button"
          class="action-btn action-copy-link"
          data-tooltip="Copy link"
          aria-label="Copy profile link for ${account.platform}"
        >
          ${icons.link}
        </button>
        <a
          href="${account.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="action-btn action-open"
          data-tooltip="Open profile"
          aria-label="Open ${account.platform} profile in a new tab"
        >
          ${icons.open}
        </a>
      </div>
    `;

    const copyUsernameBtn = card.querySelector(".action-copy-username");
    const copyLinkBtn = card.querySelector(".action-copy-link");

    copyUsernameBtn.addEventListener("click", async () => {
      const ok = await copyText(account.username);
      if (ok) {
        flashButtonSuccess(copyUsernameBtn);
        showToast(`Username copied — ${account.username}`);
      } else {
        showToast("Couldn't copy — try again");
      }
    });

    copyLinkBtn.addEventListener("click", async () => {
      const ok = await copyText(account.url);
      if (ok) {
        flashButtonSuccess(copyLinkBtn);
        showToast(`Link copied — ${account.platform}`);
      } else {
        showToast("Couldn't copy — try again");
      }
    });

    return card;
  }

  function renderAccounts() {
    const filtered = filterAccounts();
    elements.accountsGrid.innerHTML = "";

    if (filtered.length === 0) {
      elements.noResults.classList.remove("hidden");
      return;
    }

    elements.noResults.classList.add("hidden");

    const fragment = document.createDocumentFragment();
    filtered.forEach((account, index) => {
      fragment.appendChild(createAccountCard(account, index));
    });
    elements.accountsGrid.appendChild(fragment);
  }

  function setupFilters() {
    elements.categoryFilters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;

      activeCategory = button.dataset.category;
      renderFilters();
      renderAccounts();
    });
  }

  function setupSearch() {
    elements.searchInput.addEventListener("input", (event) => {
      searchQuery = event.target.value;
      renderAccounts();
    });
  }

  function setupMobileMenu() {
    elements.menuToggle.addEventListener("click", () => {
      const isOpen = !elements.mobileMenu.classList.contains("hidden");
      elements.mobileMenu.classList.toggle("hidden", isOpen);
      elements.menuIconOpen.classList.toggle("hidden", !isOpen);
      elements.menuIconClose.classList.toggle("hidden", isOpen);
      elements.menuToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    elements.mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        elements.mobileMenu.classList.add("hidden");
        elements.menuIconOpen.classList.remove("hidden");
        elements.menuIconClose.classList.add("hidden");
        elements.menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Constellation backdrop ---------------- */

  function setupConstellation() {
    const canvas = elements.constellation;
    if (!canvas || !canvas.getContext) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    let width, height, dpr;
    let particles = [];

    const isSmallScreen = () => window.innerWidth < 768;
    const particleCount = () => (isSmallScreen() ? 34 : 70);
    const linkDistance = () => (isSmallScreen() ? 90 : 130);

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      const count = particleCount();
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.6,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      const maxDist = linkDistance();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.35;
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = "rgba(199, 210, 254, 0.75)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(step);
    }

    resize();
    createParticles();
    requestAnimationFrame(step);

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        createParticles();
      }, 200);
    });
  }

  function init() {
    renderProfile();
    renderFilters();
    renderAccounts();
    setupFilters();
    setupSearch();
    setupMobileMenu();
    setupConstellation();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();