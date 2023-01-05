import { useEffect } from "react";

function Users() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then
  }, []);

  return <div>Users</div>;
}

export default Users;
