import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const SubmittedAssignments = () => {
  const submitted = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-gray-100 flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse my-8">
      {/* Sidebar */}
      <div className="bg-blue-600 text-white w-full md:w-64 lg:w-64 py-6 px-4">
        <h2 className="text-2xl font-semibold mb-4">Teacher Dashboard</h2>

        {/* Add navigation links here */}
      </div>

      {/* Content */}
      <div className="w-full p-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Pending Assignments
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {submitted.map((assignment) => (
            <div
              key={assignment._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 uppercase">
                  {assignment.title}
                </h2>
                <p className="text-md text-gray-600">
                  Examinee: {assignment.submittedUserName}
                </p>
                <p className="text-md text-gray-600">
                  Marks: {assignment.marks}
                </p>
              </div>
              <div className="bg-blue-100 py-2 px-4">
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Give Mark
                </button>
                {isOpen && (
                  <form>
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                          <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold text-center">
                              Assignment Details
                            </p>
                          </div>
                          <div className="my-3">
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
                              value={assignment.pdfLink}
                            />
                          </div>
                          <div className="my-3">
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
                              value={assignment.quickNote}
                            />
                          </div>
                          <div className="my-3">
                            <label
                              htmlFor="marks"
                              className="text-lg font-semibold"
                            >
                              Obtain Marks:
                            </label>
                            <input
                              id="obtainMarks"
                              name="obtainMarks"
                              className="w-full px-3 py-2 border rounded-md"
                              placeholder="Obtain Marks"
                            />
                          </div>
                          <div className="my-3">
                            <label
                              htmlFor="feedback"
                              className="text-lg font-semibold"
                            >
                              Feedback:
                            </label>
                            <input
                              id="feedback"
                              name="feedback"
                              className="w-full px-3 py-2 border rounded-md"
                              placeholder="Teachers feedback"
                            />
                          </div>
                          <div className="mt-5 flex justify-end">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                              type="submit"
                            >
                              Give Mark
                            </button>

                            <button
                              onClick={() => setIsOpen(false)}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubmittedAssignments;
