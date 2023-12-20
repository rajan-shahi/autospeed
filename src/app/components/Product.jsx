"use client";
import React, { useState } from "react";
import disc from "../assets/discover.jpg";
import Image from "next/image";
import { featured, sellers,latests } from "../data/Data";

export default function Product() {
  const [list, setList] = useState(featured);
  
return (
  <div name="product" className=" flex md:py-10 py-4 md:px-0 px-4 justify-center">
    <div className=" flex flex-col w-full md:w-10/12">
      <div className=" flex bg-gray-100  border-l-8 rounded-l-gl  rounded-lg border-orange-400  md:py-3  py-2 px-2 md:px-12 md:justify-between">
        <div>
          <h1 className=" md:flex hidden md:text-2xl text-sm text-gray-700  font-bold   ">
            Popular Product
          </h1>
        </div>
        <div className=" flex md:gap-8 md:text-xl text-gray-700">
          <h1  onClick={() => setList(featured)} className={`${list.name === "feat" ? "bg-orange-400" : ""} cursor-pointer duration-300 rounded-full px-4 py-1`} >
            Featured
          </h1>
          <h1  onClick={() => setList(sellers)} className={`${list.name === "sell" ? "bg-orange-400" : ""} cursor-pointer duration-300 rounded-full px-4 py-1`}>
            Bestseller
          </h1>
          <h1 onClick={() => setList(latests)} className={`${list.name === "lates" ? "bg-orange-400" : ""} cursor-pointer duration-300 rounded-full px-4 py-1`}>
            Latest
          </h1>
        </div>
      </div>
      <div className=" grid md:gap-8 gap-4  md:py-10 py-5 md:grid-cols-5 grid-cols-2">
        {list?.items?.map((featured, index) => (
          <div
            key={index}
            className=" flex  group flex-col justify-center cursor-pointer hover:border-orange-400 border  border-gray-100 duration-300 rounded-lg  md:px-3 px-5 py-3 "
          >
            <div className=" relative">
              <Image src={featured.img}></Image>
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className=" text-sm text-gray-600">{featured.name}</h1>
              <h2 className=" md:text-md  text-sm text-gray-600 font-bold  cursor-pointer  hover:text-orange-300 ">
                {featured.model}
              </h2>
              <div className=" flex gap-1 text-sm text-orange-400">
                <span>{featured.star}</span>
                <span>{featured.star}</span>
                <span>{featured.star}</span>
                <span>{featured.star}</span>
                <span>{featured.star}</span>
              </div>
              <h1 className="group-hover:opacity-0 md:text-xl  text-sm   md:font-normal font-bold text-gray-900">
                {featured.price}
              </h1>
            </div>

            <div className=" flex opacity-0  group-hover:opacity-100  justify-center items-center gap-2  -mt-6  duration-700">
              <div className=" flex gap-1 items-center md:px-3  px-4 py-2 rounded-full cursor-pointer bg-gray-100 hover:bg-orange-300">
                <span className=" text-sm">{featured.add}</span>
                <h1 className=" text-sm">{featured.card}</h1>
              </div>
              <h1 className=" md:flex hidden bg-gray-100 p-2 hover:bg-orange-400 rounded-full cursor-pointer">
                {featured.heart}
              </h1>
              <h1 className="  md:flex hidden bg-gray-100 p-2  hover:bg-orange-400 rounded-full cursor-pointer">
                {featured.compiler}
              </h1>
            </div>
            <div className=" -mt-36  cursor-pointer  opacity-0  group-hover:opacity-100  hover:bg-orange-400 duration-300  ml-12 bg-gray-100 p-3 rounded-full absolute">
              <span className=" text-xl  ">{featured.eye}</span>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex w-full md:py-3">
        <Image
          className=" relative rounded-xl md:h-full  h-[15vh] w-full"
          alt="img"
          src={disc}
        ></Image>
        <div className=" flex flex-col gap-4 text-white md:px-20 px-4 py-4 absolute">
          <h1 className=" flex  text-lg text-orange-300"> WHAT AUTO PARTS</h1>
          <h2 className=" text-xl  md:text-5xl  text-gray-100 font-bold">
            Sale Up To 50% Off
          </h2>
          <div className=" md:flex  hidden justify-start bg-orange-400 px-6 py-2 rounded-full cursor-pointer w-max  text-black hover:text-white duration-300 hover:bg-black">
            <button>Discover Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}