import React, { useEffect, useState } from 'react'
import from "./"
import List from './List'
import Form from './Form';
function Contacts() {
    const [contacts, setContacts] = useState([{
        fullname : "emir",
        phone_number: "0533 160 0784"
    },
    {
        fullname : "ahmet",
        phone_number: "0532 120 5714"
    },
    {
        fullname : "nazlı",
        phone_number: "0512 150 6714"
    }
]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts])
  return (
    <div id="container">
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;
