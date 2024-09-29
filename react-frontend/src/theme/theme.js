import { createTheme } from "@mui/material/styles";

const primaryColor = "#FFCC00";
const mode = "light";
const lightColor = "58, 53, 65";
const darkColor = "231, 227, 252";
const mainColor = mode === "light" ? lightColor : darkColor;
const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#FFF",
    },
    customColors: {
      main: mainColor,
      primaryGradient: "#6ACDFF",
      tableHeaderBg: mode === "light" ? "#F9FAFC" : "#3D3759",
    },
    warning: {
      main: primaryColor,
    },
    primary: {
      main: primaryColor,
    },
    inherit: {
      main: "#000000",
    },
    secondary: {
      main: "#ff000080",
    },
    Success: {
      main: "#4caf5080",
    },
    ResponseAwaited: {
      main: "#FFCC00",
    },
    Failure: {
      main: "#ff000080",
    },
    text: {
      main: "#000000",
    },
    background: {
      neutral: "#EDEDF5",
    },
    mode: "light",
  },
  typography: {
    fontFamily: "BrighterSans, Arial, sans-serif",
    color: "#000000",
    fontSize: 12,
    lineHeight: 1.5,
  },
  overrides: {
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "#FFCC00",
        },
      },
    },
  },
});

export default theme;
