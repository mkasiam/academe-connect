import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AssignmentDetails = () => {
  const assignmentData = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {
    _id,
    title,
    marks,
    thumbnail,
    details,
    dueDate,
    difficulty,
    creatorEmail,
  } = assignmentData;
  const { user } = useAuth();
  const handleDeleteAssignment = (id) => {
    if (user.email === creatorEmail) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://academe-connect-server.vercel.app/assignments/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                navigate("/assignments");
              }
            });
        }
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Only Assignment Created User Can Do this",
      });
    }
  };
  
  const handleSubmitAssignment = (e) =>{
    e.preventDefault();
    const form = e.target;
    const pdfLink = form?.pdfLink.value;
    const quickNote = form?.quickNote.value;
    const submittedUserEmail = user.email;
    const submittedUserName = user.displayName;
    const submittedAssignment = {title,marks,pdfLink,quickNote,status:"pending",submittedUserEmail,submittedUserName};
    axios.post("https://academe-connect-server.vercel.app/submittedAssignments",submittedAssignment)
    .then(res => {
      const data = res.data;
      if (data.acknowledged) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Assignment Submitted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsOpen(false);
        navigate("/assignments")
      }
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="card card-side flex flex-col md:flex-row lg:flex-row bg-base-100 shadow-xl md:flex md:space-x-4 my-8">
      <div className="w-full md:w-1/2 lg:w-1/2">
        <img src={thumbnail} alt="Product" className="w-full" />
      </div>
      <div className="card-body md:w-1/2">
        <div className="py-4">
          <div className="font-bold text-xl mb-2 uppercase">{title}</div>
          <p className=" text-lg mb-2 font-semibold">Marks:{marks}</p>
          <p className=" text-lg font-semibold mb-2">
            Difficulty Level:<span className="uppercase">{difficulty}</span>
          </p>
          <div className="mb-2">
            <p className=" text-lg font-semibold">Date: {dueDate} </p>
          </div>
          <p className="text-lg font-semibold">Details:{details}</p>
          <div className="flex gap-4 mt-4">
            <button
              className="btn btn-active bg-[#8973c0] btn-info rounded-md text-white font-bold"
              onClick={()=>setIsOpen(true)}
            >
              Take it
            </button>
            {isOpen && (
              <form onSubmit={handleSubmitAssignment}>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                  <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 text-left px-6">
                      <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold text-center">Assignment Details</p>
                      </div>
                      <div className="my-5">
                        <label
                          htmlFor="pdfLink"
                          className="text-lg font-semibold"
                        >
                          PDF Link:
                        </label>
                        <input
                          type="text"
                          name="pdfLink"
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="Enter PDF Link"
                        />
                      </div>
                      <div className="my-5">
                        <label
                          htmlFor="quickNote"
                          className="text-lg font-semibold"
                        >
                          Quick Note:
                        </label>
                        <textarea
                          id="quickNote"
                          name="quickNote"
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="Enter Quick Note"
                        />
                      </div>
                      <div className="mt-5 flex justify-end">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                          type="submit"
                        >
                          Submit
                        </button>

                        <button
                          onClick={()=>setIsOpen(false)}
                          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
            <button
              onClick={() => handleDeleteAssignment(_id)}
              className="btn text-[#8973c0] btn-outline rounded-md"
            >
              <Link>Delete</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
