import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(data));
  }, []);

  return (
    <div>
      <h1> Users </h1>
      {
        users.map(user=><div>{user.name}</div>)
      }
    </div>
  );
}

export default Users;
