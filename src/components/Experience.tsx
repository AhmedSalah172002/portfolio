import React from "react";
import { Box, Grid } from "@mui/material";

import styles from "../app/page.module.css";
import lottieFile from '../../public/development.json'
import Code from "./Code";
import AnimationLottie from "./AnimationLottie";
const Experience = () => {
  const tools: string[] = [
    "Typescript",
    "ReactJs",
    "MaterialUi",
    "Python",
    "Django",
    "OpenAI API",
    "AWS SES",
    "AWS S3",
  ];
  return (
    <Box
    id='experience'
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
          <div className={styles.glitch} data-text="EXPERIENCE">
            EXPERIENCE
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
        <AnimationLottie animationPath={lottieFile} width={'25rem'} />

        </Grid>
        <Grid item xs={12} lg={6}>
          <Code
            title="Nozolan"
            subject="company"
            role="Fullstack Developer"
            tools={tools}
            description="At Nozolan, I built a UI Component Library for 15 teams, boosting design consistency and accelerating development. I developed an ad framework that raised viewer interactions by 40% and added $15,000 in revenue. Optimized query performance, reducing server load by 50% and improving user satisfaction by 30%. Integrated APIs for real-time notifications and social sharing, increasing user activity by 40%. Redesigned the payment interface, reducing transaction errors by 30% for over 5,000 users, and created a dashboard for live data access, raising engagement by 35%."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
