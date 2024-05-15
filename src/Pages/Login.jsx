import React from "react";
import Navigation from "../Components/Navigation";
import "../Styles/globalStyle.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <Navigation />
      <div className="md:pt-28 pt-20">
        <div className="md:mt-10 mt-2">
          <div className="container max-w-screen-sm m-auto pt-20 p-5">
            <form>
              <h1 className="text-orange mb-5 md:text-2xl font-bold">
                Welcome, Login to continue
              </h1>
              <div className="flex flex-col gap-7">
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
    </div>
  );
}

export default Login;
