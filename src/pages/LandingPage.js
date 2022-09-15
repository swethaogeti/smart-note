import React from "react";
import { Link } from "react-router-dom";
import smartnoteImg from "../assests/heroImg.svg";
import { useAuth } from "../contexts/AuthProvider";

export const LandingPage = () => {
  const { user } = useAuth();

  return (
    <div className="xl:w-[80%] mx-auto p-4">
      <div className="flex flex-wrap lg:flex-nowrap  justify-between ">
        <div className="flex flex-col items- start justify-center   max-w-full   p-2 mx-auto">
          <h1 className="sm:text-[4rem] text-[2.5rem] font-bold text-purple-500">
            Smart Notes
          </h1>
          <h2 className=" sm:text-[2.7rem] font-bold text-[2rem] text-gray-700 sm:leading-tight">
            Organize your notes and tasks all in one place.
          </h2>
          <i className=" sm:text-[1.1rem] font-[500] text-gray-600 pt-4 ">
            A place for everything and everything in its place!
          </i>

          {user.user ? (
            <div>
              <Link to="/notes">
                <button
                  className="bg-gray-700
               text-white text-[1.3rem] px-5 py-1 rounded-md  my-4
             font-[600]"
                >
                  Go TO NOTES
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button
                  className="bg-gray-700
               text-white text-[1.3rem] px-5 py-1 rounded-md  my-4
             font-[600]"
                >
                  Join Now
                </button>
              </Link>
            </div>
          )}
        </div>
        <img src={smartnoteImg} className="w-full sm:w-[600px] mx-auto"></img>
      </div>
    </div>
  );
};
