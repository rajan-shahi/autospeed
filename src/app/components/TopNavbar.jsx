"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import sale from "../assets/sale.png";
import { IoIosSearch } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const TopNavbar = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className=" md:flex hidden justify-center md:py-6 ">
        <div className="  flex justify-between  w-full md:w-10/12">
          <div className=" flex  items-center">
            <Image alt="img" className=" pr-5" height={60} src={logo}></Image>
            <div className=" flex w-[550px] items-center justify-between border-2 rounded-l-full border-orange-400 py-3 px-5">
              <input
                className=" bg-transparent outline-none"
                type="text"
                placeholder="Search"
              />
              <select
                className=" flex  bg-transparent outline-none border-l border-gray-400 pl-4"
                name=""
                id=""
              >
                <option value="">Categories</option>
                <option className=" text-xl" value="electrical">
                  electrical
                </option>
                <option value="riceshaw">riceshaw</option>
                <option value="Toy car">toy car</option>
                <option value="truck">truck</option>
                <option value="scooter">scooter</option>
                <option value="">Categories</option>
                <option value="electrical">electrical</option>
                <option value="riceshaw">riceshaw</option>
                <option value="Toy car">toy car</option>
                <option value="truck">truck</option>
                <option value="scooter">scooter</option>
                <option value="">Categories</option>
                <option value="electrical">electrical</option>
                <option value="riceshaw">riceshaw</option>
                <option value="Toy car">toy car</option>
                <option value="truck">truck</option>
                <option value="scooter">scooter</option>
                <option value="">Categories</option>
                <option value="electrical">electrical</option>
                <option value="riceshaw">riceshaw</option>
                <option value="Toy car">toy car</option>
                <option value="truck">truck</option>
                <option value="scooter">scooter</option>
                <option value="">Categories</option>
                <option value="electrical">electrical</option>
                <option value="riceshaw">riceshaw</option>
                <option value="Toy car">toy car</option>
                <option value="truck">truck</option>
                <option value="scooter">scooter</option>
                <option value="">Categories</option>
                <option value="electrical">electrical</option>
                <option value="riceshaw">riceshaw</option>
                <option value="Toy car">toy car</option>
                <option value="truck">truck</option>
                <option value="scooter">scooter</option>
              </select>
            </div>
            <div className=" flex justify-center items-center bg-orange-400 py-4 rounded-r-full  px-6  hover:bg-black hover:text-white cursor-pointer duration-1000">
              <span className="">
                <IoIosSearch size={20} />
              </span>
            </div>
          </div>
          <div className=" flex justify-center items-center gap-6">
            <span className=" flex gap-3 items-center">
              <Image alt="img" src={sale}></Image>
              <h1 className=" text-gray-600">
                Call Us :<br></br>
                <span className=" text-black font-bold cursor-pointer hover:text-orange-400 duration-300 text-sm">
                  9866448106
                </span>{" "}
              </h1>
            </span>
            <span className=" cursor-pointer hover:text-orange-400 duration-500">
              <RiContactsFill size={25} />
            </span>
            <span className=" cursor-pointer hover:text-orange-400 duration-500">
              <BsHeart size={25} />
            </span>
            <span className=" flex gap-1 items-center ">
              <span className="cursor-pointer hover:text-orange-400 duration-500 ">
                {" "}
                <BsHandbag size={25} />
              </span>

              <span className=" text-black font-bold cursor-pointer text-sm">
                $00.00
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="   md:flex  hidden    bg-orange-400 py-3 justify-center">
        <div className=" flex justify-between items-center w-10/12">
          <div className=" flex gap-14 text-md text-black">
            <div className=" flex  text-gray-100 font-bold items-center gap-4">
              <h1 className=" text-xl cursor-pointer">All Categories</h1>
            </div>
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className=" cursor-pointer hover:text-gray-100 duration-300">
                Home
              </h1>
            </Link>

            <Link to="blog" spy={true} smooth={true} duration={500}>
              <h1 className=" cursor-pointer hover:text-gray-100 duration-300">
              Larest Blog
              </h1>
            </Link>
            <Link to="category" spy={true} smooth={true} duration={500}>
            <h1 className=" cursor-pointer hover:text-gray-100 duration-300">
              {" "}
              Our Category
            </h1></Link>
            <Link to="deals" spy={true} smooth={true} duration={500}>
            <h1 className=" cursor-pointer hover:text-gray-100 duration-300">
              {" "}
              Daily Deal
            </h1></Link>
            <Link to="product" spy={true} smooth={true} duration={500}>
            <h1 className=" cursor-pointer hover:text-gray-100 duration-300">
              {" "}
              Popular Product
            </h1>
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={500}>
            <h1 className=" cursor-pointer hover:text-gray-100 duration-300">
              {" "}
              Contact
            </h1>
            </Link>
          </div>
          <div className=" text-md cursor-pointer">
            Welcome you to Auto part store!
          </div>
        </div>
      </div>
      {/* mobileMens */}
      <div>
        <div className=" fixed  bg-white  z-50 left-0 right-0  md:hidden py-3  border-b  justify-between px-4  flex">
          <Image alt="img" className=" pr-5" height={45} src={logo}></Image>
          <div onClick={openNav} className=" flex   flex-col">
            {!nav ? (
              <span className="cursor-pointer hover:text-orange-400 duration-500 ">
                {" "}
                <AiOutlineMenu size={25} />
              </span>
            ) : (
              <span className=" cursor-pointer hover:text-orange-400 duration-500">
                <AiOutlineClose size={25} />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="  pt-24 py-4 md:hidden justify-between px-4 flex">
        <div className=" flex w-full">
          <input
            className="border-2 rounded-l-full border-orange-400 py-2 px-3 w-full"
            type="text"
            placeholder=" search"
          />
          <div>
            <span className=" flex justify-center items-center bg-orange-400 py-3 rounded-r-full  px-4  hover:bg-black hover:text-white cursor-pointer duration-1000">
              <IoIosSearch size={20} />
            </span>
          </div>
        </div>
      </div>
      {  nav && <div className="  fixed top-14 md:hidden  z-50 bg-orange-400 flex  left-0 right-0  px-16  py-8  flex-col gap-8  text-black text-lg">
            <div className=" flex  text-gray-100 font-bold items-center gap-4">
              <h1 className=" text-xl cursor-pointer">All Categories</h1>
            </div>
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 onClick={openNav} className=" cursor-pointer hover:text-gray-100 duration-300">
                Home
              </h1>
            </Link>
            <Link to="category" spy={true} smooth={true} duration={500}>
              <h1 onClick={openNav}  className=" cursor-pointer hover:text-gray-100 duration-300">
              Our Category
              </h1>
            </Link>
            <Link to="blog" spy={true} smooth={true} duration={500}>
              <h1 onClick={openNav}  className=" cursor-pointer hover:text-gray-100 duration-300">
              Larest Blog
              </h1>
            </Link>
            <Link to="deals" spy={true} smooth={true} duration={500}>
            <h1 onClick={openNav} className=" cursor-pointer hover:text-gray-100 duration-300">
              {" "}
              Daily Deal
            </h1></Link>
            <Link to="product" spy={true} smooth={true} duration={500}>
            <h1 onClick={openNav} className=" cursor-pointer hover:text-gray-100 duration-300">
              {" "}
              Popular Product
            </h1>
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={500}>
            <h1 onClick={openNav}  className=" cursor-pointer hover:text-gray-100 duration-300">
              {" "}
              Contact
            </h1>
            </Link>
          </div>}
    </div>
  );
};

export default TopNavbar;
