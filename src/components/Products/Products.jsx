import React from "react";
import Header from "../Shared/Header";
import ProductCard from "../Products/ProductsCard.jsx";
import Img1 from "../../assets/Products/2.png";
import Img2 from "../../assets/Products/3.png";
import Img3 from "../../assets/Products/4.png";
import Img4 from "../../assets/Products/5.png";
import Img5 from "../../assets/Products/6.png";
import Img6 from "../../assets/Products/7.png";
import Img7 from "../../assets/Products/8.png";
import Img8 from "../../assets/Products/9.png";


const ProductsData = [
    {
      id: 1,
      image: Img1,
      title: "Producto 1",
      description: "Descripción del producto 1",
      price: 100,
      aosDelay: 0,
    },
    {
      id: 2,
      image: Img2,
      title: "Producto 2",
      description: "Descripción del producto 2",
      price: 120,
      aosDelay: 200,
    },
    {
      id: 3,
      image: Img3,
      title: "Producto 3",
      description: "Descripción del producto 3",
      price: 140,
      aosDelay: 400,
    },
    {
      id: 4,
      image: Img4,
      title: "Producto 4",
      description: "Descripción del producto 4",
      price: 160,
      aosDelay: 600,
    },
    {
      id: 5,
      image: Img5,
      title: "Producto 5",
      description: "Descripción del producto 5",
      price: 180,
      aosDelay: 800,
    },
    {
      id: 6,
      image: Img6,
      title: "Producto 6",
      description: "Descripción del producto 6",
      price: 200,
      aosDelay: 1000,
    },
    {
      id: 7,
      image: Img7,
      title: "Producto 7",
      description: "Descripción del producto 7",
      price: 220,
      aosDelay: 1200,
    },
    {
      id: 8,
      image: Img8,
      title: "Producto 8",
      description: "Descripción del producto 8",
      price: 240,
      aosDelay: 1400,
    },
  ];
  

  

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <Header title="Productos" subtitle="Nuestros productos" />
        {/* Body section  */}
        <ProductCard data={ProductsData}/>
      </div>
    </div>
  );
};

export default Products;
