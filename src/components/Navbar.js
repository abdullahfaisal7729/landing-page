import React from "react";
import logo from "./../logo-final.png";

const Navbar = () => {
  return (
    <nav
      className="mx-auto ps-6 pt-4"
      style={{
        color: "#6d7685",
      }}
    >
      <div className="flex flex-row-start items-center justify-between">
        <div
          className="flex space-x-10 ml-56"
          style={{
            fontSize: "14px",
            color: "#3c4554",
          }}
        >
          <img
            src={logo}
            style={{ width: 30, height: 30 }}
            alt="Error in image"
          ></img>
          <a href="/" className="text-darkGrayishBlue hover:text-white">
            Pricing
          </a>
          <a href="/" className="text-darkGrayishBlue hover:text-white">
            Product
          </a>
          <a href="/" className="text-darkGrayishBlue hover:text-white">
            About
          </a>
          <a href="/" className="text-darkGrayishBlue hover:text-white">
            Blog
          </a>
          <a href="/" className="text-darkGrayishBlue hover:text-white">
            Wall of Love
          </a>
          <a href="/" className="text-darkGrayishBlue hover:text-white">
            Resources
          </a>
        </div>
        <div className="flex space-x-10 pb-6 mr-32">
          <a href="/" className="hover:text-darkGrayishBlue">
            Sign in
          </a>
          <a
            href="/"
            className="hover:text-darkGrayishBlue"
            style={{
              marginTop: "-4px",
            }}
          >
            Request Demo{" "}
            <span
              style={{
                fontSize: "20px",
                color: "#2f3f69",
              }}
            >
              &#8594;
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
