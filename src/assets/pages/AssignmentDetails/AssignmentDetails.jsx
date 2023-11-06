import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AssignmentDetails = () => {
    const assignmentData = useLoaderData();
    const navigate = useNavigate();
    const {_id,title,marks,thumbnail,details,dueDate,difficulty,creatorEmail} = assignmentData;
    const {user} = useAuth();
    const handleDeleteAssignment = (id) =>{
      if(user.email === creatorEmail){
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
            fetch(`http://localhost:5000/assignments/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  navigate("/assignments")
                }
                
              });
          }
        });
      }else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops...",
          text: "Only Assignment Created User Can Do this"
        });
      }


    }
  
  return (
    <div className="card card-side flex flex-col md:flex-row lg:flex-row bg-base-100 shadow-xl md:flex md:space-x-4">
      <div className="w-full md:w-1/2 lg:w-1/2">
        <img src={thumbnail} alt="Product" className="w-full" />
      </div>
      <div className="card-body md:w-1/2">
        <div className="py-4">
          <div className="font-bold text-xl mb-2 uppercase">{title}</div>
          <p className=" text-lg mb-2 font-semibold">Marks:{marks}</p>
          <p className=" text-lg font-semibold mb-2">Difficulty Level:<span className="uppercase">{difficulty}</span></p>
          <div className="mb-2">
            <p className=" text-lg font-semibold">Date: {dueDate} </p>
          </div>
          <p className="text-lg font-semibold">Details:{details}</p>
          <div className="flex gap-4 mt-4">
            <button
              className="btn btn-active bg-[#8973c0] btn-info rounded-md text-white font-bold"
            >
              Take it
            </button>
            <button onClick={()=>handleDeleteAssignment(_id)} className="btn text-[#8973c0] btn-outline rounded-md">
              <Link>Delete</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
