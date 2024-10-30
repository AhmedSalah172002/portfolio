import Link from "next/link";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#0d1224",
        color: "#d3d8e8",
        px: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
        py: "2rem",
        marginTop: { xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "3rem" },
      }}
      component="footer"
      bgcolor="#0d1224"
      borderTop="1px solid #353951"
      color="white"
    >
      <Box
        maxWidth={{ xs: "100%", sm: "70rem", lg: "76rem", xl: "92rem" }}
        mx="auto"
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body2" textAlign={{ xs: "center", md: "left" }}>
            © Developer Portfolio by{" "}
            <Link
              href="https://www.linkedin.com/in/ahmed-salah-1a7993273/"
              target="_blank"
              style={{ color: "#16f2b3", textDecoration: "none" }}
            >
              Ahmed Salah
            </Link>
          </Typography>
          <Stack direction="row" spacing={2} mt={{ xs: 2, md: 0 }}>
            <Link
              href="https://github.com/AhmedSalah172002/portfolio.git"
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton
                sx={{ color: "inherit", "&:hover": { color: "#16f2b3" } }}
              >
                <IoStar />
              </IconButton>
              <Typography
                variant="button"
                sx={{ textTransform: "uppercase", fontWeight: "bold" }}
              >
                Star
              </Typography>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
