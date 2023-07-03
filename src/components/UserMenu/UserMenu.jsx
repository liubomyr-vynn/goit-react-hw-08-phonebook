import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Toolbar, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Toolbar>
      <Typography variant="p">Welcome, {user.name}</Typography>

      <Button
        variant="inherit"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Toolbar>
  );
};
