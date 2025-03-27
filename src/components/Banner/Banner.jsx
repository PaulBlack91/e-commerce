import React from "react";

import Button from "../Shared/Button";

const Banner = ({data}) => {
  

  return (
    <div
  
      className="min-h-[550px]  flex justify-center items-center py-12 mt-10 "
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bgColor: bg-btn-gradient ">
          {/* {first column} */}
          <div className="p-6 sm:p-8">
            {/* <p className="text-sm">{data.dicount}</p> */}
            <h1 className="uppercase text-4xl lg:text-5xl font-bold">
              {data.title}
            </h1>
            {/* <p className="text-sm">{data.date}</p> */}
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
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p className="font-bold text-3xl">{data.title2}</p>
            {/* <p className="text-3xl sm:text-5xl font-bold">
              {data.title3}
            </p> */}
            {/* <p className="text-sm tracking-wide leading-5">
              {data.title4}
            </p> */}

            <div>
              <Button
                className="py-2 px-4 rounded-full"
                text="Ordenar ahora"
                bgColor="bg-brandwhite"
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
