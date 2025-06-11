import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import FilterBar from "../Components/FilterBar";
import propertyData from "../Data/propertyData";

export default function PropertyList() {
  const [filter, setFilter] = useState("All");
  const [mainImages, setMainImages] = useState({});
  const [openDialogId, setOpenDialogId] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [thankYouOpen, setThankYouOpen] = useState(false);

  const filteredProperties =
    filter === "All"
      ? propertyData
      : propertyData.filter((property) => property.location === filter);

  useEffect(() => {
    const initialImages = {};
    filteredProperties.forEach((property) => {
      const images = Array.isArray(property.image) ? property.image : [property.image];
      initialImages[property.id] = images[0]; // use the first image
    });
    setMainImages(initialImages);
  }, [filter, filteredProperties]);

  const handleImageClick = (propertyId, imageUrl) => {
    setMainImages((prev) => ({
      ...prev,
      [propertyId]: imageUrl,
    }));
  };

  const handleOpenDialog = (propertyId) => {
    setOpenDialogId(propertyId);
    setFormData({
      fullName: "",
      contact: "",
      email: "",
      message: "",
      preferredDate: "",
      preferredTime: "",
    });
  };

  const handleCloseDialog = () => {
    setOpenDialogId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenDialogId(null);
    setThankYouOpen(true);
  };

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        Property List
      </Typography>

      <FilterBar filter={filter} setFilter={setFilter} />

      {filteredProperties.map((property) => {
        const images = Array.isArray(property.image) ? property.image : [property.image];
        return (
          <Card key={property.id} sx={{ display: "flex", mb: 4, boxShadow: 3 }}>
            <Box sx={{ width: 300, position: "relative" }}>
              <CardMedia
                component="img"
                height="200"
                image={mainImages[property.id]}
                alt={property.title}
                sx={{ objectFit: "cover" }}
              />

              {/* Thumbnails */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                {images.map((img, idx) => (
                  <Box
                    key={idx}
                    component="img"
                    src={img}
                    alt={`${property.title} thumbnail ${idx + 1}`}
                    sx={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      cursor: "pointer",
                      border:
                        mainImages[property.id] === img
                          ? "2px solid #1976d2"
                          : "1px solid #ccc",
                      borderRadius: 1,
                      mx: 0.5,
                    }}
                    onClick={() => handleImageClick(property.id, img)}
                  />
                ))}
              </Box>
            </Box>

            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" component="div" gutterBottom>
                {property.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {property.address}
              </Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                ${property.price} / week
              </Typography>
              <Typography variant="body2" paragraph>
                {property.description}
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block" mb={2}>
                Type: {property.type} | Status: {property.status} | Location: {property.location}
              </Typography>

              <Button variant="contained" onClick={() => handleOpenDialog(property.id)}>
                Book Viewing
              </Button>
            </CardContent>
          </Card>
        );
      })}

      <Dialog open={Boolean(openDialogId)} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Book Viewing</DialogTitle>
        <DialogContent>
          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Contact Details"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              multiline
              rows={3}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Preferred Date"
              name="preferredDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.preferredDate}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Preferred Time"
              name="preferredTime"
              type="time"
              InputLabelProps={{ shrink: true }}
              value={formData.preferredTime}
              onChange={handleChange}
            />

            <DialogActions sx={{ px: 0 }}>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={thankYouOpen}
        autoHideDuration={6000}
        onClose={() => setThankYouOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }} onClose={() => setThankYouOpen(false)}>
          Thank you for your booking. We will send you the confirmation shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
}