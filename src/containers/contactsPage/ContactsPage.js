import React, {useEffect,useState} from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";


export const ContactsPage = ({contacts, addContact}) => {

  /*
  Define state variables for contact info entered in form 
  and duplicate check
  */
  const [name,setName] =useState('');
  const [phone,setPhone] =useState('');
  const [email,setEmail] =useState('');
  const [duplicate,setDuplicate] =useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate){
      addContact(name, phone,email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  //To check for duplicates, implement a call to useEffect that sets the duplicate state variable to true if name is already in contacts
  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name); //find contact in contacts
      if (found !== undefined) {
        return true;
      }
      return false; //found is undefined (not in list) -> not duplicate (false)
    };

    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {duplicate ? " - Name already exists" : ""}
        </h2> 
        <ContactForm 
          name={name} phone={phone} email={email}
          setName={setName} setPhone={setPhone} setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
