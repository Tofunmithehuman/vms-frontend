import React from "react";
import { useState } from "react";
import "../Styles/globalStyle.css";
import Navigation from "../Components/Navigation";
import { Link } from "react-router-dom";

function Home() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [number, setNumber] = useState(0);

  const handleDecrement = () => {
    setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 0));
  };

  const handleIncrement = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

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
              <h1 className="font-bold text-lg">Total No. of people</h1>
              <p className="mt-2 mb-3 text-xs md:text-sm text-gray">
                The total number of people present in Transcorp Power PLC as of{" "}
                {formattedDate} is being recorded and analyzed.
              </p>
              <div className="flex justify-between items-center">
                <p
                  className="bg-orange text-white p-2 rounded-lg text-xl font-bold cursor-pointer w-10 text-center"
                  onClick={handleDecrement}
                >
                  -
                </p>
                <p className="text-4xl text-orange">{number}</p>
                <p
                  className="bg-orange text-white p-2 rounded-lg text-xl font-bold cursor-pointer w-10 text-center"
                  onClick={handleIncrement}
                >
                  +
                </p>
              </div>
            </div>
            <div className="shadow-lg p-8 w-80 rounded flex flex-col">
              <h1 className="font-bold text-lg">Send a request </h1>
              <p className="mt-2 mb-3 text-xs md:text-sm text-gray">
                To send a visitor request to any personnel in Transcorp Power
                PLC, please press the "Request Page" button.
              </p>
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
