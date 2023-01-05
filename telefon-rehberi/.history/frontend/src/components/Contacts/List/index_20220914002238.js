import React, { useState } from "react";

function List({ contacts }) {
  const [filterText , setFilterText] =useState('');
  return (
    <div>
      <input placeholder="Filter contact" value={filterText} onChange={(e)=>setFilterText(e.target.value)}></input>
      <ul>
        {contacts.map((contacts,i) => (
          <li key={i}>{contacts.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
