import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import img3 from "../../Assets/dasboard-icon/complete-order.png";
import img2 from "../../Assets/dasboard-icon/pending-order.png";
import img1 from "../../Assets/dasboard-icon/total-order.png";
import img4 from "../../Assets/dasboard-icon/total-selling.png";
import "./Dashboard.css";

// ✅ Fetch Orders Function
const fetchOrders = async () => {
  const response = await fetch(
    "https://server.renixlaboratories.com.bd/api/v1/order/getOrders"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }
  const data = await response.json();
  return data.data; // Extract orders data
};

const AdminDashboardOverview = () => {
  // ✅ Use TanStack Query for Fetching Data
  const {
    data: orders = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (error) {
    toast.error("Error fetching orders. Please try again.");
  }

  // ✅ Filter Orders
  const pending = orders.filter((item) => item.orderStatus === "pending");
  const confirmed = orders.filter((item) => item.orderStatus === "accept");
  const totalSelling = confirmed.reduce(
    (acc, confirm) => acc + confirm.subTotal,
    0
  );

  return (
    <section className="py-8">
      <div className="container w-full md:max-w-6xl px-8">
        {/* ✅ Loading State */}
        {isLoading ? (
          <Box className="flex justify-center items-center h-40">
            <CircularProgress size={50} color="primary" />
          </Box>
        ) : (
          <div className="flex flex-wrap items-center">
            {/* ✅ Dashboard Cards */}
            {[
              {
                title: "Total Order",
                count: orders.length,
                img: img1,
                bg: "bg-[#F0FDF4]",
                iconBg: "bg-[#B0D6D0]",
              },
              {
                title: "Pending Order",
                count: pending.length,
                img: img2,
                bg: "bg-[#F8FFEC]",
                iconBg: "bg-[#D9F99D]",
              },
              {
                title: "Completed Order",
                count: confirmed.length,
                img: img3,
                bg: "bg-[#F4FFEF]",
                iconBg: "bg-[#BBF7D0]",
              },
              {
                title: "Total Selling",
                count: totalSelling,
                img: img4,
                bg: "bg-[#F6F3FF]",
                iconBg: "bg-[#DDD6FE]",
              },
            ].map((item, index) => (
              <div key={index} className="w-full md:w-6/12 lg:w-4/12">
                <div
                  className={`md:mx-3 my-3 shadow-lg shadow-gray-300 gap-5 ${item.bg} rounded-lg flex items-center px-5 py-9`}
                >
                  <div
                    className={`w-[50px] h-[50px] rounded-full flex items-center justify-center ${item.iconBg}`}
                  >
                    <img
                      className="w-[25px] h-[25px]"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-textColor">
                      {item.title}
                    </h3>
                    <span className="text-sm text-lightTextColor">
                      {item.count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboardOverview;
