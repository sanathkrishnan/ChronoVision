import React from "react";
import Navbar from "../components/Navbar";

const CameraFeed = () => {
  return (
    <div className="h-screen w-screen bg-blue-50">
      <Navbar />

      <div className="w-3/4 h-230 mx-auto mt-10 p-6 bg-[#B6D7D2] rounded-3xl shadow-md">
        <h2 className="text-lg text-gray-700 font-medium mb-4">
          Feed from selected camera
        </h2>

        <div className="bg-gray-100 border border-gray-300 rounded-3xl  h-204 ">
          <video
            controls
            className="h-204 bg-gray-200 rounded-3xl "
            poster="/thumbnail.png" // Optional thumbnail
          >
            <source src="/samplevideo.Mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default CameraFeed;