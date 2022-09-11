import React from "react";
import Input from "../Atoms/input";

const Form = () => {
  return (
    <div
      name="form"
      className="w-[467px] radius-[8px] border-2 border-[linear-gradient(0deg, rgba(164, 167, 183, 0.3), rgba(164, 167, 183, 0.3)),
        linear-gradient(0deg, #FFFFFF, #FFFFFF);] relative top-[45px] text-center py-4"
    >
      <h1 className="text-2xl font-semi-bold">Login</h1>
      <p className="text-base font-normal">
        Kindly enter your details to login
      </p>
      <div>
        <Input />
      </div>
      <div className="flex items-center justify-center my-12">
        <a href="/" className="underline text-sm text-[#303B54]">
          Privacy policy{" "}
        </a>
        <p className="text-xs">and </p>
        <a href="/" className="underline text-sm text-[#303B54]">
          Terms of use
        </a>
      </div>
    </div>
  );
};

export default Form;
