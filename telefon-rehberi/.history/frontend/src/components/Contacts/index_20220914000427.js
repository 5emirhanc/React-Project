import React, { useEffect, useState } from 'react'

import List from './List'
import Form from './Form';
function Contacts() {
    const [constacts, setContacts] = useState({});

    useEffect(()=>{
        console.log(constacts);
    },[constacts])
  return (
    <div>
      <List/>
      <Form addContact={setContacts} constacts={constacts}/>
    </div>
  )
}

export default Contacts;
