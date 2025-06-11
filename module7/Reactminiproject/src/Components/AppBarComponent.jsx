import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import logo from '../assets/logo.png';

export default function AppBarComponent() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        {/* Logo and company name */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img src={logo} alt="Logo" style={{ width: 40, height: 40, marginRight: 12 }} />
          <Typography variant="h6" component="div">
            Rent Buddy Management
          </Typography>
        </Box>

        {/* Navigation buttons */}
        <Button
          component={Link}
          to="/"
          color="inherit"
          startIcon={<HomeIcon />}
          sx={{ mr: 2 }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/properties"
          color="inherit"
          startIcon={<ListIcon />}
          sx={{ mr: 2 }}
        >
          Properties
        </Button>
        <Button
          component={Link}
          to="/contact"
          color="inherit"
          startIcon={<ContactMailIcon />}
          sx={{ mr: 2 }}
        >
          Contact
        </Button>
        <Button
          component={Link}
          to="/feedback"
          color="inherit"
          startIcon={<FeedbackIcon />}
        >
          Feedback
        </Button>
      </Toolbar>
    </AppBar>
  );
}