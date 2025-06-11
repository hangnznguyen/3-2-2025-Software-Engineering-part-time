import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack
} from "@mui/material";

function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submittedFeedbacks, setSubmittedFeedbacks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name && form.email && form.message) {
      setSubmittedFeedbacks((prev) => [form, ...prev]);
      setForm({ name: "", email: "", message: "" }); // clear form
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Feedback
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Your Feedback"
            name="message"
            value={form.message}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Feedback
          </Button>
        </Stack>
      </Box>

      {/* Feedback display */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Submitted Feedback
        </Typography>

        {submittedFeedbacks.length === 0 ? (
          <Typography>No feedback submitted yet.</Typography>
        ) : (
          submittedFeedbacks.map((fb, index) => (
            <Paper
              key={index}
              elevation={2}
              sx={{ p: 2, mb: 2, backgroundColor: "#fff3e6" }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {fb.name} ({fb.email})
              </Typography>
              <Typography variant="body1">{fb.message}</Typography>
            </Paper>
          ))
        )}
      </Box>
    </Box>
  );
}

export default Feedback;