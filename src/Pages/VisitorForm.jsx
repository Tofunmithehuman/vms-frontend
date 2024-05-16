import React from "react";
import Navigation from "../Components/Navigation";
import "../Styles/globalStyle.css";
import { Link } from "react-router-dom";

function VisitorForm() {
  return (
    <div className="VisitorForm">
      <Navigation />
      <div className="VisitorFormContainer md:pt-20 pt-14 ">
        <div className="mt-2">
          <div className="container max-w-screen-sm m-auto pt-20 p-5">
            <form>
              <h1 className="text-orange mb-5 md:text-2xl font-bold text-xl">
                Send a request to a Staff
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
                  placeholder="Email (Optional)"
                  className="p-3 bg-lightBlue outline-none"
                />
                <input
                  type="text"
                  placeholder="Purpose of visit"
                  className="p-3 bg-lightBlue outline-none"
                  required
                />
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="4"
                  placeholder="Purpose description"
                  className="p-3 bg-lightBlue outline-none"
                ></textarea>
                <p className="text-orange -mt-2 -mb-5">
                  Upload Photo (Optional)
                </p>
                <input type="file" className="p-3 bg-lightBlue outline-none" />
                <p className="text-orange -mt-2 -mb-5">Select Staff</p>
                <select
                  name="workers"
                  defaultValue="worker"
                  className="p-3 bg-lightBlue outline-none"
                >
                  <option value="worker" disabled>
                    Choose a staff
                  </option>
                  <option value="john">John (Electrical)</option>
                  <option value="emma">Emma (I & C)</option>
                  <option value="michael">Michael (Mechanical)</option>
                  <option value="sarah">Sarah (Finance)</option>
                  <option value="david">David (Warehouse)</option>
                </select>
                <button
                  type="submit"
                  className="bg-orange text-white font-bold rounded p-3 hover:bg-darkOrange duration-200 ease-in-out"
                >
                  Send Request
                </button>
                <p>
                  Go back to{" "}
                  <Link
                    to="/"
                    className="border-b-2 text-orange hover:text-darkOrange"
                  >
                    Home
                  </Link>{" "}
                  page
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitorForm;
