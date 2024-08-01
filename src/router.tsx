import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/common/Layout";
import CreateAccount from "./routes/CreateAccount";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Wiki from "./routes/Wiki";
import { ROUTE_URLS } from "./config";
import Community from "./components/community/Community";

const router = createBrowserRouter([
  {
    path: ROUTE_URLS.HOME,
    element: <Layout path="home"/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ROUTE_URLS.COMMUNITY,
        element: <Community/>,
        children: [
          {
            path: "best",
            element: <Community/>,
          }
        ]
      },
    ]
  },
  {
    path: ROUTE_URLS.WIKI,
    element: <Layout path="wiki"/>,
    children: [
      {
        path: "",
        element: <Wiki />,
      },
    ]
  },
  {
    path: ROUTE_URLS.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_URLS.CREATE_ACCOUNT,
    element: <CreateAccount />,
  }
]);

export default router;