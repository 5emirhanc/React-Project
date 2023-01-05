import React from 'react'

function List({contacts}) {
  return (
    <div>
      <ul>

        {contacts.map((contacts)=>(<li>{contacts.f</li>))}
      </ul>
    </div>
  )
}

export default List
