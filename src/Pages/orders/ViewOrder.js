import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../shared/Loading";
import { server_url } from "../../Config/API";

const ViewOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = `${server_url}/order/getOrderById/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data?.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  console.log(order);
  return (
    <div>
      {order ? (
        <div>
          <div className="page-view">
            <div className="container mx-auto px-4">
              <div className="card mb-3">
                <div className="card-header">
                  <h1 className="card-title text-xl font-bold">
                    Order Details
                  </h1>
                </div>
                <div className="border-t border-gray-300 my-4"></div>
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <h5 className="text-primary">Product Name</h5>
                        <p>{order?.order[0].name}</p>
                      </div>
                      <div className="col-md-4">
                        <h5 className="text-primary">Strength</h5>
                        <p>{order?.order[0]?.strength}</p>
                      </div>
                      <div className="col-md-4">
                        <h5 className="text-primary">Quantity</h5>
                        <p>{order?.order[0]?.quantity}</p>
                      </div>
                      <div className="col-md-4">
                        <h5 className="text-primary">Payable Amount</h5>
                        <p>{order?.subTotal} BDT</p>
                      </div>
                      <div className="col-md-4">
                        <h5 className="text-primary">Order Status</h5>
                        <p>{order?.orderStatus}</p>
                      </div>

                      <div className="card-header mt-5">
                        <h1 className="card-title text-xl font-bold">
                          Customer Details
                        </h1>
                      </div>
                      <div className="border-t border-gray-300 my-4"></div>
                      <div className="col-md-4">
                        <h5 className="text-primary">Name</h5>
                        <p>
                          {order?.customerDetails?.firstName}{" "}
                          {order?.customerDetails.lastName}
                        </p>
                      </div>
                      <div className="col-md-4">
                        <h5 className="text-primary">Phone</h5>
                        <p>{order?.customerDetails?.phone} </p>
                      </div>
                      <div className="col-md-4">
                        <h5 className="text-primary">Division</h5>
                        <p>{order?.customerDetails?.division} </p>
                      </div>

                      <div className="col-md-4">
                        <h5 className="text-primary">District</h5>
                        <p>{order?.customerDetails?.district} </p>
                      </div>

                      <div className="col-md-4">
                        <h5 className="text-primary">Upazila</h5>
                        <p>{order?.customerDetails?.upazila} </p>
                      </div>

                      <div className="col-md-4">
                        <h5 className="text-primary">Address</h5>
                        <p>{order?.customerDetails?.address} </p>
                      </div>
                      <div className="col-md-4">
                        <h5 className="text-primary">Additional Note</h5>
                        <p>{order?.customerDetails?.note} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Order not found</p>
      )}
    </div>
  );
};

export default ViewOrder;
