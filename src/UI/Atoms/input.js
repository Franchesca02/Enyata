import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  // const [password, setPassword] = useState("");
  // const [disable, setDisable] = useState("");
  const history = useNavigate();

  //   const initialStateValue = "[ A-Za-z0-9]";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // eslint-disable-next-line
    const rex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  };

  // const disableButton = () => {
  //   if (password === false) {
  //     setDisable(disable);
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    history("/overview");
  };

  return (
    <div name="input">
      <form onSubmit={handleSubmit} className="my-8">
        <input
          type="email"
          onChange={handleEmailChange}
          name={email}
          placeholder="Email Address"
          required
          className="w-[335px] h-[48px] rounded bg-white border-2 border-[#0A74DC] radius-[4px] my-4 px-2 outline-0
"
        />
        <input 
         pattern="(?=.*\d)(?=.*[a-z])(?=.*[0-9]).{8,}"
         title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          type="password"
          onChange={handlePasswordChange}
          placeholder="Password"
          required
          name="password"
          className="w-[335px] h-[48px] rounded bg-white border-2 border-[#0A74DC] radius-[4px] my-2 px-2 outline-0
"
        />
        <button
          // onClick={disableButton}
          className="w-[335px] h-[48px] rounded bg-[#0A74DC] text-white text-sm border-2 border-[#0A74DC] radius-[4px] my-4 px-2 outline-0
"
        >
          Log in
        </button>
      </form>
      <div>
        <a href="/" className="text-base text-[#0A74DC] font-medium">
          Forgot Your Password?
        </a>
      </div>
    </div>
  );
};

export default Input;
