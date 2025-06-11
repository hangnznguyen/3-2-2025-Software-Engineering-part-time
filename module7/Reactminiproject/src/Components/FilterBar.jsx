
import { Select, MenuItem, Box } from "@mui/material";

const locations = [
  "All",
  "Central Auckland",
  "South Auckland",
  "West Auckland",
  "East Auckland",
  "North Shore",
];

export default function FilterBar({ filter, setFilter }) {
  return (
    <Box sx={{ mb: 3, maxWidth: 250 }}>
      <Select fullWidth value={filter} onChange={(e) => setFilter(e.target.value)}>
        {locations.map((loc) => (
          <MenuItem key={loc} value={loc}>{loc}</MenuItem>
        ))}
      </Select>
    </Box>
  );
}