import React from 'react';

function UserProfile() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="https://example.com/profile-image.jpg" alt="Profile" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="md:w-3/4 mt-8 md:mt-0">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="123-456-7890" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="123 Street, City" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Update Profile</button>
            </form>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Order History</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center">
                  <img className="w-16 h-16 rounded-lg mr-4" src="https://example.com/product1.jpg" alt="Product" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Product 1</h4>
                    <p className="text-gray-600">Order date: May 10, 2023</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <img className="w-16 h-16 rounded-lg mr-4" src="https://example.com/product2.jpg" alt="Product" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Product 2</h4>
                    <p className="text-gray-600">Order date: May 8, 2023</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <img className="w-16 h-16 rounded-lg mr-4" src="https://example.com/product3.jpg" alt="Product" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Product 3</h4>
                    <p className="text-gray-600">Order date: May 5, 2023</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Appointment Schedule</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Appointment 1</h4>
                    <p className="text-gray-600">Date: May 15, 2023, Time: 10:00 AM</p>
                  </div>
                  <a href="#" className="ml-4 text-blue-500 hover:text-blue-700">Join Meeting</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Appointment 2</h4>
                    <p className="text-gray-600">Date: May 20, 2023, Time: 2:00 PM</p>
                  </div>
                  <a href="#" className="ml-4 text-blue-500 hover:text-blue-700">Join Meeting</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Purchasing History</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center">
                  <img className="w-16 h-16 rounded-lg mr-4" src="https://example.com/product4.jpg" alt="Product" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Product 4</h4>
                    <p className="text-gray-600">Purchased on: May 10, 2023</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <img className="w-16 h-16 rounded-lg mr-4" src="https://example.com/product5.jpg" alt="Product" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Product 5</h4>
                    <p className="text-gray-600">Purchased on: May 8, 2023</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <img className="w-16 h-16 rounded-lg mr-4" src="https://example.com/product6.jpg" alt="Product" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Product 6</h4>
                    <p className="text-gray-600">Purchased on: May 5, 2023</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
