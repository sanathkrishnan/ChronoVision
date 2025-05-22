import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../components/Navbar';
import { Link, Navigate } from 'react-router-dom';

const RequestAccessForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [branch, setBranch] = useState('');
  const [camera, setCamera] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle request
    console.log({ branch, selectedDate, camera, startTime, endTime });
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center min-h-screen bg-[url(home.svg)] bg-center bg-cover">
        <Navbar />
      <form
        onSubmit={handleSubmit}
        className="bg-[#B6D7D2] p-8 h-2/3 rounded-3xl  mt-auto mb-auto shadow-md w-1/3"
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Filter By</label>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full bg-white p-2 border mb-8 rounded-xl"
          >
            <option value="">Select Branch</option>
            <option value="branch1">Branch 1</option>
            <option value="branch2">Branch 2</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Select Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="w-full p-2 bg-white border mb-8 rounded-xl"
            dateFormat="MMMM d, yyyy"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Camera Name</label>
          <select
            value={camera}
            onChange={(e) => setCamera(e.target.value)}
            className="w-full mb-8 p-2 border bg-white rounded-xl"
          >
            <option value="">Select Camera</option>
            <option value="cam1">Camera 1</option>
            <option value="cam2">Camera 2</option>
          </select>
        </div>

        <div className="mb-4 flex gap-2">
          <div className="flex-1">
            <label className="block mb-1 font-semibold">From</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-2 border rounded-xl bg-white"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-semibold">To</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-2 border bg-white rounded"
            />
          </div>
        </div>
        <Link to={"/camerafeed"}>
        <button
          type="submit"
          className="w-full bg-blue-600 mt-8 text-white font-semibold py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Request Access
        </button>
        </Link>
      </form>
    </div>
  );
};

export default RequestAccessForm;