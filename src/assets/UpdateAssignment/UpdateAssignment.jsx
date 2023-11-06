import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import { useLoaderData } from "react-router-dom";

const UpdateAssignment = () => {
  const assignmentData = useLoaderData();
  console.log(assignmentData);
  const {title,marks,thumbnail,details,dueDate,difficulty} = assignmentData;
  const { user } = useAuth();
  const [updatedDifficulty, setUpdatedDifficulty] = useState("easy");
  const [UpdatedDueDate, setUpdatedDueDate] = useState(new Date());
  const handleUpdateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const thumbnail = form.thumbnail.value;
    const details = form.details.value;
    const creatorEmail = user.email;
    const UpdatedAssignmentInfo = {
      title,
      marks,
      thumbnail,
      details,
      difficulty:updatedDifficulty,
      dueDate:UpdatedDueDate,
      creatorEmail,
    };
    console.log(UpdatedAssignmentInfo);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row  gap-5 bg-[#FFF] rounded-md py-6 px-2 my-8">
        <div className="flex-1">
          <img src="https://i.ibb.co/DMk5GfH/update-assignment.jpg" alt="" />
        </div>
        <div className="flex-1">
          <form onSubmit={handleUpdateAssignment}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block font-medium text-gray-700"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                className="w-full border rounded py-2 px-3"
                placeholder="Assignment Title"
                name="title"
                value={title}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="marks"
                className="block font-medium text-gray-700"
              >
                Marks:
              </label>
              <input
                type="number"
                id="marks"
                className="w-full border rounded py-2 px-3"
                placeholder="Assignment Marks"
                name="marks"
                value={marks}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="thumbnail"
                className="block font-medium text-gray-700"
              >
                Thumbnail:
              </label>
              <input
                type="text"
                id="thumbnail"
                name="thumbnail"
                value={thumbnail}
                className="w-full border py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="block font-medium text-gray-700"
              >
                Due Date:
              </label>
              <div className="border">
                <DatePicker
                  id="dueDate"
                  selected={dueDate}
                  onChange={(date) => setUpdatedDueDate(date)}
                  className="w-full rounded py-2 px-3"
                  value={dueDate}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block font-medium text-gray-700"
              >
                Description:
              </label>
              <textarea
                id="description"
                className="w-full border rounded py-3 px-3"
                placeholder="Assignment Description"
                name="details"
                value={details}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="difficulty"
                className="block font-medium text-gray-700"
              >
                Difficulty Level:
              </label>
              <select
                id="difficulty"
                className="w-full border rounded py-2 px-3"
                value={difficulty}
                onChange={(e) => setUpdatedDifficulty(e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#8768EE] text-white font-medium py-2 px-4 rounded hover:bg-[#6b4ad8]"
            >
              Update Assignment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateAssignment;
