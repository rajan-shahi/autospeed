"use client";
import React from "react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import Image from "next/image";

export default function Blog() {
  return (
    <div name="blog" className=" flex md:px-0 px-4 justify-center">
      <div className=" flex py-10 flex-col md:gap-8 gap-5 w-full md:w-10/12">
        <div className=" flex bg-gray-100  border-l-8 rounded-l-gl  rounded-lg border-orange-400 md:py-3 py-2">
          <h1 className=" px-4 text-xl text-black font-bold">Latest Blog</h1>
        </div>
        <div className="  grid md:grid-cols-4 md:py-0 py-2 md:gap-6 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className=" flex flex-col border border-gray-300 rounded-lg px-2  py-6 md:py-4 gap-3"
            >
              <div className=" hover:animate-pulse duration-300 ">
                <Image alt="img"
                  className=" relative rounded-lg cursor-pointer object-cover "
                  src={blog.img}
                ></Image>
              </div>
              <div>
                <h1 className=" text-lg px-5 text-gray-700 cursor-pointer duration-300 hover:text-orange-400 font-bold">
                  {blog.name}
                </h1>
              </div>
              <div>
                <h2 className=" text-sm text-gray-500">{blog.desc}</h2>
              </div>
              <div className=" flex justify-center">
                <h1 className=" text-sm text-gray-700">{blog.red}</h1>
              </div>
              <div className=" absolute text-sm cursor-pointer hover:bg-orange-400 duration-300 text-gray-700 px-4 mt-4 ml-2 py-1 rounded-lg  bg-white w-max  ">
                <h1>{blog.dat}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className=" md:py-10 py-4 ">
          <div className=" grid md:grid-cols-4  grid-cols-2 bg-gray-100 md:px-8 px-4 py-6  gap-10 md:gap-24">
            {frees.map((free, index) => (
              <div key={index} className=" flex flex-col gap-2">
                <div className=" cursor-pointer">
                  <Image alt="img" src={free.img}></Image>
                </div>
                <div className=" text-xl text-gray-800 cursor-pointer hover:text-orange-400">
                  <h1>{free.name}</h1>
                </div>
                <div className=" text-sm text-gray-500">
                  <h2>{free.desc}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const blogs = [
  {
    img: blog1,
    name: "Morbi Sodales Tellus Elit,In Blandit Risus Suscipt A",
    desc: "Sed Ut Sollicitudin Arcu,Vitae Sollicitudin Lectus.Prasent Scelerisque Orci In Masris Fegure,...",
    red: "Red More....",
    dat: "11 DESC",
  },
  {
    img: blog2,
    name: "Morbi Sodales Tellus Elit,In Blandit Risus Suscipt A",
    desc: "Sed Ut Sollicitudin Arcu,Vitae Sollicitudin Lectus.Prasent Scelerisque Orci In Masris Fegure,...",
    red: "Red More....",
    dat: "7 NOV",
  },
  {
    img: blog3,
    name: "Morbi Sodales Tellus Elit,In Blandit Risus Suscipt A",
    desc: "Sed Ut Sollicitudin Arcu,Vitae Sollicitudin Lectus.Prasent Scelerisque Orci In Masris Fegure,...",
    red: "Red More....",
    dat: "19 OCT",
  },
  {
    img: blog4,
    name: "Morbi Sodales Tellus Elit,In Blandit Risus Suscipt A",
    desc: "Sed Ut Sollicitudin Arcu,Vitae Sollicitudin Lectus.Prasent Scelerisque Orci In Masris Fegure,...",
    red: "Red More....",
    dat: "14 JUN",
  },
];

const frees = [
  {
    img: one,
    name: "Free Shoping",
    desc: "Free Worldwide Shiping On All Area On Order Above $100",
  },
  {
    img: two,
    name: "7 Days Easy Return.",
    desc: "Product Any Fault Within 07 Days For An Immediately Exchange",
  },
  {
    img: three,
    name: "24/7 Friendly Support.",
    desc: "Our Support Team Allways Ready For You To 7 Days A Week",
  },
  {
    img: four,
    name: "Payment Secure.",
    desc: "We Ensure 100% Secure Payment With Online Payment",
  },
];
