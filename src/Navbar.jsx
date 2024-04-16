import React from "react";
import cart from "../src/assets/icon/Group 7.png";
import userPic from "../src/assets/icon/check 1.png";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#591BFF] to-[rgba(123,74,255,0.67)] mt-5 py-4 rounded-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Event Host logo */}
        <div className="text-white text-xl pl-10  flex items-center">
          <a href="/" className="text-white">
            Event<span className="font-bold">Host</span>
          </a>

          {/* Dotted line */}
          <div className="border-l border-white border-dotted h-8 ml-10"></div>
        </div>

        {/* Navigation links */}
        <ul className="flex text-xl space-x-8 text-white justify-center">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-300">
              Events
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* User profile picture and shopping cart icon */}
        <div className="flex items-center space-x-4 pr-10">
          <div className="border-l border-white border-dotted h-8 mr-10"></div>

          {/* User profile picture */}
          <img
            src={userPic}
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />

          {/* Shopping cart icon */}
          <img src={cart} alt="Shopping Cart" className="w-8 h-8" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
