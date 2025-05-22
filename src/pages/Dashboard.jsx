import React from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom"; // Only if routing is enabled
import AdminNavbar from "../components/AdminNavbar";

const Dashboard = () => {
  const navigate = useNavigate(); // Hook from react-router-dom

  return (
    <div className="min-h-screen bg-[#F3FBFF]">
      <AdminNavbar />
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-bold bg-[#F3FBFF] px-6 py-2 rounded  mb-10">
          Dashboard
        </h2>
        <div className="flex space-x-8">
            <Link to={"/dashboard/manageusers"}>
          <button
            className="bg-gradient-to-b from-blue-500 to-blue-900 text-white font-semibold rounded-lg w-96 h-96 flex items-center mt-32 mr-8 justify-center text-xl shadow-md hover:scale-105 transition-transform"
          >
            Manage Users
          </button>
          </Link>
          <button
            className="bg-gradient-to-b from-blue-500 to-blue-900 text-white font-semibold rounded-lg w-96 h-96 flex items-center mt-32 ml-8 justify-center text-xl shadow-md hover:scale-105 transition-transform"
          >
            Manage Requests
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;