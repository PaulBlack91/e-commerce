import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Shop",
    link: "/#shop",
  },
  {
    title: "Blogs",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-50">
          {/* company detail*/}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold text-2xl tracking-widest uppercase sm:text-3xl"
            >
              ESHOP
            </a>

            <p className="text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              eius accusamus non asperiores
            </p>
            <p className="text-gray-500 mt-4">
              Made with 💖 by The Coding Journey
            </p>
            <a
              href="https://www.youtube.com/watch?v=HcCVAWs8Mx8&ab_channel=THEBLOOMBUSINESS"
              target="_blank"
              className="inline-block bg-primary text-white rounded-full py-2 px-4 mt-4 text-sm"
            >
              Curso por dentro
            </a>
          </div>

          {/* Footer Links  */}

          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 dark:text-white">
                Importants Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="text-gray-600 hover:dark:text-white hover:text-black duration-300 "
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links  */}

            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 dark:text-white">
                Importants Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="text-gray-600 hover:dark:text-white hover:text-black duration-300 "
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Adreess and contact */}

            <div className="py-8 px-4 col-span-1 sm:col-auto">
            <h1 className="text-xl font-bold sm:text-left mb-3 dark:text-white">
                Address
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-xl text-gray-600 dark:text-gray-400" />
                  <p> Córdoba, Argentina </p>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt className="text-xl text-gray-600 dark:text-gray-400" />
                  <p> +549 3513480303</p>
                </div>
              </div>
            

            {/* social links  */}

            <div className="flex items-center gap-3 mt-6">
            <a href="#" >
              <FaInstagram className="text-3xl hover:text-primary duration-200"/>
            </a>
            <a href="#" >
              <FaFacebook className="text-3xl hover:text-primary duration-200"/>
            </a>
            <a href="#" >
              <FaTiktok className="text-3xl hover:text-primary duration-200"/>
            </a>



            </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
