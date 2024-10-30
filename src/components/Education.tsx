import React from "react";
import { Box, Grid } from "@mui/material";
import styles from "../app/page.module.css";
import Code from "./Code";
import AnimationLottie from "./AnimationLottie";

import lottieFile from '../../public/study.json'
const Education = () => {
  const tools: string[] = [
    "Data Structures",
    "Algorithms",
    " Database Systems",
    "Web Development",
    "Software Engineering",
    "Cloud Computing",
  ];
  return (
    <Box
      id="education"
      className={styles.customPattern}
      sx={{
        backgroundColor: "#0d1224",
        color: "#d3d8e8",
        px: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
        paddingTop: { xs: "2rem", sm: "2rem", md: "3rem", lg: "5rem" },
        marginTop: { xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "3rem" },
      }}
    >
      <Box className={styles.aboutHeader}>
        <div className={styles.glitchWrapper}>
          <div className={styles.glitch} data-text="EDUCATION">
            EDUCATION
          </div>
        </div>
      </Box>
      <Grid
        sx={{ marginTop: "2rem" }}
        container
        spacing={5}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} lg={6}>
        <AnimationLottie animationPath={lottieFile} width={'25rem'}/>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Code
            title="Menofia University"
            subject="university"
            role="Computer Science Student"
            tools={tools}
            description="Earned a Bachelor of Computer Science from Menofia University (2020–2024), where I completed coursework in Data Structures, Algorithms, Database Systems, Web Development, Software Engineering, and Cloud Computing. Developed key projects, including a library management system, a real-time chat application, and a social media platform prototype.Certified in Frontend React.js by ITI (2023), covering core React.js principles, component creation, state management, API integration, and deployment."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
