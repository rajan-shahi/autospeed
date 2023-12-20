"use client";
import React from "react";
import rajan from "../assets/online1.jpg";
import loki from "../assets/online2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <div name="home" className="  flex  justify-center ">
      <div className=" flex w-full  justify-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="">
            {customers.map((customer, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className=" justify-center pb-10 flex flex-col"
                >
                  <div className="">
                    <Image
                      className="  md:h-full h-[30vh] relative object-cover "
                      src={customer.img}
                    ></Image>
                  </div>
                  <div className=" absolute pl-16 md:pl-72 md:w-6/12 flex flex-col justify-center gap-6">
                    <h1 className=" text-orange-400 text-2xl">
                      {customer.name}
                    </h1>
                    <h2 className=" md:text-5xl  text-lg font-bold text-gray-100">
                      {customer.desc}
                    </h2>
                    <h1 className=" md:text-xl  text-sm text-gray-100">
                      {customer.part}
                    </h1>  
                    <h2 className=" flex md:px-12  px-7 py-2  cursor-pointer hover:bg-black duration-300 hover:text-white bg-orange-400 rounded-full w-max" >{customer.cust}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

const customers = [
  {
    img: rajan,
    name: " SHOP TEH  VERY BEST",
    part: "Exclude performance parts,Garge Equiment",
    cust: "Show Now",
    desc: "Just  Got  Bigger  Car  Parts  Online",
  }, 
  {
    img: loki,
    name: " SHOP TEH  VERY BEST",
    part: "Exclude performance parts,Garge Equiment",
    cust: "Show Now",
    desc: "Just Got Bigger Car Parts Online",
  },
];
