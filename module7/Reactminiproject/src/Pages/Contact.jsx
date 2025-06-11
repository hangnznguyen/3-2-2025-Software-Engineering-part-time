import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <Box>
      {/* Section Title */}
      <Box display="flex" alignItems="center" gap={1} mb={3}>
        <ContactPhoneIcon fontSize="large" color="primary" />
        <Typography variant="h4">Contact Rent Buddy Management Ltd</Typography>
      </Box>

      {/* Back to Home Link */}
      <Button
        variant="outlined"
        component={Link}
        to="/"
        startIcon={<HomeIcon />}
        sx={{ mb: 3 }}
      >
        Back to Home
      </Button>

      {/* Message */}
      <Typography variant="h6" gutterBottom>
        Property investments are our priority! Contact us today.
      </Typography>

      {/* Contact Details */}
      <Paper elevation={3} sx={{ p: 3, backgroundColor: "#fff3e6" }}>
        <Stack spacing={2}>
          {/* Phone */}
          <Box display="flex" alignItems="center" gap={2}>
            <PhoneIcon color="primary" />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">Phone</Typography>
              <Typography>+64 9 3799605</Typography>
            </Box>
          </Box>

          {/* Mobile */}
          <Box display="flex" alignItems="center" gap={2}>
            <SmartphoneIcon color="primary" />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">Mobile</Typography>
              <Typography>+64 21 851789</Typography>
            </Box>
          </Box>

          {/* Email */}

          <Box display="flex" alignItems="center" gap={2}>
            <EmailIcon color="primary" />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">Email</Typography>
              <MuiLink href="mailto:info@buddymanagement.co.nz" underline="hover">
                info@buddymanagement.co.nz
              </MuiLink>
            </Box>
          </Box>

          {/* Facebook */}
          <Box display="flex" alignItems="center" gap={2}>
            <FacebookIcon color="primary" />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">Facebook</Typography>
              <MuiLink
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                Be our Fan
              </MuiLink>
            </Box>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Contact;