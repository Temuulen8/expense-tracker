import React from "react";

const Login = () => {
  return (
    <div className="flex">
      <div className="w-1/2 h-svh flex justify-center">
        <div className="flex flex-col justify-center content-center">
          <div className="flex items-center gap-2 justify-center">
            <img className="w-[23.84px] h-[23.5px]" src="./images/Vector.png" />
            <p className="font-bold text-2xl">Geld</p>
          </div>
          <div>
            <p className="font-semibold text-2xl flex justify-center">
              Welcome back
            </p>
            <p className="flex justify-center ">
              Welcome back, Please enter your details
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="bg-[#0166FF] w-1/2 h-svh"></div>
    </div>
  );
};

export default Login;
