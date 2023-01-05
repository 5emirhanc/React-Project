import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filterd = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      item[key].toString().toLowerCase().incul
    });
  });

  return (
    <div>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {contacts.map((contacts, i) => (
          <li key={i}>{contacts.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
