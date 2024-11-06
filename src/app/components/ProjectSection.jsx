"use client";

import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: " Amazon Clone",
    description:
      "A responsive e-commerce web application mimicking Amazon’s core features. Built with HTML and CSS, this project includes a visually engaging homepage, product listings, and an intuitive navigation structure. The layout is optimized for a seamless user experience, showcasing product information in an organized and user-friendly format. This project demonstrates my skills in web design, layout structuring, and responsiveness.",
    image:
      "https://i.ytimg.com/vi/yjZmtEGq_ss/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDpQR397boidhfaX1NIq4FOoy65-g",
    tag: ["All", "Frontened"],
    gitUrl: "https://github.com/Rimsha-Adnan/amazon-clone",
    previewUrl: "https://amazon-clone-by-rim.vercel.app/",
  },
  {
    id: 2,
    title: "Word Counter With React",
    description:
      "A React-based application that allows users to count words and characters in real time. This tool features a simple, intuitive interface where users can input text to get an instant count, making it useful for writing, editing, and quick text analysis. The project highlights my skills in React component design, state management, and user-friendly interface creation.",
    image:
      "https://www.blogsaays.com/wp-content/uploads/2020/02/word-count-tool.jpg",
    tag: ["All", "Frontened"],
    gitUrl: "https://github.com/Rimsha-Adnan/word-counter-with-react",
    previewUrl: "https://word-counter-with-react.vercel.app/",
  },
  {
    id: 3,
    title: "Student Management System",
    description:
      "A TypeScript-based application designed to manage student information efficiently. This system allows for adding, updating, and deleting student records, with features for organizing and viewing details such as names, grades, and contact information. The project emphasizes my skills in TypeScript, data handling, and creating structured, type-safe applications.",
    image:
      "https://st2.depositphotos.com/3591429/10553/i/450/depositphotos_105533378-stock-photo-business-corporate-workers.jpg",
    tag: ["All", "Frontened"],
    gitUrl: "https://github.com/Rimsha-Adnan/student-management-system",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Todo List",
    description:
      "A TypeScript-powered to-do list application that enables users to efficiently manage tasks. The app includes features to add, edit, and delete tasks, with a focus on clean design and smooth functionality. This project highlights my skills in TypeScript, state management, and building interactive user interfaces.",
    image:
      "https://hbr.org/resources/images/article_assets/2023/09/A_Sep23_12_To-do-list_1452723744.jpg",
    tag: ["All", "Frontened"],
    gitUrl: "https://github.com/Rimsha-Adnan/to-do-list",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "My Bank",
    description:
      "A TypeScript-based application that simulates core banking operations such as account creation, deposits, withdrawals, and balance inquiries. Designed with a user-friendly interface, this project emphasizes type safety and reliable data handling, showcasing my skills in TypeScript, object-oriented programming, and application logic for financial systems.",
    image:
      "https://img.freepik.com/premium-vector/bank-office-interior-professional-banking-service-finance-manager-clients-credit-deposit-consult-management-vector-concept_176411-627.jpg",
    tag: ["All", "Frontened"],
    gitUrl: "https://github.com/Rimsha-Adnan/my-bank",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Resume Builder",
    description:
      " A web-based tool that enables users to input personal and professional details to create a formatted resume. It includes fields for personal information (name, email, phone), education (degree, institution, year), experience (job title, description), and skills (with levels). Upon submission, the form displays the information in a resume layout for review. Users can edit details, view a preview, and download the resume as a PDF. The form uses HTML for structure, CSS for styling, and TypeScript for interactivity and PDF generation.",
    image: "https://static.jobscan.co/blog/uploads/resume-builder-examples.png",
    tag: ["All", "Frontened"],
    gitUrl: "https://github.com/Rimsha-Adnan/resume-form",
    previewUrl: "https://resume-form-mu.vercel.app/",
  },
];

function ProjectSection() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((projects) =>
    projects.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2 className="text-center text-4xl text-white font-bold  mt-4 mb-8 md:mb-12 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontened"
          isSelected={tag === "Frontened"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectsCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectSection;
