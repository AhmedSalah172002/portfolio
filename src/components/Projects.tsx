import { Box,  } from "@mui/material";
import React from "react";
import styles from "../app/page.module.css";
import Code from "./Code";
import AnimationLottie from "./AnimationLottie";

import lottieFile from '../../public/js.json'
const Projects = () => {
  const projects = [
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
    {
      title: "Movies App",
      tools: ["ReactJs", "Bootstrap", "TMDB", "Axios", "Redux"],
      role: "Frontend Developer",
      description:
        "Developed a movies app displaying popular movies with detailed information, including reviews, view counts, and more. Implemented search, pagination, and genre-based filtering to enhance user experience and streamline content discovery.",
    },
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
