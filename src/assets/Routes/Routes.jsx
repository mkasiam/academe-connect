import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Home/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);

export default router;
