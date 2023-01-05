import { createBrowserRouter } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Root from "../Root/Root";

export const Router = createBrowserRouter([
    {
        path:'/',
         element:<Root></Root>,
         loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
          children:[
        {path:'/', element:<Home></Home>},
        {path:'/shop', element:<Shop></Shop>},
        {path:'/cart', element:<Cart></Cart>},
    ]},
        
])