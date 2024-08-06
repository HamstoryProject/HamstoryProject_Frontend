import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import CreateAccount from "./routes/CreateAccount";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Wiki from "./routes/Wiki";
import { ROUTE_URLS } from "./config";
import Free from "./components/community/Free";
import Board from "./components/community/Board";
import Picture from "./components/community/Picture";
import Info from "./components/community/Info";
import Best from "./components/community/Best";
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
            element: <Best/>,
            children: [
              {
                path: ":id",
                element: <Board/>,
              }
            ]
          },
          {
            path: "free",
            element: <Free/>,
            children: [
              {
                path: ":id",
                element: <Board/>,
              }
            ]
          },
          {
            path: "picture",
            element: <Picture/>,
            children: [
              {
                path: ":id",
                element: <Board/>,
              }
            ]
          },
          {
            path: "info",
            element: <Info/>,
            children: [
              {
                path: ":id",
                element: <Board/>,
              }
            ]
          },
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