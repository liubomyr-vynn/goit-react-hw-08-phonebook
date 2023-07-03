import React from 'react';
import { Box } from '@mui/material';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

const Phonebook = () => {
  return (
    <Box sx={{ maxWidth: '320px', margin: '0 auto' }}>
      <ContactForm />
      <Filter />
      <ContactList />
    </Box>
  );
};

export default Phonebook;
