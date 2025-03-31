import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Carrousel from "./components/Carrousel/Carrousel";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import { BannerData1, BannerData2 } from "./components/Banner/BannerData";
import { BlogData } from "./components/Blogs/BlogData";
import {CarrouselData} from "./components/Carrousel/CarrouselData";
import PanelDb from "./components/Panel/PanelDb";

const App = () => {
  return (
    <div className=" bg-bgimg bg-cover bg-center bg-no-repeat space-y-0">
      <Navbar />
      <Banner data={BannerData1} />
      <Banner2 data={BannerData2} />
      {/* <Carrousel data={CarrouselData} /> */}
      {/* <Products /> */}
      <PanelDb/>
      <Blogs data={BlogData} />
      <Footer />
    </div>
  );
};

export default App;
