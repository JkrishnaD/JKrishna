import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { BsGithub, BsGlobe, BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { SiGoogleforms } from "react-icons/si";
import ThoughtSapce from "@/public/ThoughtSpace.png";
import QuickChat from "@/public/QuickChat.png";
export const DATA = {
  socialButtons: [
    {
      link: "https://x.com/jkrishna_d",
      icon: FaXTwitter,
      message: "Twitter",
    },
    {
      link: "https://github.com/JkrishnaD",
      icon: BsGithub,
      message: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/jkrishnad/",
      icon: BsLinkedin,
      message: "LinkedIn",
    },
    {
      link: "mailto:jayak5063@gmail.com",
      icon: TfiEmail,
      message: "Email",
    },
    {
      link: "https://www.upwork.com/freelancers/~01f29bf792f063bb1b?mp_source=share",
      icon: FaUpwork,
      message: "Upwork",
    },
    {
      link: "",
      icon: SiGoogleforms,
      message: "Resume",
    },
  ],
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "MongoDb",
    "Go",
    "Postgress",
    "Docker",
    "Kafka",
    "Git",
    "Github",
    "Redis",
    "Prisma",
    "Postman",
    "websockets",
  ],
  Projects: [
    {
      title: "An Autmation-tool",
      dates: "",
      active: true,
      description:
        "An intuitive automation platform inspired by Zapier. It simplifies complex workflows by linking various actions to a trigger. With features like webhook-based triggers, integration with services like Resend(email) and Solana, and support for asynchronous task handling using Kafka queues",
      technologies: [
        "Next.js",
        "Typescript",
        "Kafka",
        "Docker",
        "Prisma",
        "Postgres",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/JkrishnaD/zapier",
          icon: <BsGithub className="size-3" />,
        },
      ],
      image: "/zapflow.png",
      video: "",
    },
    {
      title: "Quick Chat",
      href: "https://quickchat-beta.vercel.app/",
      dates: "",
      active: true,
      description:
        "A fast and lightweight real-time messaging application built for instant communication. It offers a minimalist design, responsive UI, and efficient real-time updates powered by Convex database. Quick Chat focuses on providing a smooth, user-centric experience for individuals and teams.",
      technologies: [
        "Next.js",
        "Typescript",
        "Convex",
        "TailwindCSS",
        "Jotai",
        "NextAuth",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://quickchat-beta.vercel.app/",
          icon: <BsGlobe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JkrishnaD/Quickchat",
          icon: <BsGithub className="size-3" />,
        },
      ],
      image: QuickChat,
      video: "",
    },
    {
      title: "Thought-space",
      href: "https://thought-space-nu.vercel.app/",
      active: true,
      description:
        "A collaborative platform designed for sharing and exploring ideas. It features user authentication with OAuth and credentials-based login, ThoughtSpace encourages meaningful connections and intellectual discussions in a visually appealing and user-friendly interface.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "NextAuth",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://thought-space-nu.vercel.app/",
          icon: <BsGlobe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JkrishnaD/ThoughtSpace",
          icon: <BsGithub className="size-3" />,
        },
      ],
      image: ThoughtSapce,
      video: "",
    },
    {
      title: "Authenticated system",
      href: "https://authentication-delta-five.vercel.app/",
      dates: "",
      active: true,
      description:
        "A robust authentication framework designed for secure user access management. It supports OAuth integrations (e.g., Google, GitHub) and custom credentials, ensuring flexibility and security. Features include JWT-based sessions, secure password hashing, and seamless login flows, making it suitable for scalable applications.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Postgres",
        "NextAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://authentication-delta-five.vercel.app/",
          icon: <BsGlobe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JkrishnaD/Authentication",
          icon: <BsGithub className="size-3" />,
        },
      ],
      image: "/authenticator.png",
      video: "",
    },
    {
      title: "Inkwell",
      href: "https://ink-well-tan.vercel.app/signin",
      dates: "",
      active: true,
      description:
        "A user-friendly blogging platform that allows individuals to sign in using email credentials, write blogs, and manage their published content. The platform enables users to view their own blogs in a seamless interface. Built using modern technologies like React for the frontend, Express and Hono for the backend, PostgreSQL for database management, and Zod for validation.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Postgres",
        "Express",
        "Shadcn UI",
        "zod",
        "prisma",
        "Hono",
      ],
      links: [
        {
          type: "Website",
          href: "https://ink-well-tan.vercel.app/signin",
          icon: <BsGlobe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JkrishnaD/InkWell",
          icon: <BsGithub className="size-3" />,
        },
      ],
      image: "/inkwell.png",
      video: "",
    },
    {
      title: "Landing-page",
      href: "https://postable-liard.vercel.app/",
      dates: "",
      active: true,
      description:
        "This landing page is designed to provide an interactive user experience, built with Next.js, TailwindCSS, and TypeScript for seamless performance and modern design.",
      technologies: ["NextJs", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://postable-liard.vercel.app/",
          icon: <BsGlobe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JkrishnaD/postable",
          icon: <BsGithub className="size-3" />,
        },
      ],
      image: "/postable.png",
      video: "",
    },
  ],
  education: [
    {
      school: "Jain University",
      href: "https://www.jainuniversity.ac.in/",
      degree: "B-Tech in Computer science",
      location: "Banglore,Karnataka",
      logoUrl: "/jain.png",
      start: "2022",
      end: "2026",
    },
  ],
};
