/**
 * Muhammad Haseeb's personal profile and account information.
 *
 * To add another account, include:
 * platform, username, url, category, color, bgColor, and icon.
 */

const profileData = {
  name: "Muhammad Haseeb",

  title: "Senior Frontend Developer | Shopify & WordPress Developer",

  bio:
    "Frontend Developer with 4+ years of experience building responsive web applications, Shopify stores, WordPress websites, and modern user interfaces.",

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
      value: "React · Next.js · TypeScript · Shopify · WordPress",
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
    bgColor: "rgba(20, 168, 0, 0.8)",
    icon: `
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-6 w-6"
      >
        <path d="M18.561 5.35c-2.217 0-3.871 1.447-4.543 3.728-1.047-1.57-1.832-3.458-2.281-5.047H8.092v7.13a2.505 2.505 0 01-5.009 0v-7.13H0v7.13a5.59 5.59 0 0010.978 1.493c.519.991 1.159 1.96 1.938 2.827L10.72 24h3.167l1.591-6.458c.991.631 2.091 1.001 3.083 1.001a6.597 6.597 0 000-13.193zm0 10.108c-.77 0-1.742-.389-2.632-1.07l.561-2.272.019-.089c.21-1.159.86-3.101 2.052-3.101a3.266 3.266 0 010 6.532z"/>
      </svg>
    `,
  },

  {
    platform: "Indeed",
    username: "Muhammad Haseeb",
    url: "https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobsearch--indeedmobile",
    category: "Jobs",
    color: "#ffffff",
    bgColor: "rgba(37, 87, 167, 0.85)",
    icon: `
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-6 w-6"
      >
        <path d="M14.822 6.852a2.14 2.14 0 11-4.28 0 2.14 2.14 0 014.28 0zM11.14 9.78h3.084V24H11.14V9.78zM19.116 0C13.052.45 8.4 3.504 5.412 8.628c-.348.6-.636 1.212-.876 1.824 2.412-3.012 5.892-4.92 9.864-5.22 1.8-.132 3.42.084 4.812.564L19.116 0z"/>
      </svg>
    `,
  },

  {
    platform: "YouTube",
    username: "rarer1133",
    url: "https://www.youtube.com/@rarer1133",
    category: "Social",
    color: "#ffffff",
    bgColor: "rgba(255, 0, 0, 0.85)",
    icon: `
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-6 w-6"
      >
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    `,
  },

  {
    platform: "Email",
    username: "haseeb.devv@gmail.com",
    url: "mailto:haseeb.devv@gmail.com",
    category: "Contact",
    color: "#ffffff",
    bgColor: "rgba(234, 67, 53, 0.8)",
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
          d="M3 6h18v12H3V6zm0 1l9 6 9-6"
        />
      </svg>
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
];