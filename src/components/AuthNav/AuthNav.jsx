import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

import { Toolbar } from '@mui/material';

export const AuthNav = () => {
  return (
    <Toolbar>
      <Button color="inherit" component={NavLink} to="/register">
        Register
      </Button>
      <Button color="inherit" component={NavLink} to="/login">
        Log In
      </Button>
    </Toolbar>
  );
};
