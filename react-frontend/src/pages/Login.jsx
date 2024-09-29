import StoreIcon from "@mui/icons-material/Store";
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!email || !validateEmail(email)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password || password.length < 4) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (isValid) {
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  const isSubmitDisabled = !email || !password;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError(false);
      setEmailErrorMessage("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
  };

  const handleEmailBlur = () => {
    if (!email || !validateEmail(email)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email.");
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }
  };

  const handlePasswordBlur = () => {
    if (!password || password.length < 4) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 4 characters long.");
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ position: "absolute", top: "50px", right: "50px" }}
      >
        Sign Up
      </Button>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "120px" }}>
          <Box
            display="flex"
            justifyContent="flex-end"
            sx={{ position: "relative", top: "-50px", right: "-10px" }}
          ></Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar
              style={{ marginBottom: "10px", backgroundColor: "#3f51b5" }}
            >
              <StoreIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    error={emailError}
                    helperText={emailErrorMessage}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                    error={passwordError}
                    helperText={passwordErrorMessage}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: "20px" }}
                disabled={isSubmitDisabled}
              >
                Enter
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
