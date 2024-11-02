import React from "react";

function Appointment() {
  return (
    <main className="py-10 font-serif bg-white">
      {/* Head */}
      <div className="flex flex-col space-y-5 p-5 text-center">
        <p className="text-lg font-bold hover:underline text-teal-800">Locate a Health Hub Near You</p>
        <p className="text-4xl font-bold hover:underline text-gray-800">Pakistan's Most Convenient Medical Centers</p>
        <p className="text-lg text-gray-800">
          We are proud to serve you at multiple locations throughout Karachi,
          Lahore, and Islamabad, and across Pakistan. Our commitment to
          accessibility ensures that your healthcare needs are always within
          reach.
        </p>
      </div>
      {/* button */}
      <div className="flex flex-col space-y-4">
        <p className="text-2xl text-center font-bold text-teal-800">
        I'm looking for a dentist in...
        </p>
        <span className="flex space-x-5 justify-center">
          <button className="text-base p-4 font-bold rounded-tl-lg rounded-br-lg w-44 hover:text-white hover:bg-black bg-teal-400 text-gray-800">Punjab</button>
          <button className="text-base p-4 font-bold rounded-tl-lg rounded-br-lg w-44 hover:text-white hover:bg-black bg-gray-700 text-teal-400">Sindh</button>
        </span>
      </div>
    </main>
  );
}

export default Appointment;
