/**
 * Muhammad Haseeb's personal profile and account information.
 *
 * To add another account, include:
 * platform, username, url, category, color, bgColor, and icon.
 */

const profileData = {
  name: "Muhammad Haseeb",

  title: "Senior Frontend Developer | Shopify & WordPress Developer",

  bio: "Frontend Developer with 4+ years of experience building responsive web applications, Shopify stores, WordPress websites, and modern user interfaces.",

  avatar: "assets/haseeb-profile-img.jpg",

  email: "haseeb.devv@gmail.com",

  location: "Pakistan",

  status: "Available for remote work",
  statusOnline: true,

  tags: [
    "Frontend Development",
    "React.js",
    "Next.js",
    "TypeScript",
    "Shopify",
    "WordPress",
    "Tailwind CSS",
    "REST APIs",
  ],

  about:
    "I build responsive web applications, Shopify storefronts, WordPress websites, and custom frontend experiences. This personal hub keeps my portfolio, development profiles, professional accounts, resume, and contact information organized in one place.",

  quickInfo: [
    {
      label: "Location",
      value: "Pakistan",
    },
    {
      label: "Email",
      value: "haseeb.devv@gmail.com",
      href: "mailto:haseeb.devv@gmail.com",
    },
    {
      label: "Availability",
      value: "Available immediately",
    },
    {
      label: "Work Preference",
      value: "Remote worldwide",
    },
    {
      label: "Experience",
      value: "4+ years",
    },
    {
      label: "Primary Stack",
      value: "React Â· Next.js Â· TypeScript Â· Shopify Â· WordPress",
    },
  ],

  resume: {
    filename: "Muhammad_Haseeb_Resume.pdf",
    url: "assets/Muhammad_Haseeb_Resume.pdf",
  },
};

const accountsData = [
  {
    platform: "Personal Portfolio",
    username: "haseebkn.vercel.app",
    url: "https://haseebkn.vercel.app",
    category: "Work",
    color: "#c7d2fe",
    bgColor: "rgba(99, 102, 241, 0.25)",
    icon: `
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    `,
  },

  {
    platform: "GitHub",
    username: "haseeb-developer",
    url: "https://github.com/haseeb-developer",
    category: "Development",
    color: "#f0f6fc",
    bgColor: "rgba(36, 41, 47, 0.9)",
    icon: `
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-6 w-6"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    `,
  },

  {
    platform: "Upwork",
    username: "haseebkn",
    url: "https://www.upwork.com/freelancers/haseebkn",
    category: "Freelance",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
     <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><ellipse cx="184.5" cy="234.5" rx="57.5" ry="56.5" transform="translate(-546.174 -763.565) scale(4.34783)"/><path d="M345.516 181.708c-42.168 0-65.774 27.481-72.532 55.773-7.658-14.416-13.335-33.698-17.75-51.628H196.94v72.531c0 26.31-11.984 45.772-35.41 45.772-23.427 0-36.852-19.462-36.852-45.772l.27-72.531H91.34v72.531c0 21.174 6.848 40.366 19.372 54.061 12.884 14.146 30.454 21.534 50.817 21.534 40.545 0 68.837-31.085 68.837-75.595V209.64c4.235 16.038 14.326 46.853 33.608 73.884l-18.02 102.625h34.148l11.893-72.712c3.875 3.244 8.02 6.127 12.434 8.74 11.443 7.208 24.508 11.263 38.023 11.713 0 0 2.073.09 3.154.09 41.807 0 75.054-32.346 75.054-76.045 0-43.7-33.337-76.226-75.144-76.226m0 122.358c-25.86 0-42.979-20.003-47.754-27.752 6.127-49.015 24.057-64.512 47.754-64.512 23.426 0 41.626 18.741 41.626 46.132 0 27.39-18.2 46.132-41.626 46.132" fill="#fff" fill-rule="nonzero"/></svg>
    `,
  },

  {
    platform: "Indeed",
    username: "Muhammad Haseeb",
    url: "https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobsearch--indeedmobile",
    category: "Jobs",
    color: "#ffffff",
    bgColor: "#fff",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="400.000000pt" height="400.000000pt" viewBox="0 0 400.000000 400.000000" preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M2022 3319 c-233 -30 -450 -146 -653 -348 -215 -215 -356 -481 -418 -788 -12 -55 -21 -123 -21 -150 1 -44 4 -37 51 102 60 178 147 365 226 483 74 111 240 282 350 362 316 227 680 267 993 110 41 -20 104 -56 139 -79 35 -22 68 -41 73 -41 22 0 4 54 -37 108 -133 182 -415 279 -703 241z"/>
    <path d="M1930 2805 c-97 -27 -172 -91 -218 -185 -23 -46 -27 -68 -27 -135 1 -134 59 -232 177 -296 58 -32 70 -34 153 -34 71 0 100 5 137 22 63 29 134 96 166 158 24 44 27 62 27 145 0 84 -3 102 -28 152 -68 139 -237 214 -387 173z"/>
      <path d="M2198 1975 c-79 -41 -192 -67 -300 -69 l-98 -1 0 -501 c0 -297 4 -523 10 -555 12 -64 42 -110 94 -147 35 -24 48 -27 126 -27 78 0 91 3 129 28 31 20 50 44 69 85 l27 57 3 578 c2 317 -1 577 -5 577 -4 -1 -29 -12 -55 -25z"/>
      </g>
      </svg>
    `,
  },

  {
    platform: "Linkedin",
    username: "haseeb-developer",
    url: "https://www.linkedin.com/in/haseeb-developer/",
    category: "Social",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
      <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"/></svg>
    `,
  },

  {
    platform: "Email",
    username: "haseeb.devv@gmail.com",
    url: "mailto:haseeb.devv@gmail.com",
    category: "Contact",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
      <svg viewBox="0 49.4 512 399.42"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"/><path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"/><path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"/></g><path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"/><path fill="#c5221f" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"/></g></svg>
    `,
  },

  {
    platform: "Resume",
    username: "Muhammad Haseeb Resume",
    url: "assets/Muhammad_Haseeb_Resume.pdf",
    category: "Work",
    color: "#ffffff",
    bgColor: "rgba(59, 130, 246, 0.75)",
    icon: `
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14 2v6h6M8 13h8M8 17h8M8 9h2"
        />
      </svg>
    `,
  },

  // ! NEW =============================
  {
    platform: "CodePen",
    username: "haseebdevv",
    url: "https://codepen.io/haseebdevv",
    category: "Development",
    color: "#ffffff",
    bgColor: "rgba(59, 130, 246, 0.75)",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" aria-label="CodePen" role="img" viewBox="0 0 512 512">

<rect width="512" height="512" rx="15%" fill="#111"/>

<g fill="none" stroke="#e6e6e6" stroke-width="33" stroke-linejoin="round">

<path d="M81 198v116l175 117 175-117V198L256 81z"/>

<path d="M81 198l175 116 175-116M256 81v117"/>

<path d="M81 314l175-116 175 116M256 431V314"/>

</g>

</svg>
    `,
  },

  {
    platform: "Stack Overflow",
    username: "muhammad-haseeb",
    url: "https://stackoverflow.com/users/29316052/muhammad-haseeb",
    category: "Development",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
    <svg viewBox="0 0 169.61 200"><path d="M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z" fill="#bcbbbb"/><path d="M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z" fill="#f48024"/></svg>
    `,
  },

  {
    platform: "Dev.to",
    username: "haseeb_dev",
    url: "https://dev.to/haseeb_dev",
    category: "Development",
    color: "#ffffff",
    bgColor: "#000",
    icon: `
    <svg viewBox="0 0 256 256" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M87.3749 147.217C87.3749 157.436 81.0804 172.918 61.1561 172.886H36V83H61.6874C80.9015 83 87.3641 98.4608 87.3695 108.685L87.3749 147.217ZM62.582 99.8189C64.6856 99.8189 66.7946 100.607 68.8982 102.182C70.9963 103.757 72.0535 106.126 72.0589 109.277V147.114C72.0589 150.27 71.0071 152.633 68.9036 154.209C66.8 155.784 64.691 156.572 62.5874 156.572H53.1268V99.8189H62.582Z" fill="white"/><path d="M141.959 99.0529H113.073V119.924H130.731V135.988H113.073V156.854H141.965V172.918H108.253C102.203 173.076 97.1717 168.284 97.0199 162.222V94.2561C96.8735 88.1989 101.661 83.1684 107.706 83.0163H141.965L141.959 99.0529Z" fill="white"/><path d="M198.149 161.684C190.992 178.389 178.17 175.064 172.429 161.684L151.539 83.0217H169.197L185.305 144.8L201.336 83.0217H219L198.149 161.684Z" fill="white"/></svg>
    `,
  },

   {
    platform: "Fiverr",
    username: "haseebdevv",
    url: "https://www.fiverr.com/haseebdevv",
    category: "Freelance",
    color: "#ffffff",
    bgColor: "rgba(59, 130, 246, 0.75)",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.02 508.02"><defs><style>.a{fill:#1dbf73;}.b{fill:#fff;}</style></defs><circle class="a" cx="254.01" cy="254.01" r="254.01"/><circle class="b" cx="315.97" cy="162.19" r="26.87"/><path class="b" d="M345.87,207.66h-123V199.6c0-15.83,15.83-16.13,23.89-16.13,9.25,0,13.44.9,13.44.9v-43.6a155.21,155.21,0,0,0-19.71-1.19c-25.68,0-73.16,7.16-73.16,61.51V208h-22.4v40.31h22.4v85.1h-20.9v40.31H247.34V333.37H222.85v-85.1H290v85.1H269.13v40.31h97.65V333.37H345.87Z" transform="translate(-1.83 -0.98)"/></svg>
    `,
  },

  {
    platform: "GitLab",
    username: "haseeb-developer",
    url: "https://gitlab.com/haseeb-developer",
    category: "Development",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
    <svg viewBox="0 0 32 32" fill="none" aria-labelledby="tanukiHomeDesktop"><path d="m31.46 12.78-.04-.12-4.35-11.35A1.14 1.14 0 0 0 25.94.6c-.24 0-.47.1-.66.24-.19.15-.33.36-.39.6l-2.94 9h-11.9l-2.94-9A1.14 1.14 0 0 0 6.07.58a1.15 1.15 0 0 0-1.14.72L.58 12.68l-.05.11a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48 6.67-5h.02a8.09 8.09 0 0 0 2.7-9.36Z" fill="#E24329"/><path d="m31.46 12.78-.04-.12a14.75 14.75 0 0 0-5.86 2.64l-9.55 7.24 6.09 4.6 6.67-5h.02a8.09 8.09 0 0 0 2.67-9.36Z" fill="#FC6D26"/><path d="m9.9 27.14 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48-6.1-4.6-6.07 4.6Z" fill="#FCA326"/><path d="M6.44 15.3a14.71 14.71 0 0 0-5.86-2.63l-.05.12a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 6.1-4.6-9.56-7.24Z" fill="#FC6D26"/></svg>
    `,
  },

  {
    platform: "X",
    username: "HaseebDevv",
    url: "https://x.com/HaseebDevv",
    category: "Social",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
    <svg fill="none" viewBox="0 0 1200 1227"><path fill="#fff" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/></svg>
    `,
  },

  {
    platform: "npm",
    username: "~mhaseeb.devv",
    url: "https://www.npmjs.com/~mhaseeb.devv",
    category: "Development",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
    <svg viewBox="0 0 2500 2500"><path fill="#c00" d="M0 0h2500v2500H0z"/><path fill="#fff" d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z"/></svg>
    `,
  },

  {
    platform: "Vercel",
    username: "haseeb-developer",
    url: "https://vercel.com/haseeb-developer",
    category: "Development",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
    <svg viewBox="0 0 256 222" preserveAspectRatio="xMidYMid"><path fill="#fff" d="m128 0 128 221.705H0z"/></svg>
    `,
  },

  {
    platform: "Netlify",
    username: "haseeb-developer",
    url: "https://app.netlify.com/teams/haseeb-developer/projects",
    category: "Development",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
    <svg viewBox="0 0 256 226" preserveAspectRatio="xMidYMid"><path fill="#05BDBA" d="M69.181 188.087h-2.417l-12.065-12.065v-2.417l18.444-18.444h12.778l1.704 1.704v12.778zM54.699 51.628v-2.417l12.065-12.065h2.417L87.625 55.59v12.778l-1.704 1.704H73.143z"/><path fill="#014847" d="M160.906 149.198h-17.552l-1.466-1.466v-41.089c0-7.31-2.873-12.976-11.689-13.174-4.537-.119-9.727 0-15.274.218l-.833.852v53.173l-1.466 1.466H95.074l-1.466-1.466v-70.19l1.466-1.467h39.503c15.354 0 27.795 12.441 27.795 27.795v43.882l-1.466 1.466Z"/><path fill="#05BDBA" d="M71.677 122.889H1.466L0 121.423V103.83l1.466-1.466h70.211l1.466 1.466v17.593zM254.534 122.889h-70.211l-1.466-1.466V103.83l1.466-1.466h70.211L256 103.83v17.593zM117.876 54.124V1.466L119.342 0h17.593l1.466 1.466v52.658l-1.466 1.466h-17.593zM117.876 223.787v-52.658l1.466-1.466h17.593l1.466 1.466v52.658l-1.466 1.465h-17.593z"/></svg>
    `,
  },

  
  {
    platform: "Hashnode",
    username: "haseebdev",
    url: "https://hashnode.com/@haseebdev",
    category: "Development",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
    <svg viewBox="0 0 1000 1000" fill="none"><path fill="#2563EB" fill-rule="evenodd" d="M68.692 334.16c-91.59 91.589-91.59 240.085 0 331.674L334.16 931.302c91.589 91.588 240.085 91.588 331.674-.001l265.468-265.467c91.588-91.59 91.588-240.085-.001-331.674L665.834 68.692c-91.59-91.59-240.085-91.59-331.674 0L68.692 334.16Zm431.302 330.06c90.694 0 164.216-73.522 164.216-164.216s-73.522-164.216-164.216-164.216-164.216 73.522-164.216 164.216S409.3 664.22 499.994 664.22Z" clip-rule="evenodd"/></svg>
    `,
  },



  {
    platform: "Contra",
    username: "muhammad_haseeb_vk3lba03",
    url: "https://contra.com/muhammad_haseeb_vk3lba03/",
    category: "Freelance",
    color: "#ffffff",
    bgColor: "rgba(59, 130, 246, 0.75)",
    icon: `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_2)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5837 6.53229C12.606 9.54834 10.017 12.1283 6.98663 14.0969C4.84665 15.5601 2.50067 16.75 0 17.611V18.3014H18.8041V-0.51245H18.1423C17.276 2.00859 16.0718 4.3757 14.5837 6.53229ZM22.2193 -0.51245V18.3822H41.0256V17.6917C38.5257 16.8308 36.1812 15.6408 34.0391 14.1776C31.0116 12.209 28.4204 9.62908 26.4427 6.61303C24.9388 4.43381 23.7239 2.03954 22.8554 -0.51245H22.2193ZM41.0256 21.6178H22.2193V40.5124H22.8554C23.7239 37.9612 24.938 35.5662 26.4427 33.387C28.4204 30.3709 31.0124 27.791 34.0391 25.8224C36.1812 24.3585 38.5257 23.1692 41.0256 22.3083V21.6178ZM18.8048 40.5124V21.6986H0.000754578V22.389C2.50067 23.25 4.84741 24.4399 6.98739 25.9031C10.017 27.8717 12.606 30.4525 14.5845 33.4677C16.0725 35.6243 17.2768 37.9906 18.1439 40.5117L18.8048 40.5124Z" fill="#ffff"/>
</g>
<defs>
<clipPath id="clip0_1_2">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>

    `,
  },

  {
    platform: "Arc",
    username: "haseeb-kn",
    url: "https://arc.dev/dashboard/d/full-time-jobs/browse",
    category: "Jobs",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
    <svg version="1" viewBox="0 0 512 512"><path fill="#fff" d="M236.5.6C233.8.8 225.4 1.9 218 3 147 13.5 83.2 54.1 42.8 114.5c-40.7 60.9-53 138.1-33.3 209.8C26.1 385.1 66 438.4 121 473.4c9.8 6.2 34.9 18.5 47.3 23 13.7 5.1 34.1 10.2 50.9 12.7 20.4 3.2 53.2 3.2 73.6 0 28.2-4.3 50.2-11.2 75.7-23.6 24.8-12.1 45.1-26.4 64.9-45.5 59.9-58.1 87.9-139.8 75.7-221.5C498.5 147 458 83.3 397.5 42.8c-29.9-20-66.2-34-103-39.8-12.7-2-45.9-3.4-58-2.4zM400.8 175c16.1 1.7 43.2 8.2 43.2 10.4 0 .9-12 38.8-12.4 39.3-.1.1-3.7-.9-7.9-2.2-20.3-6.2-46.9-7.7-67.5-3.6C293 231.3 245.1 283.7 238 348.1c-1.4 13-2.4 16.2-6.3 20.6-7.7 8.7-21.3 9.6-29.6 2-3.1-2.9-7.1-11.4-7.1-15.2 0-6.4-4.2-20.4-9-30-10.1-20.2-26.1-34.1-48-41.7-9-3-10.3-3.2-24-3.3-11.4 0-16.1.4-22 2-4.1 1.1-7.9 2-8.4 2s-3.7-8.8-7.2-19.5c-4.5-14-6-19.7-5.1-20.2 1.8-1.1 16-4.8 23-6 9.7-1.6 32-1.3 41.2.7 26.5 5.6 46.7 16.5 65.6 35.6l10.6 10.7 3.2-6.7c8.7-17.7 21.4-35.2 35.9-49.8 39.6-39.9 95.3-60.1 150-54.3z"/></svg>
    `,
  },

  {
    platform: "Wellfound",
    username: "haseeb-kn",
    url: "https://wellfound.com/u/haseeb-kn",
    category: "Jobs",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Wellfound--Streamline-Simple-Icons" height="24" width="24">
  <desc>
    Wellfound Streamline Icon: https://streamlinehq.com
  </desc>
  <title>Wellfound</title>
  <path d="M23.998 8.128c0.063 -1.379 -1.612 -2.376 -2.795 -1.664 -1.23 0.598 -1.322 2.52 -0.156 3.234 1.2 0.862 2.995 -0.09 2.951 -1.57zm0 7.748c0.063 -1.38 -1.612 -2.377 -2.795 -1.665 -1.23 0.598 -1.322 2.52 -0.156 3.234 1.2 0.863 2.995 -0.09 2.951 -1.57zm-20.5 1.762L0 6.364h3.257l2.066 8.106 2.245 -8.106h3.267l2.244 8.106 2.065 -8.106h3.257l-3.54 11.274H11.39c-0.73 -2.713 -1.46 -5.426 -2.188 -8.14l-2.233 8.14H3.5z" fill="#fff" stroke-width="1"></path>
</svg>
    `,
  },

  {
    platform: "Glassdoor",
    username: "GlassDoor",
    url: "https://www.glassdoor.com/Community/index.htm",
    category: "Jobs",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 312.59 437.76"
  class="h-8 w-8"
>
  <defs>
    <style>
      .a {
        fill: #0caa41;
      }
    </style>
  </defs>

  <title>Glassdoor</title>

  <path
    class="a"
    d="M250,0a62.64,62.64,0,0,1,62.59,62.59h-250V319.05a2.33,2.33,0,0,1-2.39,2.38H2.38A2.32,2.32,0,0,1,0,319.05V62.59H0A62.64,62.64,0,0,1,62.59,0H250Zm0,375.17H0a62.64,62.64,0,0,0,62.59,62.59H250a62.64,62.64,0,0,0,62.59-62.59h0V118.37A2.33,2.33,0,0,0,310.2,116H252.38a2.32,2.32,0,0,0-2.38,2.38v256.8Z"
  />
</svg>
    `,
  },

  {
    platform: "Freelancer",
    username: "HaseebDevv",
    url: "https://www.freelancer.com/u/HaseebDevv",
    category: "Freelance",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 91.38"><defs><style>.cls-1{fill:#29b2fe;}</style></defs><title>freelancer</title><path class="cls-1" d="M72.19,0l8.37,11.74L122.88,0Zm-44,91.38L51.08,69,37.3,54.19,28.18,91.38ZM68.7,0,56.46,11l20.59.77L68.7,0ZM21.11,0l4.42,9,24.23,1.51L21.11,0Zm13,46.73L52,13.33,0,10.52,34.09,46.73Zm2.08,2.11L53.08,67,71.73,48.72l5.79-34L54.79,13.51,36.17,48.84Zm0,0Z"/></svg>
    `,
  },

  {
    platform: "PeoplePerHour",
    username: "haseeb-kn",
    url: "https://pph.me/haseeb-kn",
    category: "Freelance",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
    <svg viewBox="0 0 24 24"><path fill="#18A497" d="M20.098 0A3.899 3.899 0 0 1 24 3.903v16.194A3.899 3.899 0 0 1 20.098 24H6.393l-.051-10.34v-.074c0-3.92 3.112-7.09 6.963-7.09 2.31 0 4.177 1.902 4.177 4.254 0 2.352-1.867 4.254-4.177 4.254-.77 0-1.393-.634-1.393-1.418 0-.783.623-1.418 1.393-1.418.769 0 1.392-.634 1.392-1.418 0-.784-.623-1.418-1.392-1.418-2.31 0-4.178 1.9-4.178 4.253 0 2.352 1.868 4.254 4.178 4.254 3.85 0 6.962-3.169 6.962-7.09 0-3.92-3.112-7.089-6.962-7.089-5.39 0-9.75 4.436-9.75 9.925v.086l.023 10.315A3.899 3.899 0 0 1 0 20.097V3.903A3.899 3.899 0 0 1 3.902 0z"/></svg>
    `,
  },
];