import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "../Styles/globalStyle.css";
import { setUser, logoutUser } from "../Redux/userSlice";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getFirstName = (fullName) => {
    return fullName ? fullName.split(" ")[0] : "";
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className="Navigation z-50">
      <div className="w-100 fixed top-0 left-0 right-0 shadow bg-white">
        <header className="flex justify-between items-center p-4 md:p-8">
          <img
            src="https://i0.wp.com/transcorppower.com/wp-content/uploads/2023/12/Transcorp-Power.png?fit=259%2C37&ssl=1"
            alt="Logo"
            className="md:w-23 md:h-8 w-17 h-5"
          />
          <nav>
            <ul className="hidden md:block">
              {user ? (
                <div className="flex gap-8">
                  <li>
                    <span className="text-darkOrange text-sm md:text-lg font-medium">
                      Welcome {getFirstName(user.name)}
                    </span>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-darkOrange hover:border-b-2 border-orange cursor-pointer ease-in-out duration-100 text-sm md:text-lg font-medium"
                    >
                      Logout <i className="fa-solid fa-share"></i>
                    </button>
                  </li>
                </div>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="text-darkOrange hover:border-b-2 border-orange cursor-pointer ease-in-out duration-100 text-sm md:text-lg font-medium"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>

            {user ? (
              <>
                <i
                  className={`fa-solid ${
                    menuOpen ? "fa-times" : "fa-bars"
                  } md:hidden block text-2xl`}
                  onClick={toggleMenu}
                ></i>

                <ul
                  className={`dropdown ${
                    menuOpen ? "open" : ""
                  } md:hidden flex justify-between flex-col `}
                >
                  <li>
                    <span className="text-darkOrange text-lg font-medium">
                      Welcome {getFirstName(user.name)}
                    </span>
                  </li>
                  <li className="text-right">
                    <button
                      onClick={handleLogout}
                      className="text-darkOrange hover:border-b-2 border-orange cursor-pointer ease-in-out duration-100 text-md font-medium"
                    >
                      Logout <i className="fa-solid fa-share"></i>
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <Link
                to="/login"
                className="text-darkOrange hover:border-b-2 border-orange cursor-pointer ease-in-out duration-100 text-sm md:text-lg font-medium md:hidden block"
              >
                Login
              </Link>
            )}
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Navigation;