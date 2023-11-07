import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MyAssignment = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/submittedAssignments?email=${user?.email}`)
      .then((response) => setAssignments(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [user?.email]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">
        My Assignments
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {assignments.map((assignment) => (
          <div
            key={assignment._id}
            className="bg-white shadow-md rounded-lg p-4"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {assignment.title}
            </h2>
            <p className="text-sm text-gray-600">
              Assignment Status: {assignment.status}
            </p>
            <p className="text-sm text-gray-600">Marks: {assignment.marks}</p>
            <p className="text-sm text-gray-600">
              Obtain Marks: {assignment.obtainMarks}
            </p>
            {assignment.feedback && (
              <p className="text-sm text-gray-600">
                Feedback: {assignment.feedback}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAssignment;
