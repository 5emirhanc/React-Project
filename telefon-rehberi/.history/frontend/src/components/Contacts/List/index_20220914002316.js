import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  return (
    <div>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {contacts.map((contacts, i) => (
          <ul key={i}>{contacts.fullname}
        ))}
      </ul>
    </div>
  );
}

export default List;
