"use client";

import { useState } from "react";
import { BentoGridItem } from "./card";

const projects = [
  {
    title: "PostPersona",
    description:
      "AI-powered social content generation platform with persona-driven writing and approval-first publishing workflow.",
    imgUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    category: "AI SaaS Application",
    meta: "Next.js 16",
    stack: "Next.js 16, React 19, Convex, TypeScript, Gemini/Groq APIs",
    repoUrl: "https://github.com/gagan-baghel/PostPersona",
  },
  {
    title: "EdTechPlatform",
    description:
      "Full-stack e-learning platform with auth, payments, course management, and production-grade backend APIs.",
    imgUrl:
      "https://images.unsplash.com/opengraph/1x1.png?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1645363308298-3a949c8bfd86%3Fcrop%3Dfaces%252Cedges%26h%3D630%26w%3D1200%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fw%253D750%2526h%253D84%2526txt%253Deducational%252Btechnology%2526txt-pad%253D80%2526txt-align%253Dmiddle%25252Cleft%2526txt-color%253D%252523000000%2526txt-size%253D40%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZWR1Y2F0aW9uYWwlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3MjEzODM3Nnww%26ixlib%3Drb-4.1.0&blend-w=1&auto=format&fit=crop&q=60",
    category: "Full-Stack MERN Application",
    meta: "MERN",
    stack: "React (Vite), Node.js, Express, MongoDB, JWT, Razorpay, Cloudinary",
    repoUrl: "https://github.com/gagan-baghel/EdTechPlatform",
  },
  {
    title: "linkstore",
    description:
      "Starter React + Vite project with minimal setup and foundational app structure.",
    imgUrl:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2000&auto=format&fit=crop",
    category: "Starter Template",
    meta: "Vite",
    stack: "React + Vite",
    repoUrl: "https://github.com/gagan-baghel/linkstore",
  },
  {
    title: "ButtlerAI",
    description:
      "Gemini-style AI assistant clone with chat UI, typing effects, image-to-text, and text-to-audio.",
    imgUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    category: "AI Chat Interface",
    meta: "React",
    stack: "React, JavaScript",
    repoUrl: "https://github.com/gagan-baghel/ButtlerAI",
  },
  {
    title: "EMailManager",
    description:
      "Email automation utility for filtering, mass emailing, and unwanted message handling.",
    imgUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop",
    category: "Automation Utility",
    meta: "Python/Node",
    stack: "Python, Node.js",
    repoUrl: "https://github.com/gagan-baghel/EMailManager",
  },
  {
    title: "Consistency-Manager",
    description:
      "Productivity app for sprint and earnings tracking with analytics, CRUD APIs, and progress logic.",
    imgUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000&auto=format&fit=crop",
    category: "Full-Stack Productivity App",
    meta: "Next.js",
    stack: "Next.js, MongoDB",
    repoUrl: "https://github.com/gagan-baghel/Consistency-Manager",
  },
  {
    title: "Supes",
    description:
      "Interactive brand prototype for a motorcycle company with advanced motion and storytelling flows.",
    imgUrl:
      "https://images.unsplash.com/photo-1517846693594-1567da72af75?q=80&w=2000&auto=format&fit=crop",
    category: "Interactive Product Prototype",
    meta: "TypeScript",
    stack: "Next.js, TypeScript",
    repoUrl: "https://github.com/gagan-baghel/Supes",
  },
  {
    title: "HorizontalPortfolio",
    description:
      "Horizontally scrolling portfolio with animation-driven UX and modular architecture.",
    imgUrl:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2000&auto=format&fit=crop",
    category: "Advanced Portfolio System",
    meta: "GSAP + Motion",
    stack: "Next.js, React, Tailwind CSS, GSAP, Framer Motion",
    repoUrl: "https://github.com/gagan-baghel/HorizontalPortfolio",
  },
  {
    title: "TelegramIOT-BOT-Python",
    description:
      "Telegram bot integrated with ultrasonic sensor hardware and embedded IoT programming.",
    imgUrl:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2000&auto=format&fit=crop",
    category: "IoT + Bot Integration",
    meta: "Python + ESP",
    stack: "Python, ESP Microcontroller",
    repoUrl: "https://github.com/gagan-baghel/TelegramIOT-BOT-Python",
  },
  {
    title: "MERN",
    description:
      "AI image generation interface built using MERN principles with backend-ready architecture.",
    imgUrl:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2000&auto=format&fit=crop",
    category: "MERN Application",
    meta: "AI Images",
    stack: "React, Node (Partial), MongoDB",
    repoUrl: "https://github.com/gagan-baghel/MERN",
  },
  {
    title: "React-Redux",
    description:
      "Collection of React applications demonstrating Redux state management and scalable store architecture.",
    imgUrl:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2000&auto=format&fit=crop",
    category: "State Management Projects",
    meta: "Redux",
    stack: "React, Redux",
    repoUrl: "https://github.com/gagan-baghel/React-Redux",
  },
  {
    title: "LawFirm",
    description:
      "Responsive multi-page React template with structured routing and EmailJS contact integration.",
    imgUrl:
      "https://images.unsplash.com/photo-1528747008803-2d9f0f4f6f1c?q=80&w=2000&auto=format&fit=crop",
    category: "React Multi-page Template",
    meta: "Template",
    stack: "React, JavaScript",
    repoUrl: "https://github.com/gagan-baghel/LawFirm",
  },
  {
    title: "React",
    description:
      "Practice repository with reusable React component architecture across varied mini applications.",
    imgUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop",
    category: "React Practice Projects",
    meta: "Practice",
    stack: "React, Bootstrap",
    repoUrl: "https://github.com/gagan-baghel/React",
  },
  {
    title: "gagan_baghel_Portfolio",
    description:
      "Personal Next.js portfolio with App Router, project highlights, and structured animation sections.",
    imgUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
    category: "Portfolio Website",
    meta: "Next.js",
    stack: "Next.js",
    repoUrl: "https://github.com/gagan-baghel/gagan_baghel_Portfolio",
  },
  {
    title: "vzallsites",
    description:
      "Collection of themed websites with animation, sliders, PWA frontend, and responsive experiments.",
    imgUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
    category: "Multi-Website Templates",
    meta: "UI Collection",
    stack: "HTML, CSS, JS, React (Chakra UI), Swiper, ScrollReveal",
    repoUrl: "https://github.com/gagan-baghel/vzallsites",
  },
  {
    title: "SpotifyClone_frontend",
    description:
      "Complex static Spotify UI clone with playlist rendering logic and interactive media components.",
    imgUrl:
      "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=2000&auto=format&fit=crop",
    category: "Complex Static Web App",
    meta: "Vanilla JS",
    stack: "HTML, CSS, JavaScript",
    repoUrl: "https://github.com/gagan-baghel/SpotifyClone_frontend",
  },
  {
    title: "restaurant",
    description:
      "Responsive restaurant landing website with structured sections and multi-page navigation.",
    imgUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop",
    category: "Static Multi-page Website",
    meta: "Restaurant",
    stack: "HTML, CSS, JavaScript",
    repoUrl: "https://github.com/gagan-baghel/restaurant",
  },
  {
    title: "dental-website",
    description:
      "Informational business website for a dental clinic with responsive layout patterns.",
    imgUrl:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop",
    category: "Static Business Website",
    meta: "Dental",
    stack: "HTML, CSS, JavaScript",
    repoUrl: "https://github.com/gagan-baghel/dental-website",
  },
  {
    title: "Websites_Prototype",
    description:
      "Experimental prototype collection including landing pages, parallax layouts, and product concepts.",
    imgUrl:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2000&auto=format&fit=crop",
    category: "Website Prototype Collection",
    meta: "Prototypes",
    stack: "HTML, CSS, JavaScript",
    repoUrl: "https://github.com/gagan-baghel/Websites_Prototype",
  },
  {
    title: "startingwithbootstrap",
    description:
      "Bootstrap-based templates covering landing pages, blog layouts, and responsive blocks.",
    imgUrl:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2000&auto=format&fit=crop",
    category: "Bootstrap Templates",
    meta: "Bootstrap",
    stack: "HTML, CSS, Bootstrap",
    repoUrl: "https://github.com/gagan-baghel/startingwithbootstrap",
  },
  {
    title: "frontendPractice",
    description:
      "Frontend layout practice repository focused on CSS fundamentals and Bootstrap UI structure.",
    imgUrl:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2000&auto=format&fit=crop",
    category: "Frontend Practice Projects",
    meta: "UI Practice",
    stack: "HTML, CSS, Bootstrap",
    repoUrl: "https://github.com/gagan-baghel/frontendPractice",
  },
  {
    title: "TailwindComponents",
    description:
      "Repository intended for reusable Tailwind UI components and design snippets.",
    imgUrl:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2000&auto=format&fit=crop",
    category: "UI Components",
    meta: "Inactive",
    stack: "Tailwind CSS",
    repoUrl: "https://github.com/gagan-baghel/TailwindComponents",
  },
  {
    title: "DesignPatterns",
    description:
      "Classical software design pattern implementations demonstrating object-oriented architecture principles.",
    imgUrl:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=2000&auto=format&fit=crop",
    category: "Software Architecture Concepts",
    meta: "Patterns",
    stack: "Java, C++",
    repoUrl: "https://github.com/gagan-baghel/DesignPatterns",
  },
  {
    title: "CodeBaseOfC_PlusPlus",
    description:
      "Collection of C++ programs and exercises focused on core logic, problem solving, and fundamentals.",
    imgUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2000&auto=format&fit=crop",
    category: "Programming Practice",
    meta: "C++",
    stack: "C++",
    repoUrl: "https://github.com/gagan-baghel/CodeBaseOfC_PlusPlus",
  },
  {
    title: "Javascript",
    description:
      "JavaScript mini-projects collection including clock, calculator, quiz, games, and to-do apps.",
    imgUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
    category: "JavaScript Mini Projects",
    meta: "Mini Apps",
    stack: "HTML, CSS, JavaScript",
    repoUrl: "https://github.com/gagan-baghel/Javascript",
  },
  {
    title: "JS_Basics",
    description:
      "Core JavaScript fundamentals repository covering language basics and DOM-oriented learning.",
    imgUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop",
    category: "JavaScript Fundamentals",
    meta: "Fundamentals",
    stack: "JavaScript",
    repoUrl: "https://github.com/gagan-baghel/JS_Basics",
  },
  {
    title: "gagan-baghel",
    description:
      "Profile README repository summarizing developer skills, highlights, and experience at a glance.",
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
    category: "Profile README Repository",
    meta: "Markdown",
    stack: "Markdown",
    repoUrl: "https://github.com/gagan-baghel/gagan-baghel",
  },
];

export function AllProjects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex h-full w-full flex-col gap-6 px-0 sm:gap-7 lg:flex-row lg:items-center lg:justify-start lg:gap-10 lg:px-12 lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:cursor-grab lg:active:cursor-grabbing lg:no-scrollbar">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`mx-auto w-full max-w-xl lg:mx-0 lg:w-[430px] lg:max-w-none lg:flex-shrink-0 lg:snap-center xl:w-[500px] ${!showAll && index >= 3 ? "hidden lg:block" : ""
              }`}
          >
            <BentoGridItem {...project} />
          </div>
        ))}
        <div className="hidden w-[20vw] flex-shrink-0 lg:block" />
      </div>

      {!showAll && projects.length > 3 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-8 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold tracking-[0.16em] text-zinc-100 uppercase backdrop-blur transition-all hover:border-white/40 hover:bg-white/10 lg:hidden"
        >
          See More Projects
        </button>
      )}
    </div>
  );
}
