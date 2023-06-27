import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

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
    <div className="section__list">
      <ul className="contact__list">
        {contacts.map(contact => (
          <li className="contact__item" key={contact.id}>
            <p className="contact__text">
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              className="contact__button"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
