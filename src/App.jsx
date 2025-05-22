
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RequestAccessForm from './pages/RequestAccess';
import CameraFeed from './pages/CameraFeed';
import React from 'react';
import LoginPage from './pages/LoginPage';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import ManageUsers from './pages/ManageUsers';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/requestaccess" element={<RequestAccessForm />} />
        <Route path="/camerafeed" element={<CameraFeed />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/dashboard/manageusers" element={<ManageUsers/>}/>
      </Routes>
    </>
  );
};

export default App;