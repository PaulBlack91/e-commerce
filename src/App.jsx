import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Carrousel from "./components/Carrousel/Carrousel";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import { BannerData1, BannerData2 } from "./components/Banner/BannerData";
import { BlogData } from "./components/Blogs/BlogData";
import {CarrouselData} from "./components/Carrousel/CarrouselData";

const App = () => {
  return (
    <div className="min-h-screen bg-bgimg bg-cover bg-center bg-no-repeat">
      <Navbar />
      <Banner data={BannerData1} />
      {/* <Banner data={BannerData2} /> */}
      <Carrousel data={CarrouselData} />
      {/* <Products /> */}
      <Blogs data={BlogData} />
      <Footer />
    </div>
  );
};

export default App;
