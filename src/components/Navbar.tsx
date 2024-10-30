import React from 'react'
import styles from "../app/page.module.css";
import { Box } from "@mui/material";
const Navbar = () => {
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      py: 2,
    }}
  >
    <h3 className={styles.navbarTitle}>Ahmed Salah</h3>
    <ul className={styles.navLinks}>
      <li>
        <a href="#about">about</a>{" "}
      </li>
      <li>
        <a href="#experience">experience</a>
      </li>
      <li>
        <a href="#skills">skills</a>
      </li>
      <li>
        <a href="#projects">projects</a>
      </li>
      <li>
        <a href="#education">education</a>
      </li>
    </ul>
    
  </Box>
  )
}

export default Navbar
