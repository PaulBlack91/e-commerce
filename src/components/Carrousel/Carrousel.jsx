import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/carrousel/img-1.png";
import Image2 from "../../assets/carrousel/img-2.png";
import Image3 from "../../assets/carrousel/img-3.png";

const imagesData = [
  {
    id: 1,
    img: Image1,
    subtitulo: "Subtitulo 1",
    title: "Titulo 1",
    title2: "Titulo 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    id: 2,
    img: Image2,
    subtitulo: "Subtitulo 2",
    title: "Titulo 1",
    title2: "Titulo 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    id: 2,
    img: Image3,
    subtitulo: "Subtitulo 3",
    title: "Titulo 1",
    title2: "Titulo 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
];

const Carrousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] carrousel-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          {/* Carrousel Section  */}
          <Slider {...settings}>
            {imagesData.map((image) => (
              <div key={image.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section  */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1>{image.subtitulo}</h1>
                    <h1>{image.title}</h1>
                    <h1>{image.title2}</h1>
                    <div>
                      <button>Shop Now</button>
                    </div>
                  </div>
                  {/* Img Section  */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={image.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
