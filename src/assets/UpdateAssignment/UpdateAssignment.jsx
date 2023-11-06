import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const UpdateAssignment = () => {
  const navigate = useNavigate();
  const assignmentData = useLoaderData();
  const { _id, title, marks, thumbnail, details, difficulty, creatorEmail } =
    assignmentData;
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
    const UpdatedAssignmentInfo = {
      title,
      marks,
      thumbnail,
      details,
      difficulty: updatedDifficulty,
      dueDate: UpdatedDueDate,
    };
    console.log(user.email);
    console.log(creatorEmail);
    if (user.email === creatorEmail) {
      fetch(`https://academe-connect-server.vercel.app/assignments/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdatedAssignmentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Assignment Updated Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
            navigate("/assignments");
          }
        });
    }
    else{
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Only Assignment Created User Can Do this",
      });
    }
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
                defaultValue={title}
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
                defaultValue={marks}
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
                defaultValue={thumbnail}
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
                  selected={UpdatedDueDate}
                  onChange={(date) => setUpdatedDueDate(date)}
                  className="w-full rounded py-2 px-3"
                  value={UpdatedDueDate}
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
                defaultValue={details}
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
                defaultValue={difficulty}
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
