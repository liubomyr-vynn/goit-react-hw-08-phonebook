import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    dispatch(addContact({ name, number })).then(() => {
      event.target.reset();
    });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Phonebook
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              label="Name"
              type="text"
              name="name"
              pattern="^[a-zA-Z\u0400-\u04FF]+([\-'\s][a-zA-Z\u0400-\u04FF]+)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <TextField
              label="Number"
              type="tel"
              name="number"
              pattern="^(\+?[0-9.\(\)\-\s]*)$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <Button variant="contained" type="submit">
              Add contact
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
