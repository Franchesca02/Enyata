import React from "react";
import Logo from "../../Assets/logo.png";
import Form from "../../UI/Molecules/Form";

const Login = () => {
  return (
    <div className="flex flex-wrap h-[100%]">
      <div className="bg-[#031434] w-[30%] h- px-10 flex justify-center item-center">
        <div className="">
          <img
            src={Logo}
            alt="An icon of the star war movie"
            className="w-[385px]"
          />
        </div>
      </div>
      <div className="bg-white mx-auto">
        <Form />
      </div>
    </div>
  );
};

export default Login;
