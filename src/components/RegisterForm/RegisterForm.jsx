import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    // const name = form.elements.name.value;
    // const email = form.elements.email.value;
    // const password = form.elements.password.value;

    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Password:', password);

    // dispatch(register({ name, email, password }));
    const data = new FormData(e.currentTarget);

    const user = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };
    dispatch(register(user));
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
      />

      <Button variant="contained" type="submit">
        Register
      </Button>
    </Box>
  );
};
export default RegisterForm;
