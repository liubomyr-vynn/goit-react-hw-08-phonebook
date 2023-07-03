import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = new FormData(e.currentTarget);

    const user = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    if (passwordError) {
      return;
    }

    dispatch(register(user));
    form.reset();
  };

  const handlePasswordChange = event => {
    const { value } = event.target;
    const pattern =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}/;
    if (!pattern.test(value)) {
      setPasswordError(
        'Password must contain at least 9 characters, including uppercase letters, lowercase letters, numbers, and special characters.'
      );
    } else {
      setPasswordError('');
    }
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
      <TextField id="name" label="Name" variant="outlined" name="name" />

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
        onChange={handlePasswordChange}
        error={!!passwordError}
        helperText={passwordError}
      />

      <Button variant="contained" type="submit">
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
