import { createBrowserRouter } from "react-router-dom";
import Assignments from "../Assignments/Assignments";
import CreateAssignment from "../CreateAssignment/CreateAssignment";
import HomePage from "../Home/HomePage/HomePage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Root from "../Root/Root";
import SubmittedAssignments from "../SubmittedAssignments/SubmittedAssignments";
import UpdateAssignment from "../UpdateAssignment/UpdateAssignment";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import AssignmentViewer from "../pages/AssignmentViewer/AssignmentViewer";
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
        loader: () => fetch("https://academe-connect-server.vercel.app/assignmentsCount"),
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
          fetch(`https://academe-connect-server.vercel.app/assignments/${params.id}`),
      },
      {
        path: "/assignmentDetails/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://academe-connect-server.vercel.app/assignments/${params.id}`),
      },
      {
        path: "/submittedAssignments",
        element: (
          <PrivateRoute>
            <SubmittedAssignments></SubmittedAssignments>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://academe-connect-server.vercel.app/submittedAssignments?status=pending", {
            credentials: "include",
          }),
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
        path: "/pdfView/:id",
        element: <AssignmentViewer></AssignmentViewer>,
        loader: ({ params }) =>
          fetch(`https://academe-connect-server.vercel.app/submittedAssignments/${params.id}`),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
