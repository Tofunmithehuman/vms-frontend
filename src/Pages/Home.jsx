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
    if (number > 0) {
      dispatch(
        updateVisitorCount({
          date: today.toISOString().split("T")[0],
          count: number - 1,
        })
      );
    }
  };

  const handleIncrement = () => {
    dispatch(
      updateVisitorCount({
        date: today.toISOString().split("T")[0],
        count: number + 1,
      })
    );
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
