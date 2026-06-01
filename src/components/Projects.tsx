import { Box,  } from "@mui/material";
import React from "react";
import styles from "../app/page.module.css";
import Code from "./Code";
import AnimationLottie from "./AnimationLottie";

import lottieFile from '../../public/js.json'
const Projects = () => {
  const projects = [
    {
      title: "Shafie App",
      tools: [
      "Laravel",
      "MySQL",
      "Flutter",
      "Agora",
      "REST API",
      "Firebase",
      "Clean Architecture"
      ],
      role: "Backend Developer",
      description:
      "Engineered the backend of a Quran memorization platform that supports audio streaming, daily revision tracking, live recitation sessions, and instructor-based evaluations. Built scalable RESTful APIs using Laravel and MySQL, integrated Agora for real-time voice communication, and followed Clean Architecture principles to improve maintainability and support future feature expansion.",
    },
    {
      title: "Electronic Auction",
      tools: [
        "Express",
        "MongoDB",
        "Socket.io",
        "ReactJs",
        "MaterialUi",
        "Node Mailer",
        "Facebook SDK",
        "Stripe",
      ],
      role: "Fullstack Developer",
      description:
        "Engineered an electronic auction platform allowing users to showcase products, place automated bids, and receive real-time bid notifications—boosting bid engagement by 50%. Integrated Stripe for secure payments and automated Facebook posting, which enhanced platform visibility by 30% and achieved a 90% user satisfaction rate.",
    },
    {
      title: "Maeda App",
      tools: [
        "Express",
        "MongoDB",
        "Flutter",
        "Google Maps API",
        "Firebase",
        "Push Notifications",
        "REST API"
      ],
      role: "Backend Developer",
      description:
        "Engineered the backend of a Ramadan charity platform enabling users to discover, contribute, and manage charity table locations across Egypt. Implemented geolocation-based search, interactive map integration, charity table verification workflows, and Azkar notification services. Designed maintainable RESTful APIs and optimized data management to support a seamless user experience during high seasonal traffic.",
    },
    {
      title: "Revo Pharmacy App",
      tools: [
        "Laravel",
        "MySQL",
        "Flutter",
        "Firebase",
        "AWS S3",
        "Stripe",
        "REST API"
      ],
      role: "Backend Developer",
      description:
        "Engineered a scalable pharmacy e-commerce backend supporting product management, secure online payments, real-time customer communication, and automated notifications. Built and optimized REST APIs consumed by Flutter applications, integrated AWS S3 for media storage and Stripe for payment processing, and contributed to a high-performance platform with an administrative dashboard for business operations and analytics.",
    },
    {
      title: "Pizza App",
      tools: [
        "Express",
        "MongoDB",
        "ReactJs",
        "Node Mailer",
        "Bootstrap",
        "Stripe",
      ],
      role: "Fullstack Developer",
      description:
        "Developed a pizza ordering app with features including password reset, email confirmation, real-time order tracking, favorites, discount coupons, and secure payment options (Visa and cash on delivery), resulting in a 25% increase in user retention.",
    },
    {
      title: "E-Shop",
      tools: [
        "Express",
        "MongoDB",
        "ReactJs",
        "JWT",
        "Node Mailer",
        "Bootstrap",
        "Stripe",
      ],
      role: "Fullstack Developer",
      description:
        "Built an e-commerce platform featuring secure JWT-based user authentication, advanced search, sorting, filtering, and a star rating system, which increased user engagement by 15%. Integrated multiple payment options, including Stripe, and optimized the checkout process, reducing cart abandonment by 20%.",
    },
    // {
    //   title: "Movies App",
    //   tools: ["ReactJs", "Bootstrap", "TMDB", "Axios", "Redux"],
    //   role: "Frontend Developer",
    //   description:
    //     "Developed a movies app displaying popular movies with detailed information, including reviews, view counts, and more. Implemented search, pagination, and genre-based filtering to enhance user experience and streamline content discovery.",
    // },
  ];

  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: "#0d1224",
        color: "#d3d8e8",
        px: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
      }}
    >
      <hr />
      <Box
        sx={{
          py: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
          marginBottom: "2.5rem",
        }}
      >
        <Box className={styles.aboutHeader}>
          <div className={styles.glitchWrapper}>
            <div className={styles.glitch} data-text="PROJECTS">
              PROJECTS
            </div>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "25px",
            flexWrap: "wrap",
            my: 5,
          }}
        >
          {projects?.map((project, index) => (
            <Box
            key={index}
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "calc(50% - 25px)",
                  lg: "calc(50% - 25px)",
                },
              }}
            >
              <Code
                title={project.title}
                subject="project"
                role={project.role}
                tools={project.tools}
                description={project.description}
              />
            </Box>
          ))}
        </Box>
      </Box>
        <AnimationLottie animationPath={lottieFile} width={'25rem'}/>
    </Box>
  );
};

export default Projects;
