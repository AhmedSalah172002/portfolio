import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "../app/page.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Skills = () => {
  const skills: any[] = [
    { name: "AWS", src: "aws" },
    { name: "Bootstrap", src: "bootstrap" },
    { name: "Canva", src: "canva" },
    { name: "C++", src: "cplusplus" },
    { name: "CSS", src: "css" },
    { name: "Django", src: "django" },
    { name: "Docker", src: "docker" },
    { name: "Figma", src: "figma" },
    { name: "Git", src: "git" },
    { name: "GraphQl", src: "graphql" },
    { name: "HTML", src: "html" },
    { name: "Javascript", src: "javascript" },
    { name: "MaterialUi", src: "materialui" },
    { name: "MongoDB", src: "mongoDB" },
    { name: "MySQL", src: "mysql" },
    { name: "Next JS", src: "nextJS" },
    { name: "PostgreSQL", src: "postgresql" },
    { name: "Python", src: "python" },
    { name: "React", src: "react" },
    { name: "Tailwind", src: "tailwind" },
    { name: "Tensorflow", src: "tensorflow" },
    { name: "Typescript", src: "typescript" },
  ];

  return (
    <Box
      id="skills"
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
            <div className={styles.glitch} data-text="SKILLS">
              SKILLS
            </div>
          </div>
        </Box>
      </Box>

      <Marquee pauseOnHover>
        {skills?.map((skill, index) => (
          <Box
            key={index}
            className={styles.skillsItem}
            sx={{
              padding: "25px 50px",
              borderRadius: "15px",
              background: "rgb(17 21 44)",
              border: "2px solid rgb(53 46 96)",
              mx: 2,
            }}
          >
            <Image
              src={`/${skill.src}.svg`}
              alt={skill.name}
              width={50}
              height={50}
              style={{ display: "block", margin: "auto", borderRadius: "15px" }}
            />
            <p style={{ textAlign: "center", marginTop: "25px" }}>
              {skill.name}
            </p>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};

export default Skills;
