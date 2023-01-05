import React, { useEffect, useState } from 'react'

import List from './List'
import Form from './Form';
function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts])
  return (
    <div>
      <List/>
      <Form addContact={setContacts} contacts/>
    </div>
  )
}

export default Contacts;
