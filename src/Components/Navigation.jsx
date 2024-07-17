import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/globalStyle.css";

function Navigation() {
  const [hideLogin, setHideLogin] = useState(false);

  const handleLoginClick = () => {
    setHideLogin(true);
    console.log("handling click ...")
  };
  return (
    <div className="Navigation z-50">
      <div className="w-100 fixed top-0 left-0 right-0 shadow bg-white">
        <header className="flex justify-between align-center md:p-8 p-6">
          <Link to="/">
            <img
              src="https://i0.wp.com/transcorppower.com/wp-content/uploads/2023/12/Transcorp-Power.png?fit=259%2C37&ssl=1"
              alt="Logo"
              className="md:w-23 md:h-8 w-15 h-6"
            />
          </Link>
          <nav>
            <ul>
              {!hideLogin && (
                <li>
                  <Link
                    to="/login"
                    className="text-darkOrange hover:border-b-2 border-orange cursor-pointer ease-in-out duration-100 text-lg md:me-20 font-medium"
                    onClick={handleLoginClick}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Navigation;
