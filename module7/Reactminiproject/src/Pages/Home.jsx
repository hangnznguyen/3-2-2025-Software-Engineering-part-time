import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import livingroom from "../assets/livingroom.jpg";
import backgroundImg from "../assets/background.jpg";

const values = [
  {
    title: "Property Engagement",
    text: "Effectively strategising and marketing properties to generate the return we believe owners deserve.",
  },
  {
    title: "Quality Tenants",
    text: "Dedicated to finding and retaining the most suitable tenants for properties through our strict tenant selection process.",
  },
  {
    title: "Stress Free Maintenance",
    text: "Management of repairs and maintenance in a timely and cost-effective manner, as if it was our own home.",
  },
  {
    title: "Professional Rent Collection",
    text: "On time. In Full. Handling payments is part of our dedicated service.",
  },
];

const Home = () => {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      {/* Background image fixed to top-left */}
      <Box
        component="img"
        src={backgroundImg}
        alt="Background"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40vw",
          height: "40vh",
          objectFit: "cover",
          zIndex: 1,
          borderBottomRightRadius: "16px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        }}
      />

      
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40vw",
          height: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          p: 3,
          zIndex: 2,
          textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
          pointerEvents: "none",
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Rent Buddy Management
        </Typography>
      </Box>

    
      <Box
        sx={{
          position: "fixed",
          top: "100px",
          right: "150px",
          zIndex: 3,
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            color: "primary.main",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          Property Management
        </Typography>
      </Box>

     
      <Box
        sx={{
          position: "fixed",
          top: "200px",
          right: "20px",
          maxWidth: "1000px",
          width: { xs: "90vw", sm: "70vw", md: "50vw" },
          textAlign: "justify",
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.5rem",  
          lineHeight: 1.6,
          color: "text.primary",
        }}
      >
        <br></br>
        <Typography paragraph>
          A new standard in property management for New Zealand landlords and tenants.
        </Typography>
        <br></br>
        <Typography paragraph>
          We take the stress out of residential property investment by selecting quality tenants,
          taking care of maintenance issues and contractors, carrying out routine inspections,
          collecting rents, paying invoices and ensuring compliance with all legislation.
        </Typography>
      </Box>

    
      <Box
        component="img"
        src={livingroom}
        alt="Livingroom"
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          width: "50vw",
          height: "50vh",
          objectFit: "cover",
          zIndex: 1,
          borderTopLeftRadius: "16px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        }}
      />

     
      <Box
        sx={{
          position: "fixed",
          top: "42vh",
          left: 0,
          width: "40vw",
          zIndex: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {values.map((val, index) => (
          <Card key={index} sx={{ backgroundColor: "#fff3e6" }}>
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>
                {val.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Home;