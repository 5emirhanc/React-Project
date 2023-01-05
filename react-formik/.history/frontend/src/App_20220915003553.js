import { BrowserRouter as Router, useRoutes } from "react-router-dom";

// Pages

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/LoginHomePage", element: <About /> },
    { path: "/LoginAboutus", element: <Users /> },
   
  ]);

  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default AppWrapper;
