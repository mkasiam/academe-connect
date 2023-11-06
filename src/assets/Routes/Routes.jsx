import { createBrowserRouter } from "react-router-dom";
import Assignments from "../Assignments/Assignments";
import CreateAssignment from "../CreateAssignment/CreateAssignment";
import HomePage from "../Home/HomePage/HomePage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Root from "../Root/Root";
import SubmittedAssignments from "../SubmittedAssignments/SubmittedAssignments";
import UpdateAssignment from "../UpdateAssignment/UpdateAssignment";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import Login from "../pages/Login/Login";
import MyAssignment from "../pages/MyAssignment/MyAssignment";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch("http://localhost:5000/assignments"),
      },
      {
        path: "/createAssignment",
        element: (
          <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateAssignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignments/${params.id}`),
      },
      {
        path: "/assignmentDetails/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignments/${params.id}`),
      },
      {
        path: "/submitted",
        element: (
          <PrivateRoute>
            <SubmittedAssignments></SubmittedAssignments>
          </PrivateRoute>
        ),
      },
      {
        path: "/myAssignments",
        element: (
          <PrivateRoute>
            <MyAssignment></MyAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
