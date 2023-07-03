import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Toolbar sx={{ flexGrow: '1' }}>
      <Button color="inherit" component={NavLink} to="/">
        Home
      </Button>
      {isLoggedIn && (
        <Button color="inherit" component={NavLink} to="/phonebook">
          Phonebook
        </Button>
      )}
    </Toolbar>
  );
};
