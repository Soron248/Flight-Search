import React from "react";

const TypeOfTrip = () => {
  return (
    <>
      <button
        type="button"
        className="border border-blue-800 px-3 py-1 focus:bg-blue-800 focus:text-white"
      >
        Round Trip
      </button>
      <button
        type="button"
        className="border border-blue-800 px-3 py-1 focus:bg-blue-800 focus:text-white active:bg-blue-800"
      >
        One Way
      </button>
      <button
        type="button"
        className="border border-blue-800 px-3 py-1 focus:bg-blue-800 focus:text-white"
      >
        Multi City
      </button>
    </>
  );
};

export default TypeOfTrip;
