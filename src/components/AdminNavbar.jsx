import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="bg-[#028BD3] text-white flex justify-between w-screen  items-center px-6 py-3">
      <div className="flex items-center space-x-3">
        <img src="/muthoot 13.svg" alt="logo" className="w-[70px] h-[78px] mr-3" />
        <span className="text-xl font-semibold">Chrono Vision</span>
      </div>
      <Link to={"/adminlogin"}>     
       <button className="bg-[#028BD3] text-white px-4 py-1 rounded hover:bg-blue-470">
        Log out
      </button>
      </Link>
    </nav>
  );
};

export default AdminNavbar;