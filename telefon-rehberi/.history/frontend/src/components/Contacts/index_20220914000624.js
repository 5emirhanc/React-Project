import React, { useEffect, useState } from 'react'

import List from './List'
import Form from './Form';
function Contacts() {
    const [contacts, setContacts] = useState({});

    useEffect(()=>{
        console.log(constacts);
    },[contacts])
  return (
    <div>
      <List/>
      <Form addContact={setContacts} contacts={constacts}/>
    </div>
  )
}

export default Contacts;
