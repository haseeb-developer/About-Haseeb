(function () {
  "use strict";

  let activeCategory = "All";
  let searchQuery = "";

  const elements = {
    profileName: document.getElementById("profile-name"),
    accountsGrid: document.getElementById("accounts-grid"),
    categoryFilters: document.getElementById("category-filters"),
    searchInput: document.getElementById("search-input"),
    noResults: document.getElementById("no-results"),
    toast: document.getElementById("toast"),
    constellation: document.getElementById("constellation"),
    footerName: document.getElementById("footer-name"),
    footerCopyName: document.getElementById("footer-copy-name"),
    footerYear: document.getElementById("footer-year"),
    footerEmail: document.getElementById("footer-email"),
    searchOverlay: document.getElementById("search-overlay"),
    searchBackdrop: document.getElementById("search-backdrop"),
    searchPanel: document.getElementById("search-panel"),
    searchPanelInput: document.getElementById("advanced-search-input"),
    searchCloseBtn: document.getElementById("search-close-btn"),
    searchResultsList: document.getElementById("search-results-list"),
    searchEmptyState: document.getElementById("search-empty-state"),
  };

  /* ---------------- Icons ---------------- */

  const icons = {
    copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><rect x="9" y="9" width="12" height="12" rx="2" stroke-linecap="round" stroke-linejoin="round"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,
    link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M10 13a5 5 0 007.07 0l2.83-2.83a5 5 0 00-7.07-7.07l-1.5 1.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M14 11a5 5 0 00-7.07 0L4.1 13.83a5 5 0 007.07 7.07l1.5-1.5"/></svg>`,
    open: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-8 w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
  };

  /* ---------------- Profile (name + footer only) ---------------- */

  function renderProfile() {
    const { name, email } = profileData;

    if (elements.profileName) elements.profileName.textContent = name;
    if (elements.footerName) elements.footerName.textContent = name;
    if (elements.footerCopyName) elements.footerCopyName.textContent = name;
    if (elements.footerYear) elements.footerYear.textContent = new Date().getFullYear();
    if (elements.footerEmail) elements.footerEmail.href = `mailto:${email}`;
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

  /* ---------------- Advanced search (Shift + S) ---------------- */

  let searchModalOpen = false;
  let searchActiveIndex = -1;
  let searchDebounceTimer = null;
  let lastFocusedBeforeSearch = null;

  function isDesktopDevice() {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    return hasFinePointer && !isTouchDevice && window.innerWidth >= 768;
  }

  function createSearchResultItem(account, index) {
    const item = document.createElement("div");
    item.className = "search-result-item";
    item.style.animationDelay = `${Math.min(index, 10) * 40}ms`;
    item.setAttribute("role", "option");
    item.dataset.index = String(index);

    item.innerHTML = `
      <div class="search-result-icon-wrap" style="background: ${account.bgColor}; color: ${account.color};">
        ${account.icon}
      </div>
      <div class="search-result-info">
        <div class="search-result-top-row">
          <span class="search-result-platform">${account.platform}</span>
          <span class="search-result-category">${account.category}</span>
        </div>
        <p class="search-result-username">@${account.username}</p>
      </div>
      <div class="search-result-actions">
        <button
          type="button"
          class="action-btn search-copy-username"
          data-tooltip="Copy username"
          aria-label="Copy username for ${account.platform}"
        >
          ${icons.copy}
        </button>
        <button
          type="button"
          class="action-btn search-copy-link"
          data-tooltip="Copy link"
          aria-label="Copy profile link for ${account.platform}"
        >
          ${icons.link}
        </button>
        <a
          href="${account.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="action-btn search-open-link"
          data-tooltip="Open profile"
          aria-label="Open ${account.platform} profile in a new tab"
        >
          ${icons.open}
        </a>
      </div>
    `;

    const copyUsernameBtn = item.querySelector(".search-copy-username");
    const copyLinkBtn = item.querySelector(".search-copy-link");

    copyUsernameBtn.addEventListener("click", async (event) => {
      event.stopPropagation();
      const ok = await copyText(account.username);
      if (ok) {
        flashButtonSuccess(copyUsernameBtn);
        showToast(`Username copied — ${account.username}`);
      } else {
        showToast("Couldn't copy — try again");
      }
    });

    copyLinkBtn.addEventListener("click", async (event) => {
      event.stopPropagation();
      const ok = await copyText(account.url);
      if (ok) {
        flashButtonSuccess(copyLinkBtn);
        showToast(`Link copied — ${account.platform}`);
      } else {
        showToast("Couldn't copy — try again");
      }
    });

    item.querySelector(".search-open-link").addEventListener("click", (event) => {
      event.stopPropagation();
    });

    item.addEventListener("mouseenter", () => setSearchActiveIndex(index));

    return item;
  }

  function getSearchMatches(query) {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return accountsData;

    return accountsData.filter(
      (account) =>
        account.platform.toLowerCase().includes(normalized) ||
        account.username.toLowerCase().includes(normalized) ||
        account.category.toLowerCase().includes(normalized)
    );
  }

  function setSearchActiveIndex(index) {
    const items = elements.searchResultsList.querySelectorAll(".search-result-item");
    items.forEach((item) => item.classList.remove("is-active"));
    searchActiveIndex = index;
    if (index >= 0 && items[index]) {
      items[index].classList.add("is-active");
      items[index].scrollIntoView({ block: "nearest" });
    }
  }

  function renderSearchResults(query) {
    const matches = getSearchMatches(query);

    elements.searchResultsList.classList.add("is-refreshing");

    requestAnimationFrame(() => {
      elements.searchResultsList.innerHTML = "";

      if (matches.length === 0) {
        elements.searchEmptyState.classList.add("is-visible");
      } else {
        elements.searchEmptyState.classList.remove("is-visible");
        const fragment = document.createDocumentFragment();
        matches.forEach((account, index) => {
          fragment.appendChild(createSearchResultItem(account, index));
        });
        elements.searchResultsList.appendChild(fragment);
      }

      searchActiveIndex = matches.length > 0 ? 0 : -1;
      setSearchActiveIndex(searchActiveIndex);

      requestAnimationFrame(() => {
        elements.searchResultsList.classList.remove("is-refreshing");
      });
    });
  }

  function openSearchModal() {
    if (searchModalOpen || !elements.searchOverlay) return;

    searchModalOpen = true;
    lastFocusedBeforeSearch = document.activeElement;

    elements.searchOverlay.classList.add("is-open");
    elements.searchOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    elements.searchPanelInput.value = "";
    renderSearchResults("");

    setTimeout(() => {
      elements.searchPanelInput.focus();
    }, 60);
  }

  function closeSearchModal() {
    if (!searchModalOpen || !elements.searchOverlay) return;

    searchModalOpen = false;
    elements.searchOverlay.classList.remove("is-open");
    elements.searchOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedBeforeSearch && typeof lastFocusedBeforeSearch.focus === "function") {
      lastFocusedBeforeSearch.focus();
    }
  }

  function setupAdvancedSearch() {
    if (!elements.searchOverlay) return;

    document.addEventListener("keydown", (event) => {
      const activeTag = document.activeElement ? document.activeElement.tagName : "";
      const isTypingElsewhere =
        !searchModalOpen &&
        (activeTag === "INPUT" || activeTag === "TEXTAREA" || document.activeElement?.isContentEditable);

      if (
        !searchModalOpen &&
        event.shiftKey &&
        (event.key === "S" || event.key === "s") &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        !isTypingElsewhere &&
        isDesktopDevice()
      ) {
        event.preventDefault();
        openSearchModal();
        return;
      }

      if (!searchModalOpen) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeSearchModal();
        return;
      }

      const items = elements.searchResultsList.querySelectorAll(".search-result-item");
      if (event.key === "ArrowDown") {
        event.preventDefault();
        if (items.length === 0) return;
        setSearchActiveIndex((searchActiveIndex + 1) % items.length);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (items.length === 0) return;
        setSearchActiveIndex((searchActiveIndex - 1 + items.length) % items.length);
      } else if (event.key === "Enter") {
        if (searchActiveIndex >= 0 && items[searchActiveIndex]) {
          const link = items[searchActiveIndex].querySelector(".search-open-link");
          if (link) link.click();
        }
      }
    });

    elements.searchBackdrop.addEventListener("click", closeSearchModal);
    elements.searchCloseBtn.addEventListener("click", closeSearchModal);

    elements.searchPanelInput.addEventListener("input", (event) => {
      const value = event.target.value;
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => renderSearchResults(value), 90);
    });

    window.addEventListener("resize", () => {
      if (searchModalOpen && !isDesktopDevice()) {
        closeSearchModal();
      }
    });
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
    setupAdvancedSearch();
    setupConstellation();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();