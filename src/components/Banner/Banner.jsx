import React from "react";
import bannerIMG from "../../assets/Banner/bannerEP.png";
import Button from "../Shared/Button";

const Banner = () => {
  const BannerData = {
    dicount: "30% OFF",
    title: "SALE",
    date: "2022-12-31",
    image: bannerIMG,
    title2: "Sale",
    title3: "Sale",
    title4: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    button: "Shop Now",
    bgColor: "bg-btn-gradient",
  };

  return (
    <div
      {...BannerData}
      className="min-h-[550px]  flex justify-center items-center py-12  "
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bgColor: bg-btn-gradient ">
          {/* {first column} */}
          <div className="p-6 sm:p-8">
            <p className="text-sm">{BannerData.dicount}</p>
            <h1 className="uppercase text-4xl lg:text-7xl font-bold">
              {BannerData.title}
            </h1>
            <p className="text-sm">{BannerData.date}</p>
          </div>
          {/* {second column} */}
          <div className=" h-full flex items-center">
            <img
              src={BannerData.image}
              alt=""
              className="scale-95  mx-auto object-cover rounded-3xl drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
          {/* {third column} */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p className="font-bold text-xl">{BannerData.title2}</p>
            <p className="text-3xl sm:text-5xl font-bold">
              {BannerData.title3}
            </p>
            <p className="text-sm tracking-wide leading-5">
              {BannerData.title4}
            </p>

            <div>
              <Button
                className="py-2 px-4 rounded"
                text="Shop Now"
                bgColor="bg-btn-gradient"
                textColor="text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
