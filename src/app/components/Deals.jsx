"use client";
import React from "react";
import stock1 from "../assets/stock1.jpg";
import stock2 from "../assets/stock2.jpg";
import stock3 from "../assets/stock3.jpg";
import stock4 from "../assets/stock4.jpg";
import stock5 from "../assets/stock5.jpg";
import stock6 from "../assets/stock6.jpg";
import deal1 from "../assets/deal1.jpg";
import deal2 from "../assets/deal2.jpg";
import Image from "next/image";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
export default function Deals() {
  
  return (
    <div name="deals" className=" md:px-0 px-4  flex py-6 justify-center">
      <div className=" flex flex-col w-full   md:py-10  py-5 md:w-10/12 gap-9">
        <div className=" flex bg-gray-100  border-l-8 rounded-l-gl  rounded-lg border-orange-400    py-3 px-2 md:px-12 ">
          <h1 className=" flex  md:text-2xl text-lg text-gray-700  font-bold   ">
          Daily Deal
          </h1>
        </div>
        <div className="  grid md:grid-cols-2 justify-center md:py-2  gap-8">
          {deals.map((deal, index) => (
            <div key={index} className=" md:flex py-8 px-4 border duration-300 rounded-lg hover:border-orange-400  gap-8">
              <div className=" flex flex-col md:flex-1 gap-4">
                <Image alt="img"  className=" h-72 w-72 object-cover" src={deal.img}></Image>
                <div className=" flex justify-between md:justify-start md:pb-0 pb-6 gap-4">
                  <Image alt="img" className=" border rounded-lg hover:border-orange-300 cursor-pointer  h-20 w-20 object-cover duration-300" src={deal.stk}></Image>
                  <Image  alt="img" className=" border rounded-lg hover:border-orange-300 cursor-pointer h-20 w-20 object-cover duration-300" src={deal.stks}></Image>
                  <Image alt="img" className="  border rounded-lg hover:border-orange-300 cursor-pointer h-20 w-20 object-cover duration-300" src={deal.stke}></Image>
                </div>
              </div>
              <div className=" flex  md:flex-1 flex-col gap-4">
                <h1 className=" text-sm text-gray-500">{deal.name}</h1>
                <h1 className=" text-xl  cursor-pointer hover:text-orange-300  duration-300  text-gray-800 font-bold">{deal.model}</h1>
                <h1 className=" text-lg text-gray-800 ">{deal.price}</h1>
                <h1 className=" text-lg bg-gray-100 px-8 py-2 rounded-full w-max text-gray-700" >{deal.time}</h1>
                <h1 className=" text-sm text-gray-400">{deal.p}</h1>
                <div className=" flex  gap-8   duration-700">
                <div className=" flex gap-1 items-center  md:px-4  px-6 py-2 rounded-full cursor-pointer bg-gray-100 hover:bg-orange-300">
                  <span className=" text-sm">{deal.add}</span>
                  <h1 className=" text-sm">{deal.card}</h1>
                </div>
                <h1 className="flex  bg-gray-100 p-3 hover:bg-orange-400 rounded-full cursor-pointer">
                  {deal.heart}
                </h1>
                <h1 className="  md:flex bg-gray-100 p-3  hover:bg-orange-400 rounded-full cursor-pointer">
                  {deal.compiler}
                </h1>
              </div>
                <h4  className=" text-md text-gray-600">{deal.aval}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const deals = [
  {
    img: deal1,
    name: "CAR",
    model: "Car Pump Washing Machine",
    price: "$122.00",
    p:"The 30-inch Apple cenima  HD Display delivers an amazing 2560 * 12035 pexl res.. ",
    time: "758D :  8H : 21M : 30s",
    aval: "Availability: 398 in Stock",
    stk: stock1,
    stks: stock2,
    stke: stock3,
    add: <BsPlusLg />,
    card: "Add to card",
    heart: <AiOutlineHeart />,
    compiler: <BiGitCompare />,
  },

  {
    img: deal2,
    name: "CAR",
    model: "Car Pump Washing Machine",
    price: "$122.00",
    p:"The 30-inch Apple cenima  HD Display delivers an amazing 2560 * 12035 pexl res.. ",
    time: "758D :  8H : 21M : 30s",
    aval: "Availability: 398 in Stock",
    stk: stock4,
    stks: stock5,
    stke: stock6,
    add: <BsPlusLg />,
    card: "Add to card",
    heart: <AiOutlineHeart />,
    compiler: <BiGitCompare />,
  },
];
