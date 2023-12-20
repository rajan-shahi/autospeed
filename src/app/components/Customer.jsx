import React from "react";
import rajan from "../assets/rajan.jpg";
import loki from "../assets/loki.jpg";
import gita from "../assets/gita.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Customer = () => {
  return (
    <div
      name="customer"
      className="  flex  flex-col justify-center   items-center  md:pb-0 pb-8 "
    >
      <div className=" flex w-full md:w-10/12 justify-center items-center">
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
          <div className=" ">
            {customers.map((customer, index) => (
              <SwiperSlide key={index}>
                <div className=" md:px-72 px-14 md:py-20 py-14 flex flex-col gap-4">
                  <div className=" flex justify-center items-center  ">
                    <Image alt="img"
                      className=" h-32 w-32 md:h-40 md:w-40 object-cover rounded-full"
                      src={customer.img}
                    ></Image>
                  </div>
                  <div className="  pt-5 flex flex-col justify-center gap-3">
                    <h1 className=" md:text-2xl  text-gray-800">
                      {customer.desc}
                    </h1>
                    <span className=" flex items-center gap-3 justify-center text-md">
                      <h1 className=" text-orange-500 font-bold">
                        {customer.name}
                      </h1>
                      <h2 className=" text-md  font-bold text-gray-500">
                        {customer.cust}
                      </h2>
                    </span>
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

export default Customer;

const customers = [
  {
    img: rajan,
    name: " Rajan Bahadur Shahi :",
    cust: "Developer",
    desc: "Our support and response has been amazing ,helping with me with several issues i came across and got them sloved almost the same day.A pleasure to work with them!",
  },
  {
    img: gita,
    name: "Gita kumari Bista :",
    cust: "Editor",
    desc: "Code, template and other are very good. The support has served me immediately and solved my problems when i need help.Are to be congratulated.",
  },
  {
    img: loki,
    name: "Lokendra Chaulagain :",
    cust: "Designer",
    desc: "Perfect theme and best of all thatyou have many option to choose! Very fast responding !  I highly recommend this thehe and these people! ",
  },
];
