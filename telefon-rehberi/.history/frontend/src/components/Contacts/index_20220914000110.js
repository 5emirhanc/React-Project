import React, { useEffect, useState } from 'react'

import List from './List'
import Form from './Form';
function Contacts() {
    const [constacts, setContacts] = useState({});

    useEffect(())
  return (
    <div>
      <List/>
      <Form/>
    </div>
  )
}

export default Contacts;
