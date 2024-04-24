import React from "react";

const InputField = ({ inputProps, buttonProps, buttonLabel, value }) => {
  return (
    <div className=" flex relative">
      <div className="absolute inset-y-0 right-0 flex items-center pe-1.5 z-10">
        <button
          type="button"
          className="px-6 py-1 rounded-2xl bg-slate-950 hover:bg-slate-900 hover:border-slate-950 transition-all ease-linear duration-200"
          {...buttonProps}
        >
          {buttonLabel}
        </button>
      </div>
      <input
        value={value}
        {...inputProps}
        className="w-full pe-24 p-2.5 drop-shadow-lg rounded-2xl"
      />
    </div>
  );
};

export default InputField;
