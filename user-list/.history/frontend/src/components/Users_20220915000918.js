import { useEffect,useState } from "react";

function Users() {

    const [users,setUsers]

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>res.json())
    .then(users=> console.log(users))
  }, []);

  return <div>Users</div>;
}

export default Users;
