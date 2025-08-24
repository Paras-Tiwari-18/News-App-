import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fetch_n } from "./components/news/fetch_n";
import { Display_n } from "./components/news/display_n";
import { ErrorPage } from "./components/error/error_page";
export const App=()=>{
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Display_n/>,
      loader:Fetch_n,
      errorElement:<ErrorPage/>
    }
  ]);
  return <RouterProvider router={router}/>
}