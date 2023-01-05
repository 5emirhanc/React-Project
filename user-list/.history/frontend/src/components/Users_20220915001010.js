import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => console.log(users));
  }, []);

  return (
    <div>
      <h1> Users </h1>
      {
        users.map(user=><div>{}</div>)
      }
    </div>
  );
}

export default Users;
