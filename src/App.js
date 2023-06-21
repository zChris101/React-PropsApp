import React from 'react';
import "./styles.css";
import Card from './components/Card';
import Contacts from './components/contacts';

//commented 
export default function App() {

  //console.log(Contacts);
  return (
    <div className="App">
      <h1 className='heading'>My Contacts</h1>
      <Card
      name= {Contacts[0].name}
      pic = {Contacts[0].imgURL}
      phone = {Contacts[0].phone}
      email = {Contacts[0].email} 
      />

      <Card
      name= {Contacts[1].name}
      pic = {Contacts[1].imgURL}
      phone = {Contacts[1].phone}
      email = {Contacts[1].email} 
      />

      <Card
      name= {Contacts[2].name}
      pic = {Contacts[2].imgURL}
      phone = {Contacts[2].phone}
      email = {Contacts[2].email} 
      />
    </div>
  );
}
