import React from "react";

const RequestDemo = () => {
  return (
    <div
      className="flex flex-col items-center space-y-5 bg-slate-300"
      style={{
        height: "60vh",
        justifyContent: "center",
        backgroundColor: "#f3f4f8",
        justifyItems: "center",
      }}
    >
      <p
        className="text-4xl font-bold text-center"
        style={{
          fontFamily: "serif",
          width: "700px",
          fontSize: "47px",
          lineHeight: "2.9rem",
          textAlign: "center",
          display: "inline",
        }}
      >
        Say goodbye to long queues, big updates, and{" "}
        <span
          style={{
            color: "#61b18b",
          }}
        >
          confusion.
        </span>
      </p>
      <p
        className="max-w-sm text-center"
        style={{
          fontSize: "16px",
          color: "#90939c",
          fontWeight: "500",
          alignItems: "center",
          width: "600px",
        }}
      >
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt moillit anim id est laborum --- semper quis lectus
        nulla at volutpat diam ut venenatis
      </p>
      <div className="flex ml-0 space-x-1">
        <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded">
          Request Demo
        </button>
      </div>
    </div>
  );
};

export default RequestDemo;
