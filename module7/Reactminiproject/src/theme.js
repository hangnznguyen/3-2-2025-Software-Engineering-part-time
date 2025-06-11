import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#b3541e", // warm orange-brown
    },
    secondary: {
      main: "#f3a683", // soft peach
    },
    background: {
      default: "#fff8f0", // warm light background
      paper: "#fff3e6",   // warm card background
    },
  },
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
});

export default theme;