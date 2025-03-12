import React from "react";

const Carrousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,    
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ae-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div>
      <div>
        {/* Carrousel Section  */}
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Carrousel;
