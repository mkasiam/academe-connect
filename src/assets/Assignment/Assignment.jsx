import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Assignment = ({ assignment }) => {
  const { _id, title, marks, difficulty, thumbnail } = assignment;
  return (
    <div className="bg-white rounded-lg shadow-md p-3">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full object-cover rounded-lg"
        />
        <div className="absolute right-0 top-0">
          <p className="bg-[#8768EE] text-white font-medium uppercase p-1 rounded-md">
            {difficulty}
          </p>
        </div>
      </div>
      <h3 className="text-xl font-semibold my-2 uppercase">{title}</h3>
      <p className="text-lg md:text-xl lg:text-xl font-bold">Marks: {marks}</p>

      <div className="mt-4 flex gap-3">
        <Link to={`/assignmentDetails/${_id}`}>
          <button className="btn bg-[#8768EE] hover:bg-[#8768EE] text-white font-semibold py-2 px-4 rounded">
            View Assignment
          </button>
        </Link>
        <Link to={`/updateAssignment/${_id}`}>
          <button className="btn btn-outline text-[#8768EE] font-semibold py-2 px-4 rounded">
            Update Assignment
          </button>
        </Link>
      </div>
    </div>
  );
};
Assignment.propTypes = {
  assignment: PropTypes.object,
};
export default Assignment;
