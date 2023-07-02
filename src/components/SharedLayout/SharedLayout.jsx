import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Home</Link>
            </Typography>

            <Link to="/phonebook">
              <Typography variant="h6" component="div">
                Phonebook
              </Typography>
            </Link>

            <Link to="/register">
              <Typography variant="h6" component="div">
                Register
              </Typography>
            </Link>

            <Link to="/login">
              <Typography variant="h6" component="div">
                Login
              </Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
