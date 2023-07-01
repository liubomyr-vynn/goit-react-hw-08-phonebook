import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = new FormData(e.currentTarget);

    const user = {
      email: data.get('email'),
      password: data.get('password'),
    };
    console.log(user);
    dispatch(logIn(user));
    form.reset();
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        type="email"
        name="email"
      />

      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
      />

      <Button variant="contained" type="submit">
        Log In
      </Button>
    </Box>
  );
};
export default LoginForm;
