import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import "../Styles/globalStyle.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="Signup">
      <Navigation />
      <div className="SignUpContainer md:pt-28 pt-20">
        <div className="md:mt-10 mt-2">
          <div className="container max-w-screen-sm m-auto pt-20 p-5">
            <form>
              <h1 className="text-orange mb-5 md:text-2xl font-bold">
                Welcome, Signup to Create Account
              </h1>
              <div className="flex flex-col gap-7">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 bg-lightBlue outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 bg-lightBlue outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 bg-lightBlue outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange text-white font-bold rounded p-3 hover:bg-darkOrange duration-200 ease-in-out"
                >
                  Signup
                </button>
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="border-b-2 text-orange hover:text-darkOrange"
                  >
                    Login
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

export default Signup;
