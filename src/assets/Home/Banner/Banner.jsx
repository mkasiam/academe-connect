import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* First Banner  */}
      <div
        className="max-h-max flex items-center justify-center my-4"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center">
          {/* Image Content  */}
          <div className="mb-4 w-full md:w-2/5 lg:w-2/5">
            <img
              className="w-full rounded-sm"
              src="https://i.ibb.co/1q7CSC1/final-Banner1.jpg"
              alt=""
            />
          </div>
          {/* Text and Action Content  */}
          <div className="w-full md:w-3/5 lg:w-3/5">
            <div className="space-y-2 ">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#F28883]">
                Your Window to the Future of Technology
              </h1>
              <p className="text-lg">
                At Gadget Vista, we are passionate about bridging the gap
                between cutting-edge technology and everyday life. Our mission
                is to provide you with a clear view of the future, making the
                latest and greatest gadgets and innovations easily accessible.
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 bg-[#8973C0] rounded-md text-white font-bold">
                <Link to="/">Buy Now</Link>
              </button>
              <button className="btn text-[#8973c0] btn-outline rounded-md">
                <Link to="/products">Our Products</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Second Banner  */}
      <div
        className="max-h-max flex items-center justify-center my-4"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
          {/* Image Content  */}
          <div className="mb-4 w-full md:w-2/5 lg:w-2/5">
            <img
              className="w-full rounded-sm"
              src="https://i.ibb.co/Fh05K91/final-Banner2.jpg"
              alt=""
            />
          </div>
          {/* Text and Action Content  */}
          <div className="w-full md:w-3/5 lg:w-3/5">
            <div className="space-y-4 text-left lg:text-right ">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#F28883]">
                Quality Electronics, Exceptional Experiences.
              </h1>
              <p className="text-lg">
              We offer meticulously selected, top-tier electronic products for superior quality. Our dedication goes further, providing an exceptional end-to-end customer experience with easy shopping, responsive support, secure shipping, and post-purchase satisfaction. We are here to simplify and enhance your life through technology, ensuring every interaction with us is exceptional.
              </p>
              <button className="px-4 py-2 bg-[#8973C0] rounded-md text-white font-bold float-left md:float-right lg:float-right">
                <Link to="/">Know More</Link>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
