import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

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
    <div className="container">
      <div className="grid md:grid-cols-3 pb-20 pt-50">
        {/* company detail*/}
        <div className="py-8 px-4">
          <a
            href="#"
            className="text-primary font-semibold text-2xl uppercase sm:text-3xl"
          >
            ESHOP
          </a>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            eius accusamus non asperiores
          </p>
          <p>Made with 💖 by The Coding Journey</p>
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
            <h1 className="text-xl font-bold mb-3">Importants Links</h1>
            <ul className="space-y-3">
              {FooterLinks.map((link) => (
                <li>
                  <a
                    href={link.link}
                    className="text-gray-600 hover:text-black duration-300 "
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links  */}

          <div className="py-8 px-4">
            <h1 className="text-xl font-bold mb-3">Quick Links</h1>
            <ul className="space-y-3">
              {FooterLinks.map((link) => (
                <li>
                  <a
                    href={link.link}
                    className="text-gray-600 hover:text-black duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Adreess and contact */}

          <div className="py-8 px-4">
            <h1 className="text-xl font-bold mb-3">Dirección</h1>
            <div>
              <FaLocationArrow className="text-xl text-gray-600dark:text-gray-400"  />
            </div>

            <div>
              <FaMobileAlt className="text-xl text-gray-600dark:text-gray-400"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
