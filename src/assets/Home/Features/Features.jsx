import {
  FaUserFriends,
  FaBookReader,
  FaTasks,
  FaCheck,
  FaThumbsUp,
  FaComments,
} from "react-icons/fa";

function Features() {
  return (
    <section className="bg-gray-100 py-8 md:py-16 p-4 rounded-md my-6">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-2 md:mb-4">
          Features
        </h2>
        <p className="text-gray-500 text-sm md:text-lg mb-4 md:mb-8">
          Empower your group study experience with these key features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
         {/* Feature 1 */}
         <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-2xl md:text-3xl text-[#8768EE] mb-2 md:mb-4">
              <FaUserFriends />
            </div>
            <p className="text-sm md:text-lg font-semibold mb-2">Connect with Friends</p>
            <p className="text-gray-600 text-xs md:text-sm">
              Collaborate with your friends and create study groups to stay connected.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-2xl md:text-3xl text-[#8768EE] mb-2 md:mb-4">
              <FaBookReader />
            </div>
            <p className="text-sm md:text-lg font-semibold mb-2">
              Create Assignments
            </p>
            <p className="text-gray-600 text-xs md:text-sm">
              Easily create study assignments and share them with your group.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-2xl md:text-3xl text-[#8768EE] mb-2 md:mb-4">
              <FaTasks />
            </div>
            <p className="text-sm md:text-lg font-semibold mb-2">
              Complete Assignments
            </p>
            <p className="text-gray-600 text-xs md:text-sm">
              Work on assignments together, making group study efficient and
              enjoyable.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-2xl md:text-3xl text-[#8768EE] mb-2 md:mb-4">
              <FaCheck />
            </div>
            <p className="text-sm md:text-lg font-semibold mb-2">
              Grade Assignments
            </p>
            <p className="text-gray-600 text-xs md:text-sm">
              Evaluate your friends work and provide constructive feedback.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-2xl md:text-3xl text-[#8768EE] mb-2 md:mb-4">
              <FaThumbsUp />
            </div>
            <p className="text-sm md:text-lg font-semibold mb-2">Peer Review</p>
            <p className="text-gray-600 text-xs md:text-sm">
              Supportive peer review system for fair assessment and learning.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-2xl md:text-3xl text-[#8768EE] mb-2 md:mb-4">
              <FaComments />
            </div>
            <p className="text-sm md:text-lg font-semibold mb-2">
              Real-time Chat
            </p>
            <p className="text-gray-600 text-xs md:text-sm">
              Communicate with your study group through real-time chat for
              effective collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
