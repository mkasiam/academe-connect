import { Link } from "react-router-dom";

const AssignmentDetails = () => {
  
  return (
    <div className="card card-side flex flex-col md:flex-row lg:flex-row bg-base-100 shadow-xl md:flex md:space-x-4">
      <div className="w-full md:w-1/2 lg:w-1/2">
        <img src="" alt="Product" className="w-full" />
      </div>
      <div className="card-body md:w-1/2">
        <div className="py-4">
          <div className="font-bold text-xl mb-2">name</div>
          <p className=" text-lg mb-2 font-semibold">Brand: </p>
          <p className=" text-lg font-semibold mb-2">Product Type: </p>
          <div className="mb-2">
            <p className=" text-lg font-semibold">Rating: </p>
          </div>
          <p className=" text-xl font-bold mb-2">Price: $</p>
          <p className="text-lg font-semibold">Details</p>
          <div className="flex gap-4 mt-4">
            <button
              className="btn btn-active bg-[#8973c0] btn-info rounded-md text-white font-bold"
            >
              Take it
            </button>
            <button className="btn text-[#8973c0] btn-outline rounded-md">
              <Link to="/">Delete</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
