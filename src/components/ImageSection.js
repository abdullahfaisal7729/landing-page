import React from "react";
import Image from "./Image";

const ImageSection = () => {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        color: "white",
        justifyContent: "center",
      }}
    >
      <p
        className="text-center mt-10"
        style={{
          fontSize: "45px",
          width: "650px",
          textAlign: "center",
          marginTop: "100px",
          fontFamily: "serif",
          lineHeight: "2.9rem",
          fontWeight: "bold",
        }}
      >
        Simplify operating and manage with transparency
      </p>
      <div
        className="grid grid-cols-3 mt-30 mb-10 ml-40 mr-40"
        style={{
          marginTop: "60px",
        }}
      >
        <Image />
        <Image />
        <Image />
      </div>
    </div>
  );
};

export default ImageSection;
