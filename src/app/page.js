"use client";
import Blog from "./components/Blog";
import Categorie from "./components/Categorie";
import Customer from "./components/Customer";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Slider from "./components/Slider";
import TopNavbar from "./components/TopNavbar";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <TopNavbar />
      <Slider/>
      <Product />
      <Deals/>
      <Categorie/>
      <Customer/>
      <Blog/>
      <Footer/>
    </div>
  );
}
