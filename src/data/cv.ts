// src/data/cv.ts
// Single source of truth for CV data used across the portfolio.
// Update dates / facts HERE and every view stays in sync.

export type SkillCategory = "development" | "devops" | "tools";

export interface Skill {
  name: string;
  image: string;
  website: string;
  category: SkillCategory;
}

export interface Project {
  id: string;
  year: string;
  role: string;
  team: string;
  stack: string[];
  image: string;
  link: string;
}

export interface TimelineEntry {
  id: string;
  date: string;
  color: string;
  icon: string;
  kind: "work" | "study";
}

// --- Skills ---------------------------------------------------------------
// Import assets here so views don't have to.
import cImage from "@/assets/skills/C.png";
import cppImage from "@/assets/skills/C++.png";
import dockerImage from "@/assets/skills/Docker.png";
import lispImage from "@/assets/skills/Lisp.png";
import nestjsImage from "@/assets/skills/NestJs.png";
import reactImage from "@/assets/skills/React.png";
import pythonImage from "@/assets/skills/Python.png";
import typescriptImage from "@/assets/skills/Typescript.png";
import vuejsImage from "@/assets/skills/Vuejs.png";
import jenkinsImage from "@/assets/skills/Jenkins.png";
import ansibleImage from "@/assets/skills/Ansible.png";
import postgresImage from "@/assets/skills/PostgreSQL.svg"; // add this asset
import rhelImage from "@/assets/skills/RHEL.webp"; // add this asset
import gitImage from "@/assets/skills/Git.png"; // add this asset

export const skills: Skill[] = [
  // Development
  {
    name: "C",
    image: cImage,
    website: "https://en.wikipedia.org/wiki/C_(programming_language)",
    category: "development",
  },
  {
    name: "C++",
    image: cppImage,
    website: "https://en.wikipedia.org/wiki/C%2B%2B",
    category: "development",
  },
  {
    name: "TypeScript",
    image: typescriptImage,
    website: "https://www.typescriptlang.org/",
    category: "development",
  },
  {
    name: "Python",
    image: pythonImage,
    website: "https://www.python.org/",
    category: "development",
  },
  {
    name: "NestJS",
    image: nestjsImage,
    website: "https://nestjs.com/",
    category: "development",
  },
  {
    name: "React",
    image: reactImage,
    website: "https://reactjs.org/",
    category: "development",
  },
  {
    name: "React Native",
    image: reactImage,
    website: "https://reactnative.dev/",
    category: "development",
  },
  {
    name: "Vue.js",
    image: vuejsImage,
    website: "https://vuejs.org/",
    category: "development",
  },
  {
    name: "Lisp",
    image: lispImage,
    website: "https://lisp-lang.org/",
    category: "development",
  },
  // DevOps
  {
    name: "Docker",
    image: dockerImage,
    website: "https://www.docker.com/",
    category: "devops",
  },
  {
    name: "Ansible",
    image: ansibleImage,
    website: "https://www.ansible.com/",
    category: "devops",
  },
  {
    name: "Jenkins",
    image: jenkinsImage,
    website: "https://www.jenkins.io/",
    category: "devops",
  },
  {
    name: "RHEL",
    image: rhelImage,
    website:
      "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux",
    category: "devops",
  },
  // Tools
  {
    name: "PostgreSQL",
    image: postgresImage,
    website: "https://www.postgresql.org/",
    category: "tools",
  },
  {
    name: "Git",
    image: gitImage,
    website: "https://git-scm.com/",
    category: "tools",
  },
];

// --- Projects -------------------------------------------------------------
import dominoImage from "@/assets/projects/domino.jpg";
import snakeImage from "@/assets/projects/snake.png";
import rTypeImage from "@/assets/projects/RType.png";
import ecommerceImage from "@/assets/projects/Ecommerce.jpg";

export const projects: Project[] = [
  {
    id: "area",
    year: "2023",
    role: "Full-stack · API",
    team: "Team of 6",
    stack: ["React", "React Native", "NestJS", "Supabase", "OAuth2"],
    image: dominoImage,
    link: "https://github.com/AlexGuillard/Area",
  },
  {
    id: "rType",
    year: "2023",
    role: "Game developer · Networking",
    team: "Team of 5",
    stack: ["C++", "Raylib", "CMake", "TCP/IP"],
    image: rTypeImage,
    link: "https://github.com/AlexGuillard/R-Type",
  },
  {
    id: "snake",
    year: "2024",
    role: "Game developer",
    team: "Alone",
    stack: ["C++", "CMake", "Raylib"],
    image: snakeImage,
    link: "https://github.com/Benjicatch/Snake",
  },
  {
    id: "Ecommerce",
    year: "2025",
    role: "Full-stack",
    team: "Alone",
    stack: ["PHP", "MySQL", "Docker"],
    image: ecommerceImage,
    link: "https://github.com/Benjicatch/Electronic-commerce-system",
  },
];

// --- Timeline -------------------------------------------------------------
// Dates live here ONLY. Update once, everything follows.
export const timeline: TimelineEntry[] = [
  {
    id: "internship_sii",
    date: "2026 (6 months)",
    color: "blue",
    icon: "mdi-briefcase",
    kind: "work",
  },
  {
    id: "internship_simul",
    date: "2025 – 2026 (6 months)",
    color: "blue",
    icon: "mdi-briefcase",
    kind: "work",
  },
  {
    id: "taiwan",
    date: "2024 – 2025",
    color: "blue",
    icon: "mdi-school",
    kind: "study",
  },
  {
    id: "internship_bordeaux",
    date: "2024",
    color: "blue",
    icon: "mdi-briefcase",
    kind: "work",
  },
  {
    id: "internship_chouic",
    date: "2022",
    color: "green",
    icon: "mdi-web",
    kind: "work",
  },
  {
    id: "epitech",
    date: "2021 – 2026",
    color: "purple",
    icon: "mdi-school",
    kind: "study",
  },
  {
    id: "highschool_saint_dominique",
    date: "2020 – 2021",
    color: "purple",
    icon: "mdi-school",
    kind: "study",
  },
  {
    id: "highschool_alfred_kastler",
    date: "2018 – 2020",
    color: "purple",
    icon: "mdi-school",
    kind: "study",
  },
  {
    id: "college_victor_louis",
    date: "2017 – 2018",
    color: "red",
    icon: "mdi-laptop",
    kind: "study",
  },
];
