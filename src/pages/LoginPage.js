import React from "react";

export const LoginPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center fixed top-0 left-0 h-full w-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-[#fff] border-2 w-[22rem] space-y-2 p-[1rem] m-[2rem] shadow-md"
        >
          <h3 className="text-center text-[1.8rem] font-[600] text-purple-500">
            LOGIN
          </h3>
          <div className="flex flex-col">
            <h4 className="text-sm">Username</h4>
            <input
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
              placeholder="enter your username"
              type="name"
              name="username"
            ></input>
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm">Password</h4>
            <input
              placeholder="enter your password"
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
              type="password"
              name="password"
            ></input>
          </div>

          <button className="w-full p-1 bg-purple-600 text-white font-bold rounded-[3px] tracking-wider cursor-pointer">
            LOGIN
          </button>
          <button className="w-full p-1 bg-[#fff] text-gray-500 font-bold border-2 rounded-[3px]  tracking-wider text-sm cursor-pointer">
            GUEST LOGIN
          </button>
          <div className="flex space-x-1">
            <p className="text-gray-500 ">Don't have an account create one </p>
          </div>
        </form>
      </div>
    </div>
  );
};
