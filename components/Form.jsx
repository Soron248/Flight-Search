import React from "react";
import TypeOfTrip from "./TypeOfTrip";
import FormInputs from "./FormInputs";
import FormExtraOptions from "./FormExtraOptions";

const Form = () => {
  return (
    <form>
      <div className="text-sm w-full flex justify-center mb-5">
        <TypeOfTrip />
      </div>

      <div className="text-sm w-full flex flex-col md:flex-row justify-center items-center gap-3 border-t border-b border-blue-500 py-3">
        <FormInputs />
      </div>

      <div className="text-sm w-full flex flex-col md:flex-row gap-5 justify-between items-center  border-b border-blue-500 py-3">
        <FormExtraOptions />
      </div>
    </form>
  );
};

export default Form;
