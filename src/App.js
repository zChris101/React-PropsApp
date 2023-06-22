import React from 'react';
import "./styles.css";
import Card from './components/Card';
import Contacts from './components/contacts';

function createCard(contact) {
  return <Card
    key={contact.id}
    name={contact.name}
    pic={contact.imgURL}
    phone={contact.phone}
    email={contact.email}
  />
}

export default function App() {

  return (
    <div className="App">
      <h1 className='heading'>My Contacts</h1>
      {Contacts.map(createCard)}
    </div>
  );

}
