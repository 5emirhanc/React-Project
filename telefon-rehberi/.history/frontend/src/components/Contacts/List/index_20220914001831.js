import React from "react";

function List({ contacts }) {
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
