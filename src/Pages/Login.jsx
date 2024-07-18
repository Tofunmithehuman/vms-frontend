import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import "../Styles/globalStyle.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/userSlice";
import axios from "../axios";

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await axios.post(
        "/users/login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const user = response.data; 
      dispatch(setUser(user));
      navigate("/");
    } catch (error) {
      console.error("There was an error logging in.", error.response || error);

      const errorMessage =
        error.response?.data ||
        "An error occurred during login. Please try again.";
      setErrorMessage(errorMessage);
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div className="Login">
      <Navigation />
      <div className="LoginContainer md:pt-28 pt-20">
        <div className="md:mt-10 mt-2">
          <div className="container max-w-screen-sm m-auto pt-20 p-5">
            <form onSubmit={handleSubmit}>
              <h1 className="text-orange mb-5 md:text-2xl font-bold">
                Welcome, Login to continue
              </h1>
              <div className="flex flex-col gap-7">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-3 bg-lightBlue outline-none"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-3 bg-lightBlue outline-none"
                  required
                />
                {showModal && (
                  <div>
                    <div className="flex items-center gap-3 p-3 bg-red-100 mt-4 rounded">
                      <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                      <p className="text-xs">{errorMessage}</p>
                    </div>
                  </div>
                )}
                <button
                  type="submit"
                  className="bg-orange text-white font-bold rounded p-3 hover:bg-darkOrange duration-200 ease-in-out"
                >
                  Login
                </button>
                <p>
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="border-b-2 text-orange hover:text-darkOrange"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
