import { BrowserRouter as Router, useRoutes } from "react-router-dom";

// Pages

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/LoginHomePage", element: <LoginHomePage /> },
    { path: "/LoginAboutus", element: <LoginAboutUs /> },
    { path: "/LoginContact", element: <LoginContact /> },
    { path: "/SeatPage", element: <SeatPage /> },
    { path: "/KitchenPage", element: <KitchenPage /> },
    { path: "/StatePage", element : <StatePage/> },
    {path:"/BeddingPage", element:<BeddingPage/>},
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/SignUp", element: <SignUp /> },
    {
      path: "/SignIn",
      element: <SignIn />,
    },
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
