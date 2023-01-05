import { useEffect } from "react";

function Users() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>res.json())
    .then(users)=>
  }, []);

  return <div>Users</div>;
}

export default Users;
