import React from "react";

const FormInputs = () => {
  return (
    <>
      <select
        name=""
        id=""
        className="appearance-none w-full md:w-32 px-3 py-2 border border-black border-opacity-50 bg-transparent text-gray-500"
      >
        <option value="">LHR</option>
      </select>

      <select
        name=""
        id=""
        className="appearance-none w-full md:w-32 px-3 py-2 border border-black border-opacity-50 bg-transparent text-gray-500"
      >
        <option value="">CDG</option>
      </select>

      <input
        type="date"
        id="date"
        name="date"
        className="w-full md:w-44 px-3 py-2 border border-black border-opacity-50 focus:outline-none"
      />

      <select
        name=""
        id=""
        className=" w-full md:w-24 px-3 py-[9.5px] border border-black border-opacity-50 bg-transparent text-gray-500"
      >
        <option value="">Day -</option>
      </select>

      <select
        name=""
        id=""
        className=" w-full md:w-24 px-3 py-[9.5px] border border-black border-opacity-50 bg-transparent text-gray-500"
      >
        <option value="">Day +</option>
      </select>

      <select
        name=""
        id=""
        className=" w-full md:w-36 px-3 py-[9.5px] border border-black border-opacity-50 bg-transparent text-gray-500"
      >
        <option value="">Anytime</option>
      </select>

      <span className="text-lg">+</span>

      <select
        name=""
        id=""
        className=" w-full md:w-32 px-3 py-[9.5px] border border-black border-opacity-50 bg-transparent text-gray-500"
      >
        <option value="">ADT</option>
      </select>

      <select
        name=""
        id=""
        className=" w-full md:w-32 px-3 py-[9.5px] border border-black border-opacity-50 bg-transparent text-gray-500"
      >
        <option value="">1</option>
      </select>

      <span className="text-lg">+</span>
    </>
  );
};

export default FormInputs;
