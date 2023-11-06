import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Home/HomePage/HomePage";
import Root from "../Root/Root";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/profile",
        element:<Profile></Profile>
      },
      {
        path:"*",
        element:<NotFound></NotFound>
      }
    ],
  },
]);

export default router;
