import React, { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import districtsData from "../../../src/Components/BangladeshApi/bd.json";

 


const Checkout = () => {


  // const option = district.map((name)=>({
  //   value:name.division_id,
  //   label:name.division_name,

    

  // }));

  // const districtOptions = districtsData.map((district) => (
  //   <option key={district} value={district.name}>
  //     {district.name}
  //   </option>
  // ));

  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   companyName: '',
  //   country: '',
  //   streetAddress: '',
  //   apartment: '',
  //   city: '',
  //   state: '',
  //   zipCode: '',
  //   phone: '',
  //   email: '',
  //   orderNotes: '',
  // });

  const [showPopup, setShowPopup] = useState(false);
  const [orderInfo, setOrderInfo] = useState(null);

  // useEffect(() => {
  //   if (showPopup) {
  //     setTimeout(() => {
  //       setShowPopup(false);
  //       setOrderInfo(null);
  //       history.push('/');
  //     }, 3000); // Redirect after 3 seconds
  //   }
  // }, [showPopup, history]);
  const handlePlaceOrder = () => {
    setShowPopup(true);
    // Place order logic and data saving here
    // ...
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setOrderInfo(null);
  };


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const handlePlaceOrder = () => {
  //   setOrderInfo(formData);
  //   setShowPopup(true);
  //   setFormData({
  //     firstName: '',
  //     lastName: '',
  //     companyName: '',
  //     country: '',
  //     streetAddress: '',
  //     apartment: '',
  //     city: '',
  //     state: '',
  //     zipCode: '',
  //     phone: '',
  //     email: '',
  //     orderNotes: '',
  //   });
  // };


  return (
    <div className="container mx-auto p-8  mt-4">
      <div>
       <form>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h1 className="text-xl font-medium">Billing Details</h1>
            <div className="lg:flex  lg:justify-between lg:items-center my-4">
              <div>
                <label className="text-sm  font-medium">
                  First name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div>
                <label className="text-sm  font-medium">
                  Last name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 py-2 outline-0 w-full"
                />
              </div>
            </div>
            <div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  Company name<span>(optional)</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div className="my-4">
                <label className="text-sm  font-medium">
                  Country / Region<span className="text-primary"> *</span>
                </label>
                <select className="border text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full">
                  <option disabled selected>
                    Choose District
                  </option>
                  <option>Rajshai</option>
                  <option>Dinajpur</option>
                  <option>Rangpur</option>
                  <option>Khulna</option>
                  <option>Sylet</option>
                  <option>Chittagong</option>
                  <option>Brishal</option>
                  <option>dhaka</option>
                </select>
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  Street address<span className="text-primary"> *</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="House number and street name"
                  className="border text-xs border-gray box-border mb-4 px-4 leading-6 py-2 outline-0 w-full"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  className="border text-gray text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  Town / City <span className="text-primary"> *</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  State<span> *</span>
                </label>
                <select className="border text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full">
                  <option disabled selected>
                    Choose District
                  </option>
                  <option>Dhaka</option>
                  <option>Dinajpur</option>
                </select>
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  State<span> *</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  ZIP Code<span className="text-primary"> *</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  Email address <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <h1 className="text-2xl font-semibold">Additional information</h1>
              <div className="my-4">
                <label className="text-sm font-medium text-blue-gray-500">
                  Order notes (optional)
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  placeholder="Notes about order, e.g special notes for delivery."
                  className="border text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-medium">Your Order</h1>
            <div>
              <table class="w-full mt-2  my-4 uppercase border-collapse border border-slate-500  text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody className="text-center">
                  <tr class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4 border border-gray">Product</td>
                    <td class="px-6 py-4 border border-gray">subtotal</td>
                  </tr>
                  <tr class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4 border border-gray">Medicine</td>
                    <td class="px-6 py-4 border border-gray"> BDT-200</td>
                  </tr>
                  <tr class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4 border border-gray">Subtotal</td>
                    <td class="px-6 py-4 border border-gray">BDT-23</td>
                  </tr>
                  <tr class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4 border border-gray">Total</td>
                    <td class="px-6 py-4 border border-gray">BDT-2000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-md text-xs bg-thirdLightPrimary p-4 my-4">
              <p>Cash on delivery</p>
              <p className="my-6 bg-secondLightPrimary py-3 px-3">
                Pay with cash upon delivery
              </p>
              <hr className="text-secondLightPrimary" />
              <button  onClick={handlePlaceOrder} className="bg-primary text-xs py-4 px-6 my-4 text-white font-medium">
                Place order
              </button>
              
        
            </div>
            {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4">Order Placed!</h2>
            <p>Thank you for your order. Your order has been placed successfully.</p>
            <button
              className="bg-primary text-xs py-2 px-4 mt-4 text-white font-medium"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
          </div>
        </div>
       </form>
      </div>
    </div>
    // </div>
  );
};

export default Checkout;
