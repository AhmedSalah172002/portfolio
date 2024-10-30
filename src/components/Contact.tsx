import Link from "next/link";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  WhatsApp as WhatsAppIcon,
  LocationOn as LocationOnIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";
import ContactForm from "./ContactForm";
import styles from "../app/page.module.css";
import lottieFile from '../../public/contact.json'
import AnimationLottie from "./AnimationLottie";
function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#0d1224",
        color: "white",
        px: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
        paddingTop: { xs: "2rem", sm: "2rem", md: "3rem", lg: "5rem" },
        marginTop: { xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "3rem" },
        marginBottom: { xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "3rem" },
      }}
      position="relative"
    >
       <Box sx={{marginBottom:'2rem !important'}} className={styles.aboutHeader}>
        <div className={styles.glitchWrapper}>
          <div className={styles.glitch} data-text="CONTACT">
          CONTACT
          </div>
        </div>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr" }}
        gap={8}
        alignItems="center"
      >
        <ContactForm />
        <Box sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap',alignItems:'center'}}>
            <Box>

          <Stack spacing={3}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton
                sx={{
                  bgcolor: "#8b98a5",
                  "&:hover": { bgcolor: "#16f2b3", transform: "scale(1.1)" },
                  transition: "transform 0.3s",
                }}
              >
                <EmailIcon sx={{ color: "gray.800" }} />
              </IconButton>
              <Typography variant="body1">
                ahmed172002tayel@gmail.com
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton
                sx={{
                  bgcolor: "#8b98a5",
                  "&:hover": { bgcolor: "#16f2b3", transform: "scale(1.1)" },
                  transition: "transform 0.3s",
                }}
              >
                <PhoneIcon sx={{ color: "gray.800" }} />
              </IconButton>
              <Typography variant="body1">+201095572350</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton
                sx={{
                  bgcolor: "#8b98a5",
                  "&:hover": { bgcolor: "#16f2b3", transform: "scale(1.1)" },
                  transition: "transform 0.3s",
                }}
              >
                <LocationOnIcon sx={{ color: "gray.800" }} />
              </IconButton>
              <Typography variant="body1">Shibin Elkom ,Menoufia, Egypt</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={3} mt={8}>
            <Link target="_blank" href="https://github.com/AhmedSalah172002">
              <IconButton
                sx={{
                  bgcolor: "#8b98a5",
                  "&:hover": { bgcolor: "#16f2b3", transform: "scale(1.1)" },
                  transition: "transform 0.3s",
                }}
              >
                <GitHubIcon sx={{ color: "gray.800" }} />
              </IconButton>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/ahmed-salah-1a7993273/"
            >
              <IconButton
                sx={{
                  bgcolor: "#8b98a5",
                  "&:hover": { bgcolor: "#16f2b3", transform: "scale(1.1)" },
                  transition: "transform 0.3s",
                }}
              >
                <LinkedInIcon sx={{ color: "gray.800" }} />
              </IconButton>
            </Link>
            <Link target="_blank" href="https://wa.me/+201095572350">
              <IconButton
                sx={{
                  bgcolor: "#8b98a5",
                  "&:hover": { bgcolor: "#16f2b3", transform: "scale(1.1)" },
                  transition: "transform 0.3s",
                }}
              >
                <WhatsAppIcon sx={{ color: "gray.800" }} />
              </IconButton>
            </Link>

            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100012677855792"
            >
              <IconButton
                sx={{
                  bgcolor: "#8b98a5",
                  "&:hover": { bgcolor: "#16f2b3", transform: "scale(1.1)" },
                  transition: "transform 0.3s",
                }}
              >
                <FacebookIcon sx={{ color: "gray.800" }} />
              </IconButton>
            </Link>
          </Stack>
            </Box>
            <AnimationLottie animationPath={lottieFile} width={'20rem'}/>

        </Box>
      </Box>
    </Box>
  );
}

export default ContactSection;
