import React from "react";
import Button from "../Shared/Button";

const ProductsCard = ({ data }) => {
  return (
    <div className="mb-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}

        {data.map((data) => (
          <div className="group" key={data.id}>
            <div className="relative">
              <img
                src={data.image}
                alt=""
                className=" bg-secondary dark:bg-slate-900 [h-180px] w-[260px] object-cover rounded-md"
              />

              {/* hover button  */}

              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                <Button
                  text="Add to Cart"
                  bgColor="bg-primary"
                  textColor="text-black"
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-bold">{data.title}</h2>
              <h2 className="font-bold">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
