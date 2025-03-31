import React from "react";
import Button from "../Shared/Button";
import { FaCartShopping } from "react-icons/fa6";

const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px]  flex justify-center items-center py-12 mt-10 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-black rounded-3xl bg-rosabanner bg-opacity-30 backdrop-blur-sm shadow-lg ">
          {/* {first column} */}
          <div className="p-6 sm:p-8">
            <h1 className="text-4xl lg:text-5xl font-georgia italic text-gray-800 ">
              {data.title}
            </h1>
          </div>

          <div className="text-center justify-center  p-3 ">
            <p className="font-sans italic text-xl text-gray-900">
              {data.title2}
            </p>
          </div>
          {/* {second column} */}
          <div className=" h-full flex items-center">
            <img
              src={data.image}
              alt=""
              className="scale-95  mx-auto object-cover rounded-3xl drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
          {/* {third column} */}
          <div className="flex flex-col justify-center items-center gap-4 p-6 sm:p-8">
            <div className=" gap-x-2 text-2xl font-bold">
              <Button
                className="py-2 px-4 rounded-full flex items-center gap-2"
                bgColor="bg-btn-shopnow"
                textColor="text-white"
              >
                <FaCartShopping className="mr-2" />
                {" "}
                
                 ORDENAR AHORA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
