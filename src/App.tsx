import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/common/Layout"
import Home from "./routes/Home"
import Wiki from "./routes/Wiki"
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Login from "./routes/Login";
import CreateAccount from "./routes/CreateAccount";
import { CookiesProvider } from 'react-cookie';
import { useEffect, useState } from "react";
import LoadingScreen from "./components/common/LoadingScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout path="home" userName={null}/>,
    children:[
      {
        path: "",
        element: <Home/>,
      },
    ]
  },
  {
    path: "/wiki",
    element: <Layout path="wiki" userName={null}/>,
    children:[
      {
        path: "",
        element: <Wiki/>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/create_account",
    element: <CreateAccount/>,
  }
])

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'NotoSansKRMedium';
    src: url('public/fonts/NotoSansKR-Medium.otf');
  }
  body{
    background-color: white;
    color: black;
    font-family: 'NotoSansKRMedium';
    font-size: 18px;
    letter-spacing: -0.7px;
  }
  a{
    text-decoration: none;
  }
  h1{
    font-size: 50px;
    letter-spacing: -3px;
    line-height: 1.4;
    color: black;
  }
  h2{
    font-size: 28px;
    letter-spacing: -1.5px;
    color: black;
  }
  h3{
    font-size: 22px;
    letter-spacing: -1px;
    line-height: 1.5;
    color: black;
  }
  b{
    font-size: 1.3em;
    color: black
  }
  hr{

  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(false);
  }, [])

  return (
    <CookiesProvider>
      <GlobalStyles/>
      {isLoading ? <LoadingScreen/> : <RouterProvider router={router}/>}
    </CookiesProvider>
  )
}

export default App
