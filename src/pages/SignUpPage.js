import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import axios from "axios";
import { USER_DATA, USER_TOKEN } from "../constants";

export const SignUpPage = () => {
  const { setUser } = useAuth();
  const [userSignup, setUserSignup] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const navigate = useNavigate();
  const changeHandlerSignup = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserSignup((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const signupUser = async () => {
    try {
      const response = await axios.post("/api/auth/signup", userSignup);
      console.log(response);

      localStorage.setItem(USER_TOKEN, response.data.encodedToken);
      localStorage.setItem(
        USER_DATA,
        JSON.stringify(response.data.createdUser)
      );
      setUser({
        user: response.data.createdUser,
        token: response.data.encodedToken,
      });
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center fixed top-0 left-0 h-full w-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-[#fff] border-2 w-[22rem] space-y-2 p-[1rem] m-[2rem] shadow-md"
        >
          <h3 className="text-center text-[1.8rem] font-[600] text-purple-500">
            SIGNUP
          </h3>
          <div className="flex flex-col">
            <h4 className="text-sm">First Name</h4>
            <input
              type="text"
              name="firstName"
              value={userSignup.firstName}
              onChange={(e) => changeHandlerSignup(e)}
              placeholder="enter your first name"
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
            ></input>
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm">Last Name</h4>
            <input
              type="text"
              name="lastName"
              value={userSignup.lastName}
              onChange={(e) => changeHandlerSignup(e)}
              placeholder="enter your last name"
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
            ></input>
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm">Email</h4>
            <input
              type="text"
              name="email"
              value={userSignup.email}
              onChange={(e) => changeHandlerSignup(e)}
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
              placeholder="enter your username"
            ></input>
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm">Password</h4>
            <input
              type="password"
              name="password"
              value={userSignup.password}
              onChange={(e) => changeHandlerSignup(e)}
              placeholder="enter your password"
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
            ></input>
          </div>

          <button
            className="w-full p-1 bg-purple-600 text-white font-bold rounded-[3px] tracking-wider cursor-pointer"
            onClick={() => signupUser()}
          >
            SIGNUP
          </button>

          <div className="flex space-x-1">
            <p className="text-gray-500 ">
              {" "}
              Have an account{" "}
              <Link to="/login">
                <span className="text-purple-600 font-[600]"> Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
