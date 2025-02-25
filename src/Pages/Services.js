import React, { useEffect, useState } from "react";
import DynamicMetaTitle from "../Components/DynamicMetaTitle";
import useGetSeo from "../Hooks/useGetSeo";

const Services = () => {
  const metaData = useGetSeo("security_page");
  const [code, setCode] = useState("");
  const [product, setProduct] = useState([]);
  const [verifyMedicine, setVerifyMedicine] = useState(null);
  const handelSecurity = (e) => {
    e.preventDefault();
    const value = e.target.code.value;
    setCode(value);
  };

  useEffect(() => {
    const url = `https://server.renixlaboratories.com.bd/api/v1/medicine`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data?.data);
      });
  }, []);

  useEffect(() => {
    const findMedicine = product?.find(
      (medicine) => medicine?.securityCode === code
    );
    setVerifyMedicine(findMedicine);
  }, [code, product]);
  const des = verifyMedicine?.description
    ?.replace(/<\/?p>/g, "")
    ?.slice(0, 150);
  return (
    <section className="lg:w-[90%] mx-auto">
      <DynamicMetaTitle
        title={metaData?.metaTitle}
        metaImage={metaData?.metaImage}
        description={metaData?.metaDescription}
      />
      <div className="w-full md:p-14 p-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="">
          <h3 className="uppercase py-8 font-semibold underline underline-offset-8 decoration-2">
            Verify Medicine Security Code
          </h3>
          <form onSubmit={handelSecurity}>
            <div>
              <h5 className="py-2 font-semibold">
                Security Code <span className="text-red-500">*</span>
              </h5>
              <input
                type="text"
                name="code"
                className="mt-2 px-3 py-3 border-2 bg-whiteSmoke shadow-sm focus:outline border-whiteSmoke bg-transparent placeholder-slate-400  block w-auto  sm:text-sm rounded-md"
                required
                placeholder="Security code"
              ></input>
            </div>
            <div className="py-8">
              <button
                type="submit"
                className="bg-primary p-2 rounded-md text-white lg:w-[120px]  uppercase block"
              >
                Verify
              </button>
            </div>
          </form>
        </div>
        <div>
          <h3 className="uppercase py-8 font-semibold underline underline-offset-8 decoration-2">
            Security check Information
          </h3>
          {verifyMedicine ? (
            <div className="w-xs md:w-sm lg:w-md p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
              <img
                src={verifyMedicine?.img}
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                  {verifyMedicine?.medicineCategory}
                </span>
                <h2 className="text-xl font-semibold tracking-wide">
                  {verifyMedicine?.genericName}
                </h2>
              </div>
              <p
                dangerouslySetInnerHTML={{ __html: des }}
                className="dark:text-gray-100"
              ></p>
            </div>
          ) : (
            <p className="py-2">Please Enter Your Security Code.!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
