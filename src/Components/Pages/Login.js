import React from "react";
import Logo from "../../Assets/logo.png";
import Form from "../../UI/Molecules/Form";

const Login = () => {
  return (
    <div className="flex flex-wrap h-[100%]">
      <div className="hidden bg-[#031434] w-[30%] px-4 h-screen overflow-y-auto lg:block">
        <div className="relative mx-auto top-[230px]">
          <img
            src={Logo}
            alt="An icon of the star war movie"
            className="w-[350px] mx-auto"
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
