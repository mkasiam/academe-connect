import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer footer-center p-3 md:p-5 lg:p-7 bg-[#8973c0] bg-text-primary-content">
      <aside>
        <img src="https://i.ibb.co/HqXzyCC/academe-connect-logo.png" alt="" />
        <p className="text-lg font-medium">
          Bringing Tomorrows Tech to Your Doorstep.
        </p>
      </aside>
      <nav className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/about" className="link link-hover">
          About Us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact Us
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 cursor-pointer">
          <FaFacebookF></FaFacebookF>
          <FaInstagram></FaInstagram>
          <FaTwitter></FaTwitter>
          <FaTiktok></FaTiktok>
        </div>
      </nav>
      <p className="text-sm">
        Copyright © 2023 - All right reserved by Mka Siam
      </p>
    </footer>
  );
};

export default Footer;
