import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./routes/Home"
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "",
        element: <Home/>,
      }
    ]
  },
])

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    background-color: white;
    color: black;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  a{
    text-decoration: none;
  }
  h1{
    font-size: 50px;
    letter-spacing: -3px;
    line-height: 1.5;
  }
  h2{
    font-size: 28px;
    letter-spacing: -1.5px;
  }
  h3{
    font-size: 22px;
    letter-spacing: -1px;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles/>
      <RouterProvider router={router}/>
    </Wrapper>
  )
}

export default App
