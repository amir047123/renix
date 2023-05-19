import React from 'react';

const Appointments = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Appointment Page Under Construction</h1>
      <p className="text-xl text-gray-600">We apologize for the inconvenience!</p>
      <p className="text-xl text-gray-600">
        Our appointment booking system is currently under construction, <br></br>but we're working hard to get it up and running as
        soon as possible.
      </p>
      <p className="text-xl text-gray-600">We appreciate your patience and understanding.</p>
      <img
        src="https://t3.ftcdn.net/jpg/03/53/83/92/360_F_353839266_8yqhN0548cGxrl4VOxngsiJzDgrDHxjG.jpg" // Replace with your image source
        alt="Under Construction"
        className="mt-8 rounded-lg shadow-lg"
        style={{ width: '400px', height: 'auto' }}
      />
      <p className="text-gray-500 mt-4">"Powered by Renix" is a common way to acknowledge the involvement of Renix Consulting in the development or support of a project.</p>
      <p className="text-xl font-semibold text-blue-500 mt-8">We'll be live soon!</p>
    </div>
  );
};

export default Appointments;
