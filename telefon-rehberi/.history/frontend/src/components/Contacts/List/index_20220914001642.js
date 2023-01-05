import React from 'react'

function List({contacts}) {
  return (
    <div>
      <ul>

        {contacts.map((contacts)=>(<li>{contacts.fullname</li>))}
      </ul>
    </div>
  )
}

export default List
