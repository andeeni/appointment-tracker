import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  // Keep track of the contacts and appointments data, each being an array of objects
  const [contacts,setContacts] =useState([]);
  const [appointments,setAppointments]=useState([]);
  
  
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  // Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
  const addContact = (name, phone,email) => {
    setContacts([
      ...contacts, 
      {
        name:name,
        phone:phone,
        email:email,
      },
    ]);
  };
  // Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments
  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments, 
      {
        title:title,
        contact:contact,
        date:date,
        time:time,
      },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS} >
             {/* Pass the array of contacts and the appropriate callback function as props */}
            <ContactsPage contacts={contacts} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS} >
            {/* Pass the appointments array, contacts array, and the add appointment function as props */}
            <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
