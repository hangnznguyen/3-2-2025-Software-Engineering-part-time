import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import theme from "./theme";
import AppRoutes from "./Router/AppRoutes";
import AppBarComponent from "./Components/AppBarComponent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBarComponent />
        <Box sx={{ mt: 10 }}>
          <AppRoutes />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;