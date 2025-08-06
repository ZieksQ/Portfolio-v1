import { frontendImg, backendImg } from "../assets/index.js";


// Export links etc.

export const navbarLinks = [
  { title: "Home", id: "#home" },
  { title: "About", id: "#about" },
  { title: "Services", id: "#services" },
  { title: "Projects", id: "#projects" },
  { title: "Contact", id: "#contact" },
];

import {
  htmlImg,
  cssImg,
  jsImg,
  reactImg,
  tailwindImg,
} from "../assets/index.js";

export const techstackLinks = [
  {
    img: htmlImg,
    title: "HTML",
    link: "https://w3schools.com",
  },
  {
    img: cssImg,
    title: "CSS",
    link: "https://w3schools.com",
  },
  {
    img: jsImg,
    title: "JavaScript",
    link: "https://w3schools.com",
  },
  {
    img: reactImg,
    title: "React",
    link: "https://nodejs.org",
  },
  {
    img: tailwindImg,
    title: "Tailwind CSS",
    link: "https://tailwindcss.com",
  },
];

export const projectLinks = [
  {
    title: "Budget Tracker",
    description: "A financial web app used for tracking budget and expenses. CRUD website built with React. Add your budget and expenses, it will automatically calculates your remaining budget and total expenses.",
    tags: [
      { tag: "JS", color: "bg-yellow-500" },
      { tag: "React", color: "bg-cyan-500" },
    ],
    links: "github.com",
  },
  {
    title: "Personal Portfolio v1",
    description: "My Personal Portfolio version 1.",
    tags: [
      { tag: "JS", color: "bg-yellow-500" },
      { tag: "Tailwind", color: "bg-cyan-800" },
      { tag: "React", color: "bg-cyan-500" },
    ],
    links: "https://github.com/ZieksQ/Portfolio-v1",
  },
  {
    title: "Budget Tracker",
    description: "A financial web app for tracking expenses.",
    tags: [
      { tag: "JS", color: "bg-yellow-500" },
      { tag: "React", color: "bg-cyan-500" },
    ],
    links: "github.com",
  },
];


export const serviceLinks = [
  {
    title: "Frontend Development",
    description:
      "The frontend is the visual part of a website that users interact with, built using technologies like React and Tailwind CSS to create responsive and dynamic user experiences.",
    image: frontendImg,
  },
  {
    title: "Backend Development",
    description:
      " The backend is the behind-the-scenes system that handles data processing, server logic, and APIs, often powered by frameworks like ASP.NET Core to ensure secure and efficient functionality.",
    image: backendImg,
  },
  {
    title: "Tech Stack",
    description: "HTML, CSS, JavaScript, React, Tailwind CSS",
    image: frontendImg,
  },
];
