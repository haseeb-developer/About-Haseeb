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
    bgColor: "#0C111D",
    icon: `
      <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"/></svg>
    `,
  },

  {
    platform: "YouTube",
    username: "rarer1133",
    url: "https://www.youtube.com/@rarer1133",
    category: "Social",
    color: "#ffffff",
    bgColor: "transparent",
    icon: `
      <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 180"><path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"/><path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z"/></svg>
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
];