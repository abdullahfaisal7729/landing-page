import React from "react";
import logo from "./../logo-final.png";

const Footer = () => {
  return (
    // Main Section
    <div
      //   className="grid grid-rows-5 items-center space-y-5"
      style={{
        height: "35vh",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto",
        alignItems: "center",
        // border: "5px solid red",
        // marginLeft: "200px",
        // marginRight: "300px",
        // paddingTop: "10px",
        justifyContent: "center",
        fontSize: "14px",
        // marginTop: "100px",
        // gridGap: "50px",
        gridColumnGap: "50px",
        columnGap: "120px",
        backgroundColor: "white",
      }}
    >
      {/* 1st element */}
      <div
        className=""
        style={
          {
            //   gridRow: "1/5",
          }
        }
      >
        <div
          style={{
            marginBottom: "11px",
          }}
        >
          <img
            src={logo}
            style={{ width: 30, height: 30 }}
            alt="Error in image"
          ></img>
        </div>

        <p
          className="text-base font-bold text-center"
          style={{
            fontFamily: "sans-serif",
            // width: "700px",
          }}
        >
          The smarter way to start your next idea
        </p>
      </div>
      {/* 2nd Element */}
      {/* Row # 01 */}
      <div
        className=""
        //   className="flex flex-row items-center font-bold justify-between mr-10"
        style={{
          fontSize: "14px",
        }}
      >
        {/* 1st element */}
        <div
          style={{
            fontWeight: "bold",
          }}
        >
          How it Works
        </div>
        <div>Overview</div>
        <div>Pricing</div>

        <div>Service Areas</div>
      </div>
      {/* Row # 02 */}
      <div
        //   className="flex flex-row items-center justify-between mr-10 text-color-darkGrayishBlue"
        style={{}}
      >
        {/* 1st element */}
        <div
          style={{
            fontWeight: "bold",
          }}
        >
          Resources
        </div>
        <div>Customer Stories</div>
        <div>Knowledge Base</div>
        <div>Contact Us</div>
      </div>
      {/* Row # 03 */}
      <div
        // className="flex flex-row items-center justify-between mr-10"
        style={{
          marginTop: "20px",
        }}
      >
        {/* 1st element */}
        <div
          style={{
            fontWeight: "bold",
          }}
        >
          Products
        </div>
        <div>Corporate Partners</div>
        <div>Secure Identity</div>
        <div>Legal Help</div>
        <div>First Capital</div>
      </div>
      {/* Row # 04 */}
      <div style={{}}>
        {/* 1st element */}
        <div
          style={{
            fontWeight: "bold",
          }}
        >
          Company
        </div>
        <div>About Us</div>
        <div>Careers</div>
        <div>Terms of Use</div>
      </div>
    </div>
  );
};
export default Footer;
