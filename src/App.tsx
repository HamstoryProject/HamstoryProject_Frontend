import { RouterProvider } from "react-router-dom"
import { CookiesProvider } from 'react-cookie';
import { useEffect, useState } from "react";
import LoadingScreen from "./components/common/LoadingScreen";
import GlobalStyle from "./styles/GlobalStyle";
import router from "./router";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [])

  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {isLoading ? <LoadingScreen/> : <RouterProvider router={router}/>}
      </ThemeProvider>
    </CookiesProvider>
  )
}

export default App