import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { USER_DATA, USER_TOKEN } from "../constants";
import { useAuth } from "../contexts/AuthProvider";

export const LoginPage = () => {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [tester, setTester] = useState({
    email: "sweety@gmail.com",
    password: "sweety123",
  });
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const changeHandlerLogin = (e) => {
    setUserLogin((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginUserHandle = async (isTester) => {
    try {
      const response = await axios.post(
        "/api/auth/login",
        isTester ? tester : userLogin
      );
      console.log(response);
      {
        localStorage.setItem(USER_TOKEN, response.data.encodedToken);
        localStorage.setItem(
          USER_DATA,
          JSON.stringify(response.data.foundUser)
        );
      }
      setUser({
        user: response.data.foundUser,
        token: response.data.encodedToken,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
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
            LOGIN
          </h3>
          <div className="flex flex-col">
            <h4 className="text-sm">Email</h4>
            <input
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
              placeholder="enter your email"
              type="email"
              name="email"
              value={userLogin.email}
              onChange={(e) => changeHandlerLogin(e)}
            ></input>
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm">Password</h4>
            <input
              placeholder="enter your password"
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
              type="password"
              name="password"
              value={userLogin.password}
              onChange={(e) => changeHandlerLogin(e)}
            ></input>
          </div>

          <button
            className="w-full p-1 bg-purple-600 text-white font-bold rounded-[3px] tracking-wider cursor-pointer"
            onClick={() => loginUserHandle(true)}
          >
            LOGIN
          </button>
          <button
            className="w-full p-1 bg-[#fff] text-gray-500 font-bold border-2 rounded-[3px]  tracking-wider text-sm cursor-pointer"
            onClick={() => loginUserHandle(true)}
          >
            GUEST LOGIN
          </button>
          <div className="flex space-x-1">
            <p className="text-gray-500 ">
              Don't have an account create one{" "}
              <Link to="/signup">
                <span className="text-purple-600 font-[600]">signup</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
