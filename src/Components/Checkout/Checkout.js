import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import MyContext from "../../Utils/Context/MyContext";
import PostHooks from "../../Hooks/PostHooks";
import AuthUser from "../../Hooks/authUser";

const Checkout = () => {
  const { userInfo } = AuthUser();

  const { refresh, setRefresh } = useContext(MyContext);
  const [order, setOrder] = useState(null);
  const [subTotal, setSubTotal] = useState(null);
  const navigate = useNavigate();
  const customerId = userInfo?._id;

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("order"));
    setOrder(items);
    const totalPrice = items?.reduce((acc, cartItem) => {
      return acc + cartItem.price * cartItem.quantity;
    }, 0);
    setSubTotal(totalPrice);
  }, [refresh]);
  useEffect(() => {
    if (!userInfo?.role) {
      navigate("/login");
    }
  }, []);
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const district = e.target.district.value;
    const city = e.target.city.value;
    const state = e.target.state.value;
    const zipCode = e.target.zipCode.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const note = e.target.note.value;
    const address = e.target.address.value;

    const customerDetails = {
      firstName,
      lastName,
      district,
      city,
      state,
      zipCode,
      phone,
      email,
      address,
      note,
    };

    await PostHooks(
      " http://localhost:5000/api/v1/order/postOrder",
      { customerDetails, order, customerId, subTotal },
      "order successfully submitted"
    );
    localStorage.removeItem("order");
    setRefresh(!refresh);
    navigate("/products");

    console.log(customerDetails, order);
  };

  return (
    <div className="container mx-auto p-8  mt-4">
      <div>
        <form onSubmit={handlePlaceOrder}>
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
                    name="firstName"
                    required
                    className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                  />
                </div>
                <div>
                  <label className="text-sm  font-medium">
                    Last name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="border border-gray box-border px-4 py-2 outline-0 w-full"
                  />
                </div>
              </div>
              <div>
                <div className="my-4">
                  <label className="text-sm  font-medium">
                    District<span className="text-primary"> *</span>
                  </label>
                  <select
                    name="district"
                    required
                    className="border text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                  >
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
                    Town / City <span className="text-primary"> *</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                  />
                </div>

                <div className="my-4">
                  <label className="text-sm font-medium">
                    State<span> *</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    id=""
                    className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                  />
                </div>
                <div className="my-4">
                  <label className="text-sm font-medium">
                    Address<span> *</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
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
                    name="zipCode"
                    required
                    className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                  />
                </div>
                <div className="my-4">
                  <label className="text-sm font-medium">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    required
                    className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                  />
                </div>
                <div className="my-4">
                  <label className="text-sm font-medium">
                    Email address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    required
                    className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                  />
                </div>
                <h1 className="text-2xl font-semibold">
                  Additional information
                </h1>
                <div className="my-4">
                  <label className="text-sm font-medium text-blue-gray-500">
                    Order notes (optional)
                  </label>
                  <textarea
                    type="text"
                    name="note"
                    placeholder="Notes about order, e.g special notes for delivery."
                    className="border text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-xl font-medium">Your Order</h1>
              <div className="w-full overflow-x-scroll">
                <table class="w-full mt-2  my-4 uppercase border-collapse border border-slate-500  text-sm text-left text-gray-500 dark:text-gray-400 ">
                  <tbody className="text-center">
                    <tr class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700">
                      <td class="px-6 py-4 border border-gray">Product</td>
                      <td class="px-6 py-4 border border-gray">price</td>
                      <td class="px-6 py-4 border border-gray">Quantity</td>
                      <td class="px-6 py-4 border border-gray">Total</td>
                    </tr>
                    {order?.map((item) => (
                      <tr
                        key={item?._id}
                        item={item}
                        class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td class="px-6 py-4 border border-gray">
                          {item?.genericName}
                        </td>
                        <td class="px-6 py-4 border border-gray">
                          {" "}
                          {item?.price}
                        </td>
                        <td class="px-6 py-4 border border-gray">
                          {" "}
                          {item?.quantity}
                        </td>
                        <td class="px-6 py-4 border border-gray">
                          {item?.price * item?.quantity}
                        </td>
                      </tr>
                    ))}
                    <tr class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700">
                      <td class="px-6 py-4 border border-gray"></td>
                      <td class="px-6 py-4 border border-gray"></td>
                      <td class="px-6 py-4 border border-gray">Subtotal</td>
                      <td class="px-6 py-4 border border-gray">{subTotal}</td>
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
                <button
                  onSubmit={handlePlaceOrder}
                  className="bg-primary text-xs py-4 px-6 my-4 text-white font-medium"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default Checkout;
