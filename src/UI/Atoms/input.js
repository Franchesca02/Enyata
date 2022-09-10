import React, { useState } from "react";
import { Link } from "react-router-dom";

const Input = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState("");

//   const initialStateValue = "[ A-Za-z0-9]";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // if (password === initialStateValue) {
      setPassword(event.target.value);
      
    // }
    
  };
  const disableButton = () => {
    if (password === false) {
      setDisable(disable);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your login details are \n 
            email: ${email} \n 
            password: ${password} \n 
            You have successfully logged in`);
  };

  return (
    <div name="input">
      <form onSubmit={handleSubmit} className="my-8">
        <input
          type="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="Email Address"
          required
          className="w-[335px] h-[48px] rounded bg-white border-2 border-[#0A74DC] radius-[4px] my-4 px-2 outline-0
"
        />
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Password"
          required
          className="w-[335px] h-[48px] rounded bg-white border-2 border-[#0A74DC] radius-[4px] my-2 px-2 outline-0
"
        />
        <Link to='Overview'>
        <button
          onClick={disableButton}
          className="w-[335px] h-[48px] rounded bg-[#0A74DC] text-white text-sm border-2 border-[#0A74DC] radius-[4px] my-4 px-2 outline-0
"
        >
          Log in
        </button>
        </Link>
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
