import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Phonebook
            </Typography>
            <Typography>
              <Link to="/">Home</Link>
            </Typography>
            <Link to="/phonebook">Phonebook</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
