export const myProjects = [
  {
    id: 7,
    title: "Eprisi Account (SSO)",
    description:
      "A centralized single sign-on portal for the entire Eprisi Workspace suite, built on an unmodified Keycloak engine with a fully custom login experience and branding.",
    subDescription: [
      "Split the SSO stack into an unmodified upstream Keycloak engine plus separately deployable theme, SPI, and portal apps, mounted into the engine via an init-container instead of a custom-baked image.",
      "Built a Keycloakify login theme and a Next.js account-portal BFF, sharing a design-system package across both so Keycloak itself stays upgradeable without losing the custom branding.",
      "Extended Keycloak with a custom Java SPI to support admin-approved user registration with real-time Telegram alerts.",
    ],
    href: "https://auth.eprisi.com",
    logo: "",
    image: "/assets/projects/eprisi-account.png",
    tags: [
      { id: 1, name: "Keycloak", path: "/assets/logos/keycloak.svg" },
      { id: 2, name: "Next.js", path: "/assets/logos/nextjs-icon.webp" },
      { id: 3, name: "TypeScript", path: "/assets/logos/typescript.svg" },
    ],
  },
  {
    id: 8,
    title: "Eprisi Chat",
    description:
      "A Next.js wrapper frontend that delivers a fully rebranded chat experience on top of an unmodified Rocket.Chat backend, as part of the Eprisi Workspace suite.",
    subDescription: [
      "Built a Next.js 15 wrapper frontend for an unmodified Rocket.Chat image, using an allowlisted BFF route to proxy REST calls and inject session tokens server-side.",
      "Implemented a short-lived, memory-only DDP connection for realtime subscriptions, following Rocket.Chat's own guidance to use REST for mutating actions.",
      "Replaced an earlier forked/restyled Rocket.Chat approach with this wrapper pattern, so upstream Rocket.Chat upgrades no longer risk breaking the custom UI.",
    ],
    href: "https://chat.eprisi.com",
    logo: "",
    image: "/assets/projects/eprisi-chat.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs-icon.webp" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "Rocket.Chat", path: "/assets/logos/rocketdotchat.svg" },
    ],
  },
  {
    id: 9,
    title: "Eprisi Chat Mobile (Rocket.Chat React Native)",
    description:
      "A fully redesigned and rebranded mobile client for Eprisi Chat, forked from the open-source Rocket.Chat React Native app.",
    subDescription: [
      "Forked the open-source Rocket.Chat React Native app and redesigned/rebranded its entire UI to match Eprisi Chat's product mockups, reaching close to pixel-perfect (~99%) visual fidelity.",
      "Evaluated mockup features that were not technically feasible on the upstream codebase and proposed alternative UX solutions to keep the redesign on track.",
      "Connects to a self-hosted Rocket.Chat server behind Keycloak SSO (Eprisi Account) via the Rocket.Chat REST & Realtime API.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/eprisi-chat-mobile.png",
    tags: [
      { id: 1, name: "React Native", path: "/assets/logos/react.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "Redux", path: "/assets/logos/redux.svg" },
    ],
  },
  {
    id: 10,
    title: "Eprisi Cloud",
    description:
      "A Next.js wrapper UI for Eprisi's self-hosted cloud storage platform, talking to an unmodified Nextcloud instance server-side.",
    subDescription: [
      "Built a Next.js wrapper UI on its own domain that talks to an unmodified Nextcloud instance server-side via WebDAV/OCS.",
      "Implemented both local-password and direct Keycloak OIDC login, giving SSO users bearer-token WebDAV access with no app password required.",
      "Diagnosed and fixed a production bug where Docker's embedded DNS round-robined a shared service hostname between two unrelated Nextcloud projects.",
    ],
    href: "https://eprisi-drive.eprisi.com",
    logo: "",
    image: "/assets/projects/eprisi-cloud.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs-icon.webp" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "Nextcloud", path: "/assets/logos/nextcloud.svg" },
    ],
  },
  {
    id: 11,
    title: "Eprisi Cloud Desktop (Sync Client)",
    description:
      "A cross-platform desktop sync client for Eprisi Cloud, built with Tauri for a lightweight native footprint on both macOS and Windows.",
    subDescription: [
      "Building a cross-platform (macOS & Windows) desktop sync client for Eprisi Cloud, syncing with its web and mobile apps.",
      "Implemented a custom login screen with Keycloak SSO via OIDC redirect on top of the Nextcloud WebDAV/OCS API.",
      "Matched the UI to the Eprisi Cloud web app for a consistent experience across the whole suite. Currently in active development, pre-release.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/eprisi-cloud-desktop.png",
    tags: [
      { id: 1, name: "Tauri", path: "/assets/logos/tauri.svg" },
      { id: 2, name: "Rust", path: "/assets/logos/rust.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 12,
    title: "Internet Mandiri — ISP Billing, Marketplace & Village Tourism",
    description:
      "A unified platform for PT PC24 combining ISP subscriber billing, a local marketplace, and a village-tourism ticketing module.",
    subDescription: [
      "Built a Laravel + Inertia.js + React/TypeScript platform combining ISP subscriber billing, a local marketplace with seller ratings/reviews, and a village-tourism ticketing module with QR-code scanning.",
      "Integrated Midtrans for online payments and the MikroTik RouterOS API for PPPoE monitoring and remote internet on/off control.",
      "Implemented RBAC with audit logging across superadmin, admin, owner, and member roles, deployed to production.",
    ],
    href: "https://ciawi.pc24.net.id",
    logo: "",
    image: "/assets/projects/internet-mandiri.png",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.png" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 4, name: "MySQL", path: "/assets/logos/mysql.png" },
    ],
  },
  {
    id: 1,
    title: "SIADLAB (Laboratory & Administration Information System)",
    description:
      "A comprehensive management system designed to streamline laboratory operations and administrative processes, ensuring efficient data tracking and resource management.",
    subDescription: [
      "Developed a robust backend using Laravel 12 to handle complex laboratory workflows and administrative data management.",
      "Built a highly interactive and responsive user interface using ReactJS, ensuring seamless navigation across devices.",
      "Leveraged MySQL for high-performance database management, optimizing data storage and retrieval for laboratory assets.",
      "Implemented a modern, utility-first design approach with Tailwind CSS to enhance overall usability and visual consistency.",
    ],
    href: "https://siadlab.unida.education/",
    logo: "",
    image: "/assets/projects/siadlab.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/logos/laravel.png",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/logos/mysql.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "UNIDA Education",
    description:
      "A dedicated academic platform showcasing the projects and scholarly works of students and faculty members from the Faculty of Computer Science.",
    subDescription: [
      "Built a powerful administrative dashboard using Laravel and Filament PHP, enabling seamless management of academic content and user submissions.",
      "Developed a modern frontend using ReactJS, ensuring a fast, reactive, and engaging browsing experience for all users.",
      "Styled the entire platform with Tailwind CSS to maintain a professional, clean, and institutional aesthetic.",
      "Implemented an efficient content management workflow, allowing faculty to easily categorize and publish diverse scholarly works.",
    ],
    href: "https://unida.education/",
    logo: "",
    image: "/assets/projects/homepage.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/logos/laravel.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
    ],
  },
  {
    id: 3,
    title: "SIMPEG - SMK Kesehatan Moestopo",
    description:
      "A comprehensive human resource management system designed for SMK Kesehatan Moestopo to streamline teacher and staff attendance, payroll processing, and personnel data administration.",
    subDescription: [
      "Engineered a centralized personnel management module using Laravel, providing an efficient way to track and maintain detailed teacher and staff profiles.",
      "Developed a real-time attendance system to automate daily logs, allowing school administration to monitor punctuality and working hours effortlessly.",
      "Implemented an automated payroll system that accurately calculates salaries, deductions, and performance bonuses based on integrated attendance data.",
      "Built a secure, custom-tailored administrative dashboard from scratch, enabling HR staff to manage sensitive personnel and financial records with granular control.",
      "Designed a responsive and modern user interface using ReactJS and Tailwind CSS to ensure a seamless experience across desktop and mobile devices for all staff.",
    ],
    href: "https://simpeg.smkkpdm.sch.id/dashboard",
    logo: "",
    image: "/assets/projects/simpeg.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/logos/laravel.png",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/logos/mysql.png",
      },
    ],
  },
  {
    id: 4,
    title: "DreamTale",
    description:
      "An immersive 2D adventure game developed with GameMaker, featuring unique gameplay mechanics and a captivating storyline.",
    subDescription: [
      "Engineered core gameplay systems using GameMaker Language (GML) to ensure smooth mechanics and responsive controls.",
      "Designed intricate level layouts and dynamic environments to enhance player immersion throughout the game.",
      "Implemented complex state machines and event-driven systems to manage character behavior and interactive game objects.",
      "Optimized game performance, asset management, and collision detection within the GameMaker environment for a stable 60 FPS experience.",
    ],
    href: "", // Tambahkan link ke game jika ada
    logo: "",
    image: "/assets/projects/dreamtale.png",
    tags: [
      {
        id: 1,
        name: "GameMaker",
        path: "/assets/logos/gamemaker.png",
      },
      {
        id: 2,
        name: "GML",
        path: "/assets/logos/gml.png",
      },
      {
        id: 3,
        name: "Aseprite",
        path: "/assets/logos/aseprite.png",
      },
    ],
  },
  {
    id: 5,
    title: "E-Commerce Peternakan (Livestock Marketplace)",
    description:
      "A specialized digital marketplace platform designed to connect livestock farmers directly with buyers, simplifying the trade of agricultural products.",
    subDescription: [
      "Developed a robust backend architecture using Laravel to handle complex transaction flows, product inventory, and user profiles.",
      "Implemented a secure and scalable MySQL database to manage real-time livestock listings, farmer data, and order history.",
      "Built a modern, mobile-responsive frontend using Tailwind CSS, ensuring an accessible shopping experience for users in both urban and rural areas.",
      "Integrated secure authentication and role-based access management to facilitate seamless interactions between buyers, sellers, and platform administrators.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ecommerce.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/logos/laravel.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/logos/mysql.png",
      },
    ],
  },
  {
    id: 6,
    title: "Client Portfolio CMS",
    description:
      "A customizable portfolio website platform that enables multiple clients to manage and personalize their own portfolio content through a dedicated admin dashboard.",
    subDescription: [
      "Developed a modern portfolio platform using Next.js and React, delivering fast performance through server-side rendering and optimized routing.",
      "Integrated Supabase as the backend service to provide secure authentication, real-time database management, and scalable content storage.",
      "Built a comprehensive admin dashboard that allows clients to customize portfolio sections including Hero, About, Services, Projects, Experience, Skills, Contact, and Social Links without modifying the source code.",
      "Designed a fully responsive and visually consistent user interface with Tailwind CSS, ensuring an optimal experience across desktop, tablet, and mobile devices.",
      "Implemented role-based authentication and protected admin routes, enabling each client to securely manage only their own portfolio data.",
    ],
    href: "https://gherryanwashesyasyagara.vercel.app/",
    logo: "",
    image: "/assets/projects/client-portfolio.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs-icon.webp",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/supabase.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const myCertificates = [
  {
    id: 1,
    title: "SQL for Data Science",
    issuer: "University of California, Davis (via Coursera)",
    issuedDate: "27 Maret 2023",
    expiryDate: null,
    credentialId: "4FADCZB2LG2T",
    credentialUrl: "https://coursera.org/verify/4FADCZB2LG2T",
    imageUrl: "/assets/certificates/1.jpg",
    category: "Data Science",
    skills: ["SQL", "Data Analysis", "Queries"]
  },
  {
    id: 2,
    title: "C for Everyone: Programming Fundamentals",
    issuer: "University of California, Santa Cruz (via Coursera)",
    issuedDate: "24 Maret 2023",
    expiryDate: null,
    credentialId: "UVWZLXNDK8TZ",
    credentialUrl: "https://coursera.org/verify/UVWZLXNDK8TZ",
    imageUrl: "/assets/certificates/2.jpg",
    category: "Programming",
    skills: ["C Language", "Programming Fundamentals", "Algorithms"]
  },
  {
    id: 3,
    title: "Beginning C++ Programming - From Beginner to Beyond",
    issuer: "Udemy",
    issuedDate: "15 April 2023",
    expiryDate: null,
    credentialId: "UC-41e31c01-dafa-4af4-a48f-4d88153f3220",
    credentialUrl: "https://ude.my/UC-41e31c01-dafa-4af4-a48f-4d88153f3220",
    imageUrl: "/assets/certificates/3.jpg",
    category: "Programming",
    skills: ["C++", "Object-Oriented Programming (OOP)", "Data Structures"]
  },
  {
    id: 4,
    title: "SQL - MySQL for Data Analytics and Business Intelligence",
    issuer: "Udemy",
    issuedDate: "7 Juni 2023",
    expiryDate: null,
    credentialId: "UC-82d294b8-cf9e-4a54-ab5a-c2693b250f22",
    credentialUrl: "https://ude.my/UC-82d294b8-cf9e-4a54-ab5a-c2693b250f22",
    imageUrl: "/assets/certificates/4.jpg",
    category: "Data Analytics",
    skills: ["MySQL", "Business Intelligence", "Data Analytics", "Relational Database"]
  },
  {
    id: 5,
    title: "UI/UX Design",
    issuer: "Special Skill Indonesia",
    issuedDate: "5 Februari 2026",
    expiryDate: null,
    credentialId: "SSB36E081",
    credentialUrl: "https://specialskill.id/sertifikat",
    imageUrl: "/assets/certificates/5.jpg",
    category: "Design",
    skills: ["UI/UX Design", "Figma", "Wireframing", "Prototyping"]
  }
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "6285885978036",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/reva-yulian-satria-74114930b/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/reyulians._/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Fullstack Programmer",
    job: "PT Epsilon Prisma Sinergi (Eprisi)",
    date: "July 2026 - Present",
    contents: [
      "Building Eprisi Workspace, a self-hosted Google Workspace alternative for enterprise and government clients, unifying Eprisi Account (Keycloak), Eprisi Cloud (Nextcloud + Collabora), and Eprisi Chat (Rocket.Chat) behind a single login.",
      "Implementing single sign-on across the suite with a Keycloak realm and a custom Java SPI for admin-approved registration, and designing a wrapper architecture so core platforms can be upgraded without breaking customizations.",
      "Containerizing and deploying the stack with Docker and Dokploy behind Traefik and Cloudflare, with automated build-and-deploy pipelines on self-hosted GitLab CI/CD.",
    ],
  },
  {
    title: "Freelance Fullstack Developer",
    job: "Self-employed",
    date: "March 2026 - Present",
    contents: [
      "PT PC24 - Internet Desa Mandiri: Building an ISP management platform with automated billing, a local marketplace, and village-tourism modules, integrating Midtrans payments and the MikroTik API for network automation.",
      "SMK Kesehatan Moestopo - SIMPEG: Building an HR information system with face-recognition and QR-code attendance plus automated payroll and overtime calculation.",
    ],
  },
  {
    title: "Data Entry Operator",
    job: "IIMI Image Management Pvt. Ltd.",
    date: "15 March 2025 - 14 October 2025",
    contents: [
      "Executing high-volume data entry operations with exceptional accuracy, ensuring seamless digital transformation and data accessibility.",
      "Conducting rigorous data quality control (QC) and validation processes to identify discrepancies, maintaining the highest standards of data integrity and consistency for enterprise-level projects.",
      "Optimizing data workflows to improve turnaround times while adhering strictly to project specifications and client requirements.",
    ],
  },
  {
    title: "Data Entry & IT Support",
    job: "Bogor City Education Office",
    date: "15 July 2024 - 15 September 2024",
    contents: [
      "Streamlined data management tasks for the education department, ensuring the precise and timely input of sensitive educational records and regional databases.",
      "Delivered proactive IT support by troubleshooting hardware and software issues, significantly reducing downtime and maintaining consistent office productivity.",
      "Collaborated with departmental staff to optimize administrative workflows, providing technical guidance to enhance the efficiency of daily digital operations.",
    ],
  },
  {
    title: "Administrative Intern",
    job: "DSIT Djuanda University",
    date: "2 February 2021 - 4 March 2021",
    contents: [
      "Supported core administrative functions by managing comprehensive document lifecycle processes, including sorting, digital archiving, and systematic physical filing.",
      "Facilitated the smooth execution of daily office operations by handling routine administrative inquiries and coordinating documentation for departmental needs.",
      "Developed organizational strategies for data retrieval, enabling staff to access essential institutional information more efficiently and reliably.",
    ],
  },
];


