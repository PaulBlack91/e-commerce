import React from "react";

const ProductsCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}

        {data.map((data) => (
          <div key={data.id}>
            <div className="relative">
              <img src={data.image} alt="" className=" bg-secondary [h-180px] w-[260px] object-cover rounded-md" />

              
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
