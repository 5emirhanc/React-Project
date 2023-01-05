import React, { useState } from "react";

function List({ contacts }) {
  useState[filterText , setFilterText]
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
