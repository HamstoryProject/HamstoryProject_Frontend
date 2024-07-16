import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import CreateAccount from "./routes/CreateAccount";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Wiki from "./routes/Wiki";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout path="home" userName={null} />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ]
  },
  {
    path: "/wiki",
    element: <Layout path="wiki" userName={null} />,
    children: [
      {
        path: "",
        element: <Wiki />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create_account",
    element: <CreateAccount />,
  }
]);

export default router;