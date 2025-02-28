import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Location from "../../Components/Bangladesh Location/location.json";
import PostHooks from "../../Hooks/PostHooks";
import AuthUser from "../../Hooks/authUser";
import MyContext from "../../Utils/Context/MyContext";
import { server_url } from "../../Config/API";
const Checkout = () => {
  const { userInfo } = AuthUser();
  const [division, setDivision] = useState("");
  const { refresh, setRefresh } = useContext(MyContext);
  const [order, setOrder] = useState(null);
  const [subTotal, setSubTotal] = useState(null);
  const navigate = useNavigate();
  const customerId = userInfo?._id;
  const [shipping, setShipping] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch(`http://localhost:3001/api/v1/shipping/getShippings`)
=======
    fetch(`${server_url}/shipping/getShippings`)
>>>>>>> 47bb5cedf53f5587c42b72757c4a2d7953614036
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setShipping(data?.data[0]);
        }
      });
  }, []);
  const deliveryCharge =
    division === "ঢাকা" ? shipping?.insideDhaka : shipping?.outsideDhaka;
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("order"));
    setOrder(items);
    const totalPrice = items?.reduce((acc, cartItem) => {
      return (
        acc +
        (cartItem?.price -
          (cartItem.price * (cartItem?.discount ? cartItem.discount : 0)) /
            100) *
          cartItem.quantity
      );
    }, 0);
    setSubTotal(totalPrice + deliveryCharge);
  }, [refresh, deliveryCharge]);
  // useEffect(() => {
  //   if (!userInfo?.role) {
  //     navigate("/login");
  //   }
  // }, []);
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const district = e.target.district.value;
    const division = e.target.division.value;
    const upazila = e.target.upazila.value;

    const phone = e.target.phone.value;
    const note = e.target.note.value;
    const address = e.target.address.value;

    const customerDetails = {
      firstName,
      lastName,
      division,
      district,
      upazila,
      phone,
      address,
      note,
    };

    await PostHooks(
<<<<<<< HEAD
      "http://localhost:3001/api/v1/order/addOrder",
=======
      `${server_url}/order/addOrder`,
>>>>>>> 47bb5cedf53f5587c42b72757c4a2d7953614036
      { customerDetails, order, customerId, subTotal },
      "order successfully submitted"
    );
    localStorage.removeItem("order");
    setRefresh(!refresh);
    navigate("/products");
  };

  return (
    <div className="container mx-auto p-8  mt-4">
      <div>
        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h1 className="text-xl font-medium">Billing Details</h1>
              <div className="lg:flex gap-2  lg:justify-between lg:items-center my-4">
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
                    Division<span className="text-primary"> *</span>
                  </label>
                  <select
                    name="division"
                    onChange={(e) => setDivision(e.target.value)}
                    required
                    className="border text-xs border-gray bg-white box-border px-4 leading-6 py-2 outline-0 w-full"
                  >
                    <option value="" disabled selected>
                      Select
                    </option>
                    {Location.divisions.map((division, index) => (
                      <option key={index}>{division.bn_name}</option>
                    ))}
                  </select>
                </div>

                <div className="my-4">
                  <label className="text-sm  font-medium">
                    District<span className="text-primary"> *</span>
                  </label>
                  <select
                    name="district"
                    required
                    className="border text-xs border-gray bg-white box-border px-4 leading-6 py-2 outline-0 w-full"
                  >
                    <option value="" disabled selected>
                      Select
                    </option>
                    {Location.districts.map((district, index) => (
                      <option key={index}>{district.bn_name}</option>
                    ))}
                  </select>
                </div>

                <div className="my-4">
                  <label className="text-sm  font-medium">
                    Upazila<span className="text-primary"> *</span>
                  </label>
                  <select
                    name="upazila"
                    required
                    className="border text-xs border-gray bg-white box-border px-4 leading-6 py-2 outline-0 w-full"
                  >
                    <option value="" disabled selected>
                      Select
                    </option>
                    {Location.upazilas.map((upazilas, index) => (
                      <option key={index}>{upazilas.bn_name}</option>
                    ))}
                  </select>
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
                    Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
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
                      <td class="px-6 py-4 border border-gray">discount</td>
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
                          {" "}
                          {item?.discount ? item?.discount : 0}%
                        </td>
                        <td class="px-6 py-4 border border-gray">
                          {(item?.price -
                            (item?.price *
                              (item?.discount ? item?.discount : 0)) /
                              100) *
                            item?.quantity}{" "}
                          BDT
                        </td>
                      </tr>
                    ))}
                    <tr class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700">
                      <td class="px-6 py-4 border border-gray"></td>
                      <td class="px-6 py-4 border border-gray"></td>
                      <td class="px-6 py-4 border border-gray"></td>
                      <td class="px-6 py-4 border border-gray">
                        delivery Charge
                      </td>
                      <td class="px-6 py-4 border border-gray">
                        {deliveryCharge} BDT
                      </td>
                    </tr>
                    <tr class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700">
                      <td class="px-6 py-4 border border-gray"></td>
                      <td class="px-6 py-4 border border-gray"></td>
                      <td class="px-6 py-4 border border-gray"></td>
                      <td class="px-6 py-4 border border-gray">Subtotal</td>
                      <td class="px-6 py-4 border border-gray">
                        {subTotal} BDT
                      </td>
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
