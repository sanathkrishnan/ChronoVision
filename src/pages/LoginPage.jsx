import { Link, Navigate } from "react-router-dom";
import React from "react";
export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen bg-[#F3FBFF]">
      {/* Navbar with Logo Image */}
      <nav className="bg-[#028BD3] text-white flex justify-between w-screen  items-center px-6 py-3">
           <div className="flex items-center space-x-3">
             <img src="/muthoot 13.svg" alt="logo" className="w-[70px] h-[75px] mr-3" />
             <span className="text-xl font-semibold">Chrono Vision</span>
           </div>
         </nav>

      {/* Your Original Login Page Code (100% Unchanged) */}
      <div className="lg flex flex-row h-screen bg-[#F3FBFF] p-[400px]">
        {/* Left Side - Logo & Text */}
        <div className="w-[800px] flex flex-col justify-center items-end bg-[#F3FBFF] ">
          <img
            src="Frame 1011.svg"
            alt="Chrono Vision Logo"
            className="w-[800px] h-[800px] mr-[40px] mb-[140px]"
          />
        </div>
        
        {/* Right Side - Login Form */}
        <div className="w-[600px]  flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-[#c2dedc] rounded-3xl pt-[100px] p-10 shadow-">
            <h2 className="text-white h-[70px] bg-gradient-to-r from-[#0f2d47] to-[#1a6091] py-[15px] text-center mb-[60px] text-xl font-semibold rounded-full">
              Login
            </h2>
            <input
              type="email"
              placeholder="E-Mail ID"
              className="w-full bg-white h-[70px] px-4 py-2 mb-[60px] rounded-lg focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white h-[70px] px-4 py-2 mb-[60px] rounded-lg focus:outline-none"
            />
            <Link to={"/requestaccess"}>
            <button className="w-[400px] ml-[65px] bg-[#1a87d7] hover:bg-[#1578c5] h-[60px] text-white px-4 py-2 rounded-lg transition-all duration-300">
              Login
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}