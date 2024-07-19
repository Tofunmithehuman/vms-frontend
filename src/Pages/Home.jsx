import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Styles/globalStyle.css";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import {
  fetchVisitorCount,
  updateVisitorCount,
} from "../Redux/visitorCountSlice";
function Home() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.visitorCount.count);
  const user = useSelector((state) => state.user.user);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const today = useMemo(() => new Date(), []);
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    dispatch(fetchVisitorCount(today.toISOString().split("T")[0]));
  }, [dispatch, today]);

  const handleDecrement = () => {
    if (user?.isAdmin && number > 0) {
      dispatch(
        updateVisitorCount({
          date: today.toISOString().split("T")[0],
          count: number - 1,
        })
      );
    } else {
      showModalWithTimeout(
        "You must be an admin to perform this action."
      );
    }
  };

  const handleIncrement = () => {
    if (user?.isAdmin) {
      dispatch(
        updateVisitorCount({
          date: today.toISOString().split("T")[0],
          count: number + 1,
        })
      );
    } else {
      showModalWithTimeout(
        "You must be an admin to perform this action."
      );
    }
  };

  const showModalWithTimeout = (message) => {
    setErrorMessage(message);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  return (
    <div className="Home">
      <Navigation />

      <div className="pt-20">
        <div className="p-10 md:p-20">
          <h1 className="text-center text-orange font-bold text-xl md:text-3xl">
            Transcorp Power <br /> Visitor Management System (VMS)
          </h1>

          <div className="hidden md:block mt-10">
              {showModal && (
                <div>
                  <div className="flex items-center gap-3 p-3 bg-red-100 rounded justify-center m-auto max-w-md">
                    <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                    <p className="text-xs">{errorMessage}</p>
                  </div>
                </div>
              )}
            </div>

          <div className="flex flex-col md:flex-row items-center gap-10 justify-evenly align-center mt-20">
            <div className="shadow-lg p-8 w-80 rounded">
              <h1 className="font-bold text-lg">Total No. of people</h1>
              <p className="mt-2 mb-3 text-xs md:text-sm text-gray">
                The total number of people present in Transcorp Power PLC as of{" "}
                {formattedDate} is being recorded and analyzed.
              </p>
              <div className="flex justify-between items-center">
                <button
                  className="bg-orange text-white p-2 rounded-lg text-xl font-bold cursor-pointer w-10 text-center"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <p className="text-4xl text-orange">{number}</p>
                <button
                  className="bg-orange text-white p-2 rounded-lg text-xl font-bold cursor-pointer w-10 text-center"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            </div>

            <div className="block md:hidden">
              {showModal && (
                <div>
                  <div className="flex items-center gap-3 p-3 bg-red-100 rounded">
                    <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                    <p className="text-xs">{errorMessage}</p>
                  </div>
                </div>
              )}
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
      <Footer />
    </div>
  );
}

export default Home;
