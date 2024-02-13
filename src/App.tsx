import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./routes/Home"
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Login from "./routes/Login";
import CreateAccount from "./routes/CreateAccount";
import { CookiesProvider } from 'react-cookie';
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { useCookies } from 'react-cookie';
import axios from "axios";
import { URL_INFO } from "./config";

interface UserData {
  "memberEmail": string,
  "memberPassword": string,
  "memberName": string,
"imageUrl": string,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "",
        element: <Home/>,
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
    line-height: 1.5;
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
    color: black;
  }
  b{
    font-size: 1.3em;
    color: black
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const [userdata, setUserData] = useState<UserData | null>(null);

  const init = async() => {
    console.log(cookies.id)
    try{
      const res = await axios.get(URL_INFO, {
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer " + cookies.id,
        }
      })
      setUserData(res.data);
    }
    catch(err){
      setUserData(null);
    }
    finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <CookiesProvider>
      <Wrapper>
        <GlobalStyles/>
        {isLoading ? <LoadingScreen/> : <RouterProvider router={router}/>}
      </Wrapper>
    </CookiesProvider>
  )
}

export default App
