import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Assignment from "../Assignment/Assignment";
import "./Assignments.css";
import axios from "axios";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const { count } = useLoaderData();
  const NumberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(NumberOfPages).keys()];

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/assignments?page=${currentPage}&size=${itemsPerPage}`,
        { withCredentials: true }
      )
      .then((res) => setAssignments(res.data));
  }, [currentPage, itemsPerPage]);

  // Handle user's difficulty level selection
  const handleFilterChange = (e) => {
    setSelectedDifficulty(e.target.value);
  };
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Filtering Assignment based on the difficulty level
  const filteredAssignments =
    selectedDifficulty === "all"
      ? assignments
      : assignments.filter(
          (assignment) => assignment.difficulty === selectedDifficulty
        );
  return (
    <div>
      <div className="flex justify-end">
        <div className="flex justify-center">
          <label
            htmlFor="difficultyFilter"
            className="text-lg font-medium text-gray-700"
          >
            Filter by Difficulty
          </label>
          <select
            id="difficultyFilter"
            name="difficulty"
            value={selectedDifficulty}
            onChange={handleFilterChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="all">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 mt-4">
        {filteredAssignments.map((assignment) => (
          <Assignment key={assignment._id} assignment={assignment} />
        ))}
      </div>
      <div className="pagination">
        <button className="text-lg font-semibold" onClick={handlePrevPage}>
          Prev
        </button>
        {pages.map((number) => (
          <button
            className={currentPage === number ? "selected" : undefined}
            onClick={() => setCurrentPage(number)}
            key={number}
          >
            {number}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};

export default Assignments;
