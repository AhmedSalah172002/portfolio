import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Editor from "./Editor";
import styles from "../app/page.module.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DownloadIcon from "@mui/icons-material/Download";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <Box
      className={styles.customPattern}
      sx={{
        backgroundColor: "#0d1224",
        color: "#d3d8e8",
        px: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <Grid
        sx={{ marginTop: { xs: "2rem", sm: "2rem", md: "3rem", lg: "5rem" } }}
        container
        spacing={5}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} lg={6}>
          <Typography
            variant="h3"
            sx={{
              lineHeight: "1.3",
              fontWeight: "700",
              fontSize: {
                xs: "1.875rem",
                sm: "1.875rem",
                md: "2.5rem",
                lg: "3rem",
              },
            }}
          >
            Hello,
            <br /> This is{" "}
            <span style={{ color: "rgb(236 72 153)" }}>Ahmed Salah</span> , I'm
            a Professional{" "}
            <span style={{ color: "rgb(22 242 179)" }}>Software Developer</span>
            .
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: " 25px 0px",
            }}
          >
            <a
              href="https://github.com/AhmedSalah172002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-salah-1a7993273/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <LinkedInIcon className={styles.icon} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100012677855792"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className={styles.icon} />
            </a>
            <a href="mailto:ahmed172002tayel@gmail.com">
              <EmailIcon className={styles.icon} />
            </a>
            <a
              href="https://wa.me/+201095572350"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className={styles.icon} />
            </a>
          </div>

          <Button
            component="a"
            href="/resume.pdf"
            download
            sx={{
              width: "fit-content",
              borderRadius: "35px",
              padding: "10px 35px",
              background: "linear-gradient(45deg, #ec4899 30%, #7c3aed 90%)",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: ".3s",
              "&:hover": {
                gap: "15px",
              },
            }}
          >
            GET RESUME <DownloadIcon />
          </Button>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Editor />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
