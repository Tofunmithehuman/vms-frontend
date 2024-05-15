import React from "react";
import "../Styles/globalStyle.css";

function Navigation() {
  return (
    <div className="Navigation bg-white">
      <div className="w-100 fixed top-0 left-0 right-0 shadow">
        <header className="flex justify-between align-center md:p-8 p-6">
          <img
            src="https://i0.wp.com/transcorppower.com/wp-content/uploads/2023/12/Transcorp-Power.png?fit=259%2C37&ssl=1"
            alt="Logo"
            className="md:w-23 md:h-8 w-15 h-6"
          />
          <nav>
            {/* <ul>
              <li className="text-gray hover:border-b-2 border-orange cursor-pointer ease-in-out duration-100">Home</li>
            </ul> */}
          </nav>
        </header> 
      </div>
    </div>
  );
}

export default Navigation;
