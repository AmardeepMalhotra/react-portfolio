import React from "react";
import pic1 from "../assets/images/project1.jpg";
import pic2 from "../assets/images/project2.jpg";
import pic3 from "../assets/images/project3.jpg";
import pic4 from "../assets/images/project4.jpg";
import { motion } from "framer-motion";
export default function Projects() {
  const PROJECTS = [
    {
      title: "E-Commerce Website",
      image: pic1,
      description:
        "A fully functional e-commerce website with features like product listing,shoping cart, and user authentication.",
      technologies: ["Python", "CSS", "HTML", "Angular", "Farebase"],
    },
    {
      title: "Task Management App",
      image: pic2,
      description:
        "An application for managing tasks and projects, with features such as task creation, assingnment, and progress tracking.",
      technologies: ["React.js", "Node.js", "PHP", "MongoDB", "Data Science"],
    },
    {
      title: "Portfolio Website",
      image: pic3,
      description:
        "A personal portfolio website showcasing projects skill, and contact information.",
      technologies: ["Wordpress", ".Net", "Android", "Next.js", "Database"],
    },
    {
      title: "Blogging Platform",
      image: pic4,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting and user profiles.",
      technologies: ["HTML", "CSS", "Vue.Js", "Express.js", "MySQL"],
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" techno mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
