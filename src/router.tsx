import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import CreateAccount from "./routes/CreateAccount";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Wiki from "./routes/Wiki";
import { ROUTE_PATH, ROUTE_URLS } from "./config";
import FreeBoard from "./components/community/FreeBoard";
import Community from "./components/community/Community";
import CreatePost from "./components/community/CreatePost";

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
            path: ROUTE_PATH.BEST,
            element: null,
            children: [
              {
                path: ":id",
                element: null,
              }
            ]
          },
          {
            path: ROUTE_PATH.FREE,
            element: <FreeBoard/>,
            children: [
              {
                path: ":id",
                element: null,
              }
            ]
          },
          {
            path: ROUTE_PATH.PICTURE,
            element: null,
            children: [
              {
                path: ":id",
                element: null,
              }
            ]
          },
          {
            path: ROUTE_PATH.question,
            element: null,
            children: [
              {
                path: ":id",
                element: null,
              }
            ]
          },
          {
            path: ROUTE_PATH.CREATE_POST,
            element: <CreatePost/>,
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