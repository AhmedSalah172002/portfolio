import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "../app/page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <Box
    id='about'
    sx={{
      backgroundColor: "#0d1224",
      color: "#d3d8e8",
      px: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
    }}
    >
      <Box className={styles.aboutHeader}>
        <div className={styles.glitchWrapper}>
          <div className={styles.glitch} data-text="ABOUT ME">
            ABOUT ME
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
          <Typography
            variant="h5"
            sx={{
              lineHeight: "1.3",
              fontWeight: "500",
              fontSize: "1.575rem",
              color: "rgb(22 242 179)",
              marginBottom: "25px",
            }}
          >
            WHO I AM?
          </Typography>
          <Typography
            variant="h5"
            sx={{
              lineHeight: "1.5",
              fontWeight: "500",
              fontSize: "1.175rem",
            }}
          >
            My name is Ahmed Salah. I am a professional and enthusiastic
            programmer in my daily life. I am a quick learner with a
            self-learning attitude. I love to learn and explore new technologies
            and am passionate about problem-solving. I love almost all the
            stacks of web application development and love to make the web more
            open to the world. My core skill is based on JavaScript and I love
            to do most of the things using JavaScript. I am available for any
            kind of job opportunity that suits my skills and interests. 
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Image
            src="/ahmed.jpeg"
            alt="Ahmed Salah"
            width={300} 
            height={300}
            style={{display:'block',margin:'auto',borderRadius:'15px'}} 
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
