"use client";
import React from "react";
import mycar from "../assets/mycar.jpg";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cats.jpg";
import cat4 from "../assets/cat.jpg";
import cat5 from "../assets/cat5.jpg";
import cat7 from "../assets/cat7.jpg";
import cat6 from "../assets/cat6.jpg";
import cat8 from "../assets/cat8.jpg";
import Image from "next/image";
export default function Categorie() {
  return (
    <div name="category">
      <div className=" md:flex hidden  md:h-[75vh] flex-col justify-center">
        <Image className=" h-full w-full object-cover" src={mycar}></Image>
      </div>
      <div className=" flex justify-center ">
        <div className="md:-mt-[38%] flex flex-col gap-6  justify-center  w-full  md:w-10/12">
          <h1 className=" md:text-gray-100 md:text-2xl text-xl   font-bold cursor-pointer md:border-b-0 border-b py-2 md:py-0 md:px-0 px-4">
            Our Category
          </h1>
          <div className=" grid md:grid-cols-4  grid-cols-2  rounded-xl  bg-white md:justify-start justify-center">
            {categories.map((categorie, index) => (
              <div
                key={index}
                className=" md:flex md:gap-6  border-r border-b  py-5"
              >
                <div>
                  <Image
                    className=" md:px-0 px-4 cursor-pointer"
                    src={categorie.img}
                  ></Image>{" "}
                </div>
                <div className=" flex md:px-0 px-4 flex-col gap-3">
                  <h1 className=" text-md cursor-pointer hover:text-orange-400  text-black font-bold">
                    {categorie.name}
                  </h1>
                  <h1 className=" hover:text-orange-400 cursor-pointer text-sm  text-gray-400">
                    {categorie.ric}
                  </h1>
                  <h1 className=" text-sm hover:text-orange-400 cursor-pointer  text-gray-400">
                    {categorie.car}
                  </h1>
                  <h1 className=" text-sm hover:text-orange-400 cursor-pointer text-gray-400">
                    {categorie.tru}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    img: cat1,
    name: "Electrical",
    ric: "rickshaw",
    car: "toy car",
    tru: "truck",
  },
  {
    img: cat2,
    name: "Electrical",
    ric: "rickshaw",
    car: "toy car",
    tru: "truck",
  },
  {
    img: cat3,
    name: "Electrical",
    ric: "rickshaw",
    car: "toy car",
    tru: "truck",
  },
  {
    img: cat4,
    name: "Electrical",
    ric: "rickshaw",
    car: "toy car",
    tru: "truck",
  },
  {
    img: cat5,
    name: "Electrical",
    ric: "rickshaw",
    car: "toy car",
    tru: "truck",
  },
  {
    img: cat6,
    name: "Electrical",
    ric: "rickshaw",
    car: "toy car",
    tru: "truck",
  },
  {
    img: cat7,
    name: "Electrical",
    ric: "rickshaw",
    car: "toy car",
    tru: "truck",
  },
  {
    img: cat8,
    name: "Electrical",
    ric: "rickshaw",
    car: "toy car",
    tru: "truck",
  },
];
