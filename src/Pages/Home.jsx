import React from "react";
import "../Styles/globalStyle.css";
import Navigation from "../Components/Navigation";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <Navigation />

      <div className="pt-20">
        <div className="p-10 md:p-20">
          <h1 className="text-center text-orange font-bold text-xl md:text-3xl">
            Transcorp Power <br /> Visitor Management System (VMS)
          </h1>

          <div className="flex flex-wrap gap-10 justify-evenly align-center mt-20">
            <div className="shadow-lg p-8 w-80 rounded">
              <h1 className="mb-8 font-bold text-lg">Total No. of people</h1>
              <div className="flex justify-between items-center p-2">
                <p className="bg-orange text-white p-2 rounded-lg text-xl font-bold cursor-pointer">-</p>
                <p className="text-4xl text-orange">200</p>
                <p className="bg-orange text-white p-2 rounded-lg text-xl font-bold cursor-pointer">+</p>
              </div>
            </div>
            <div className="shadow-lg p-8 w-80 rounded flex flex-col">
              <h1 className="mb-8 font-bold text-lg">Send a request </h1>
              <Link
                to="/visitorForm"
                className="bg-orange text-white font-bold rounded p-3 hover:bg-darkOrange duration-200 ease-in-out text-center cursor-pointer"
              >
                Request Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
