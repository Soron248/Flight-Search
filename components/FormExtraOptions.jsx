import React from "react";

const FormExtraOptions = () => {
  return (
    <>
      <div className="space-x-2">
        <input type="checkbox" />
        <label htmlFor="" className="font-semibold">
          Extra Options
        </label>
      </div>

      <div className="space-x-3">
        <span className="font-semibold">Environment</span>
        <input type="radio" />
        <label htmlFor="" className="font-semibold">
          Dummy
        </label>

        <input type="radio" />
        <label htmlFor="" className="font-semibold">
          PDT
        </label>
      </div>

      <div>
        <button
          type="button"
          className="bg-blue-900 text-white text-xs py-2 px-5 rounded-sm"
        >
          SEARCH
        </button>
      </div>
    </>
  );
};

export default FormExtraOptions;
