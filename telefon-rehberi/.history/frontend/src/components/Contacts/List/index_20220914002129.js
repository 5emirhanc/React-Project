import React, { useState } from "react";

function List({ contacts }) {
  useState[filteText , setFilter]
  return (
    <div>
      <input placeholder="Filter contact"></input>
      <ul>
        {contacts.map((contacts,i) => (
          <li key={i}>{contacts.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
