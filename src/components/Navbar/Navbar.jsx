import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const MenuLinks = [
  { id: 1, title: "Home", link: "/#" },
  { id: 2, title: "Shop", link: "/#shop" },
  { id: 3, title: "About", link: "/#abou" },
  { id: 4, title: "Blogs", link: "/#blog" },
];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and link secion */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-monserrat tracking-widest text-2xl uppercase sm:text-3xl"
            >
              The Bloom Bussines
            </a>

            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-poppins tex-gray-500 hover:text-primary dark:hover:text-white duration-200 "
                    >
                      {" "}
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Navbar Rigth section  */}
          <div className="flex justiy-between items-center gap-4">
            {/* Search Bar secion  */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-secondary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Cart Icon secion  */}
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600dark:text-gray-400"/>
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">4</div>
            </button>

            {/* Dark mode secion  */}
            <div>
                <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
