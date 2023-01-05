import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading ,setIsLoading]=use

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1> Users </h1>
      {
        users.map(user=><div key={user.id}>{user.name}</div>)
      }
    </div>
  );
}

export default Users;
