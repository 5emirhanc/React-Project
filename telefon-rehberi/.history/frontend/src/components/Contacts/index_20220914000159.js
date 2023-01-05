import React, { useEffect, useState } from 'react'

import List from './List'
import Form from './Form';
function Contacts() {
    const [constacts, setContacts] = useState({});

    useEffect(()=>{

    },[constacts])
  return (
    <div>
      <List/>
      <Form addContact={setContacts}/>
    </div>
  )
}

export default Contacts;
