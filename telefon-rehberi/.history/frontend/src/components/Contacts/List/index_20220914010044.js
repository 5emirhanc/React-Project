import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filterd = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="Arama"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filterd.map((contacts, i) => (
          <li key={i}>
            <span>
              {contacts.fullname}
            </span>
            <span>
              {contacts.phone_number}
            </span>
          </li>
        ))}
      </ul>

      <p>
        Kayıtlı Olan Kişi Sayısı : {filterd.length}
      </p>
    </div>
  );
}

export default List;
