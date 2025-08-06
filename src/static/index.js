import {inbox} from "../assets/index.js";

// Export links etc.

export const navbarLinks = [
  { title: "Home", id: "#home" },
  { title: "About", id: "#about" },
  { title: "Services", id: "#services" },
  { title: "Projects", id: "#projects" },
  { title: "Contact", id: "#contact" },
];

import { htmlImg, cssImg, jsImg, reactImg, tailwindImg } from "../assets/index.js";

export const techstackLinks = [
  {
    img: htmlImg,
    title: "HTML",
    link: "https://w3schools.com"
  },
  {
    img: cssImg,
    title: "CSS",
    link: "https://w3schools.com"
  },
  {
    img: jsImg,
    title: "JavaScript",
    link: "https://w3schools.com"
  },
  {
    img: reactImg,
    title: "React",
    link: "https://nodejs.org"
  },
  {
    img: tailwindImg,
    title: "Tailwind CSS",
    link: "https://tailwindcss.com"
  },
];

export const projectLinks = [
  {
    title: "Budget Tracker",
    description: "A financial web app for tracking expenses.",
    tags: [
        {tag: "JS", color: "bg-yellow-500"},
        {tag: "React", color: "bg-cyan-500"},
    ],
    links: "github.com",
  },
  {
    title: "Budget Tracker",
    description: "A financial web app for tracking expenses.",
    tags: [
        {tag: "JS", color: "bg-yellow-500"},
        {tag: "React", color: "bg-cyan-500"},
    ],
    links: "github.com",
  },
  {
    title: "Budget Tracker",
    description: "A financial web app for tracking expenses.",
    tags: [
        {tag: "JS", color: "bg-yellow-500"},
        {tag: "React", color: "bg-cyan-500"},
    ],
    links: "github.com",
  },
];

import { frontendImg, backendImg } from "../assets/index.js";

export const serviceLinks = [
  {
    title: "Frontend Development",
    description: "lorem",
    image: frontendImg,
  },
  {
    title: "Backend Development",
    description: "lorem",
    image: backendImg,
  },{
    title: "Tech Stack",
    description: "HTML, CSS, JavaScript, React, Tailwind CSS",
    image: frontendImg,
  },
];