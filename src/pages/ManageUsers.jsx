import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const ManageUsers = () => {
  const [users, setUsers] = useState([]); // Replace with fetched data
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    branch: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Fetch data from DB (mocked for now)
    setUsers([
      { id: "#20462", name: "Jreeram", branch: "Chennai" },
      { id: "#18933", name: "Somesh", branch: "Wiktoria" },
      { id: "#45169", name: "Lalan", branch: "Mumbai" },
      // add more as needed
    ]);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = () => {
    // Push to DB logic here
    setUsers([...users, { ...newUser, id: `#${Date.now()}` }]);
    setNewUser({ name: "", branch: "", email: "", password: "" });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F4FAFC]">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Manage Users</h2>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded border border-gray-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="px-4 py-2 bg-white rounded border border-gray-400 font-semibold">
              Search
            </button>
          </div>
          <button
            className="px-4 py-2 bg-white rounded border border-gray-400 font-semibold"
            onClick={() => setShowModal(true)}
          >
            Add User
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">Employee ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Branch Location</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                >
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.branch}</td>
                  <td className="px-6 py-4 flex space-x-3">
                    <button className="text-purple-600 hover:underline">
                      &#9998;
                    </button>
                    <button className="text-red-600 hover:underline">
                      &#128465;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && (
          <div className=" shadow-lg fixed inset-0  bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-[#FFFFFF] p-6 rounded-2xl w-128 h-112">
              <h2 className="text-xl font-bold mb-4 text-center">Add User</h2>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-2xl bg-gray-100 mb-6"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Branch Name"
                  className="w-full px-4 py-2 rounded -2xl bg-gray-100 mb-6"
                  value={newUser.branch}
                  onChange={(e) =>
                    setNewUser({ ...newUser, branch: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded -2xl bg-gray-100 mb-6"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 rounded -2xl bg-gray-100 mb-6"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
                <button
                  onClick={handleAddUser}
                  className="w-full bg-blue-600 text-white py-2 rounded mt-6 hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;