import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* First Banner  */}
      <div
        className="max-h-max flex items-center justify-center my-8"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center">
          {/* Image Content  */}
          <div className="mb-4 w-full md:w-1/2 lg:w-1/2 ">
            <img
              className="w-full rounded-sm"
              src="https://i.ibb.co/q0CJ6Hw/rsz-120944999.jpg"
              alt=""
            />
          </div>
          {/* Text and Action Content  */}
          <div className="w-full  md:w-1/2 lg:w-1/2">
            <div className="space-y-2 ">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#8768EE]">
              Collaborative Learning Made Easy with academe-connect
              </h1>
              <p className="text-lg">
              Academe-Connect simplifies collaborative learning. Create assignments, complete them together, and grade your friends work effortlessly. Empower your group study experience with user-friendly tools.
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 bg-[#8768EE] rounded-md text-white font-bold">
                <Link to="/">Get Started</Link>
              </button>
              <button className="btn text-[#8768EE] btn-outline rounded-md">
                <Link to="/products">All Assignments</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Second Banner  */}
      <div
        className="max-h-max flex items-center justify-center mt-10 md:mt-12  lg:mt-16"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
          {/* Image Content  */}
          <div className="mb-4 w-full md:w-1/2 lg:w-1/2">
            <img
              className="w-full rounded-sm"
              src="https://i.ibb.co/JrQR6V1/rsz-team-of-business-people-putting-hands-up-together.jpg"
              alt=""
            />
          </div>
          {/* Text and Action Content  */}
          <div className="w-full md:w-1/2 lg:w-1/2">
            <div className="space-y-4 text-left lg:text-right ">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#8768EE]">
              Stay on Track with Group Assignments
              </h1>
              <p className="text-lg">
              Keep your group study on track with Academe-Connect. Collaborate seamlessly, complete assignments together, and achieve your study goals as a team.
              </p>
              <button className="px-4 py-2 bg-[#8768EE] rounded-md text-white font-bold float-left md:float-right lg:float-right">
                <Link to="/">Review Work</Link>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
