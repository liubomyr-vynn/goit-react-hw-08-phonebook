// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { Route, Routes, NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import Home from 'pages/Home';
import Phonebook from 'pages/Phonebook';
import Register from 'pages/Register';
import Login from 'pages/Login';

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/phonebook">Phonebook</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* <ContactForm />
      <Filter />
      <ContactList /> */}
    </div>
  );
};

export default App;
