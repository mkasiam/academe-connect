import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Assignment from "../Assignment/Assignment";

const Assignments = () => {
  const assignments = useLoaderData();
  const [selectedDifficulty, setSelectedDifficulty] = useState("all"); 

  // Handle user's difficulty level selection
  const handleFilterChange = (e) => {
    setSelectedDifficulty(e.target.value);
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
    </div>
  );
};

export default Assignments;
