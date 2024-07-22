import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import CreateAccount from "./routes/CreateAccount";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Wiki from "./routes/Wiki";
import { PATH_COMMUNITY, PATH_CREATE_ACCOUNT, PATH_HOME, PATH_LOGIN, PATH_WIKI } from "./config";
import Community from "./components/community/Community";

const router = createBrowserRouter([
  {
    path: PATH_HOME,
    element: <Layout path="home"/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ]
  },
  {
    path: PATH_WIKI,
    element: <Layout path="wiki"/>,
    children: [
      {
        path: "",
        element: <Wiki />,
      },
    ]
  },
  {
    path: PATH_COMMUNITY,
    element: <Layout path="community"/>,
    children: [
      {
        path: "",
        element: <Community/>,
      },
    ]
  },
  {
    path: PATH_LOGIN,
    element: <Login />,
  },
  {
    path: PATH_CREATE_ACCOUNT,
    element: <CreateAccount />,
  }
]);

export default router;