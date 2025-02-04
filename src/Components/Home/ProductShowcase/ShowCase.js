import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowCase = () => {
  // Shuffle the products array to get a random order

  // Select only the first two productsa
  const [products, setProducts] = useState([]);
  // Shuffle the products array to get a random order
  const shuffledProducts = shuffle(products);

  // Select only the first two products
  const randomProducts = shuffledProducts.slice(4, 6);

  useEffect(() => {
    const url = ` https://server.renixlaboratories.com.bd/api/v1/medicine?size=${8}&page=${0}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data?.data);
      });
  }, []);
  return (
    <div className="  bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl uppercase">
                    Latest
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Apart from these popular treatments, Unani medicine is known
                    for its promising results in the treatment of autoimmune
                    disorders such as Psoriasis{" "}
                  </p>
                </header>

                <Link
                  to="https://store.renixlaboratories.com.bd"
                  className="mt-8 inline-block  rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-black transition hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                {randomProducts.map((product) => (
                  <li key={product._id}>
                    <Link
                      to={`/product/${product?.slug}`}
                      className="group block"
                    >
                      <img
                        src={product.img}
                        alt=""
                        className="aspect-square w-80 rounded object-cover"
                      />

                      <div className="mt-3">
                        <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                          {product.name}
                        </h3>

                        {/* <p className="mt-1 text-sm text-gray-700"> ৳ {`${product.price}`}</p> */}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowCase;
