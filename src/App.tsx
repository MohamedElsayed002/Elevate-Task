import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { HomeLayout , Error , Home , About , SingleProduct } from "./Pages";
import { loader as HomeLoader } from "./Pages/Home";
import {loader as SingleProductLoader} from './Pages/SingleProduct'

const router = createBrowserRouter([
  {
    path : "/",
    element : <HomeLayout/>,
    children : [
      {path : "/", element : <Home/> , loader : HomeLoader},
      {path : "about",element : <About/>},
      {path : "products/:id", element : <SingleProduct/> , loader : SingleProductLoader},
      // Add more routes here if needed.
    ],
    errorElement : <h1>Error</h1>
  },
  {
    path : "*",
    element : <Error/>
  }
])


const App = () => {
  return <>
     <RouterProvider router={router} />
  </>
}

export default App 