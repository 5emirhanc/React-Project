import React, { useEffect, useState } from 'react'

import List from './List'
import Form from './Form';
function Contacts() {
    const [contacts, setContacts] = useState([{
        fullname : "emir",
        phone_number: "0533 160 0784"
    },]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts])
  return (
    <div>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;