import React from "react";
import YoutubeSVG from "./icons/YoutubeSVG";

function Login() {
  return (
    <div className=" flex-row items-center justify-center ">
      <div>
        <p className=" text-center font-extrabold text-2xl">Login</p>
      </div>
      <br />
      <div className="  cursor-pointer">
        <YoutubeSVG className="" />
      </div>
    </div>
  );
}

export default Login;
