import { Box, Button, TextField, Typography } from '@mui/material';

const Login= () => {
  return (
    <Box sx={{ width: 300, margin: '50px auto' }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;