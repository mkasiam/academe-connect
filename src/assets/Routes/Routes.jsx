import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Home/HomePage/HomePage";
import Root from "../Root/Root";
import NotFound from "../pages/NotFound/NotFound";

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
        path:"*",
        element:<NotFound></NotFound>
      }
    ],
  },
]);

export default router;
