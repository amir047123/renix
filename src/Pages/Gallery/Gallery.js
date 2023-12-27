import React from "react";
import img1 from "../../Assets/images/Products/01. Syrup Cold Free.webp";
import img2 from "../../Assets/images/Products/02. Apelon Syrup.webp";
import img3 from "../../Assets/images/Products/03. Syrup R-Reniton.webp";
import img4 from "../../Assets/images/Products/06. Syrup Allshifa.webp";
import img5 from "../../Assets/images/Products/10.  Tablet Dyman.webp";
import img6 from "../../Assets/images/Products/10. Syrup R-Kuli.webp";

const Gallery = () => {
  return (
    <div>
      <div className=" text-center text-2xl p-2 ">
        <p className=" text-primary font-semibold">Our Gallery</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 sm:grid sm:grid-cols-1 m-5 ">
        <div className=" border">
          <img class="h-auto max-w-full rounded-lg" src={img1} alt=""></img>
        </div>
        <div className=" border">
          <img class="h-auto max-w-full rounded-lg" src={img2} alt=""></img>
        </div>
        <div className=" border">
          <img class="h-auto max-w-full rounded-lg" src={img3} alt=""></img>
        </div>

        <div className=" border">
          <img class="h-auto max-w-full rounded-lg" src={img4} alt=""></img>
        </div>
        <div className=" border">
          <img class="h-auto max-w-full rounded-lg" src={img5} alt=""></img>
        </div>
        <div className=" border">
          <img class="h-auto max-w-full rounded-lg" src={img6} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
