import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue } from '../../redux/contacts/operations';
import { Typography, TextField, Box } from '@mui/material';

const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilterValue(value));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        align="center"
        sx={{ marginTop: '35px' }}
        gutterBottom
      >
        Contacts
      </Typography>
      <label>Find contacts by name</label>
      <TextField
        type="text"
        value={filterValue}
        onChange={handleChange}
        name="filter"
        size="small"
        variant="outlined"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      />
    </Box>
  );
};

export default Filter;
