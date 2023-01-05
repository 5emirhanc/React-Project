import { BrowserRouter as Router, useRoutes } from "react-router-dom";

// Pages

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/LoginHomePage", element: <LoginHomePage /> },
    { path: "/LoginAboutus", element: <LoginAboutUs /> },
   
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

export default AppWrapper;
