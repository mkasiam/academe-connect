import axios from "axios";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const { signInUser, signInWithGoogle, signInWithGithub } = useAuth();

  const handleLogIn = (e) => {
    setErrorMessage("");
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // Signing New User
    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        const name = loggedInUser?.displayName;
        navigate(location?.state ? location.state : "/");
        form.reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully Login ${name}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode === "auth/wrong-password") {
          // Password doesn't match
          setErrorMessage("Password doesn't match");
        } else if (errorCode === "auth/user-not-found") {
          // Email doesn't match
          setErrorMessage("Email doesn't match");
        } else {
          // Handle other errors
          setErrorMessage(errorMessage);
        }
      });
  };
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        const name = result?.user?.displayName;
        navigate(location?.state ? location.state : "/");

        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully Login ${name}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };
  const handleGithubLogIn = () => {
    signInWithGithub()
      .then((result) => {
        const name = result?.user?.displayName;
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully Login ${name}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };
  return (
    <>
      <h1 className="text-3xl text-center my-2 text-[#403F3F] font-semibold mb-4">
        Login your account
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row border border-[#FFF] bg-[#FFF] rounded-md py-7 mx-auto mt-7">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <img
            className="mx-auto"
            src="https://i.ibb.co/TwB2y41/login.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2">
          <div className="w-full space-y-4 border-b-2 pb-4 p-4">
            <div>
              <form onSubmit={handleLogIn} className="space-y-4">
                <div>
                  <label className="text-md font-semibold text-[#403F3F]">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    className="input input-bordered bg-white w-full rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="text-md font-semibold text-[#403F3F]">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="input input-bordered w-full bg-white rounded-md"
                    required
                  />
                </div>
                <p className="underline cursor-pointer pl-2 mt-2">
                  Forgot password
                </p>
                <div className="mt-5">
                  {errorMessage && (
                    <p className="text-xl font-bold text-[#FF0000]">
                      {errorMessage}
                    </p>
                  )}
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="btn bg-[#8768EE] hover:bg-[#a690f0] text-white w-full rounded-md"
                  >
                    Log In
                  </button>
                </div>
                <div>
                  <p className="text-[#706F6F] text-lg">
                    Do not Have An Account ?
                    <Link className="text-[#FF0000] text-lg" to="/register">
                      {" "}
                      Sign Up
                    </Link>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <h1 className="text-2xl font-bold">Also Continue with: </h1>
            <button onClick={handleGoogleLogIn} className="btn btn-outline ">
              <FaGoogle></FaGoogle>Google
            </button>
            <button onClick={handleGithubLogIn} className="btn btn-outline">
              <FaGithub></FaGithub>Github
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
