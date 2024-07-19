import { RouterProvider } from "react-router-dom"
import { CookiesProvider } from 'react-cookie';
import { useEffect, useState } from "react";
import LoadingScreen from "./components/common/LoadingScreen";
import GlobalStyle from "./GlobalStyle"
import router from "./router";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [])

  return (
    <CookiesProvider>
      <GlobalStyle/>
      {isLoading ? <LoadingScreen/> : <RouterProvider router={router}/>}
    </CookiesProvider>
  )
}

export default App