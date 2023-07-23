import React from "react";
import Image from "./Image";
import "./../styles/ImageSection.css";

const ImageSection = () => {
  return (
    <div className="flex flex-col items-center main-section-image-section">
      <p className="text-center mt-10 image-section-description">
        Simplify operating and manage with transparency
      </p>
      <div className="grid grid-cols-3 mt-30 mb-10 ml-40 mr-40 image-section-margin">
        <Image />
        <Image />
        <Image />
      </div>
    </div>
  );
};

export default ImageSection;
