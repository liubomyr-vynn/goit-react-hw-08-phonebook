import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(state => {
    const { items, filter } = state.contacts;

    if (filter === '') {
      return items;
    } else {
      return items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  });

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <List
        component="ul"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            <ListItemText
              size="small"
              primary={`${contact.name}: ${contact.number}`}
            />
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => handleDelete(contact.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ContactList;
