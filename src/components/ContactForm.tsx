"use client";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

function ContactForm() {
  function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: any) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );
      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data?.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Typography
        variant="h6"
        color="#16f2b3"
        mb={2}
        sx={{ textTransform: "uppercase" }}
      >
        Contact with me
      </Typography>
      <Box
        sx={{
          maxWidth: "600px",
          backgroundColor: "#1e2738",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="body2" color="#d3d8e8">
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </Typography>
        <Box mt={3} display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={userInput.name}
            onChange={(e) =>
              setUserInput({ ...userInput, name: e.target.value })
            }
            onBlur={checkRequired}
            required
            inputProps={{ maxLength: 100 }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#10172d",
                "& fieldset": { borderColor: "#353a52" },
                "&:hover fieldset": { borderColor: "#16f2b3" },
              },
            }}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={userInput.email}
            onChange={(e) =>
              setUserInput({ ...userInput, email: e.target.value })
            }
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(userInput.email) });
            }}
            required
            inputProps={{ maxLength: 100 }}
            error={error.email}
            helperText={error.email && "Please provide a valid email!"}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#10172d",
                "& fieldset": { borderColor: "#353a52" },
                "&:hover fieldset": { borderColor: "#16f2b3" },
              },
            }}
          />

          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={userInput.message}
            onChange={(e) =>
              setUserInput({ ...userInput, message: e.target.value })
            }
            onBlur={checkRequired}
            required
            inputProps={{ maxLength: 500 }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#10172d",
                "& fieldset": { borderColor: "#353a52" },
                "&:hover fieldset": { borderColor: "#16f2b3" },
              },
            }}
          />

          {error.required && (
            <Typography color="error" variant="body2">
              All fields are required!
            </Typography>
          )}

          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundImage: "linear-gradient(to right, #f72585, #7209b7)",
              color: "white",
              padding: "10px 30px",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                backgroundImage: "linear-gradient(to right, #7209b7, #f72585)",
              },
            }}
            onClick={handleSendMail}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              <>
                Send Message
                <TbMailForward size={20} />
              </>
            )}
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
}

export default ContactForm;
