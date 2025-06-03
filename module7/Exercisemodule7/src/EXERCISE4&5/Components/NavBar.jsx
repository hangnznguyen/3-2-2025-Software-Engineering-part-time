import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    marginRight: '1rem',
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <NavLink to="/" style={linkStyle}>
          <Button color="inherit">Home</Button>
        </NavLink>
        <NavLink to="/login" style={linkStyle}>
          <Button color="inherit">Login</Button>
        </NavLink>
        <NavLink to="/bitcoin" style={linkStyle}>
          <Button color="inherit">Bitcoin Rates</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;