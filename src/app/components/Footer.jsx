"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { CgInstagram } from "react-icons/cg";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <div name="contact" className="  flex flex-col justify-center">
      <div className=" flex justify-center bg-gray-100">
        <div className=" md:px-0 px-4  grid md:grid-cols-2 md:gap-0 gap-8 justify-between  py-6 w-full md:w-10/12">
          <div className=" flex items-center gap-10">
            <h1 className=" md:flex hidden text-xl text-gray-700 font-bold cursor-pointer">
              Our Latest 
            </h1>
            <div className=" flex">
              <input
                name="email"
                className=" py-2 px-4 border-2 border-orange-300 md:w-[400px]  w-[275px] rounded-full outline-none"
                text="email"
                placeholder="Your email address"
              ></input>
              <div className=" flex items-center py-2 bg-orange-400 -ml-5 cursor-pointer hover:bg-black hover:text-white  duration-500 rounded-r-full">
                <h1 className=" flex items-center px-4 text-sm">Subscribe</h1>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center gap-8">
            <h1 className=" md:flex hidden text-xl text-gray-700 font-bold cursor-pointer">
              Follow Us :
            </h1>
            <span className=" flex  gap-14  md:gap-5">
              <span className=" p-3 bg-black text-gray-100 hover:bg-orange-400  duration-500 hover:text-black rounded-full">
                <FaFacebookF size={20} />
              </span>
              <span className=" p-3 bg-black text-gray-100 hover:bg-orange-400  duration-500 hover:text-black rounded-full">
                <GrTwitter size={20} />
              </span>
              <span className=" p-3 bg-black text-gray-100 hover:bg-orange-400  duration-500 hover:text-black rounded-full">
                <CgInstagram size={20} />
              </span>
              <span className=" p-3 bg-black text-gray-100 hover:bg-orange-400  duration-500 hover:text-black rounded-full">
                <BiLogoLinkedin size={20} />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className=" md:px-0 px-4 flex justify-center md:pt-10 bg-black">
        <div className="  grid grid-cols-2 md:grid-cols-5  md:justify-between justify-center  py-10 border-b border-gray-100 gap-10 w-full md:w-10/12 ">
          <div className=" text-sm text-gray-100 flex flex-col gap-5">
            <h1 className=" text-xl">ABOUT US</h1>
            <h1>About Us</h1>
            <h1>Delivery Information</h1>
            <h1>Privacy Policy</h1>
            <h1>Terms & Conditions</h1>
            <h1>Newsletter</h1>
          </div>
          <div className=" text-sm text-gray-100 flex flex-col gap-5">
            <h1 className=" text-xl">INFORMATION</h1>
            <h1>My Account</h1>
            <h1>Order History</h1>
            <h1>Wish List</h1>
            <h1>Specials</h1>
            <h1>Brands</h1>
          </div>
          <div className=" text-sm text-gray-100 flex flex-col gap-5">
            <h1 className=" text-xl">MY ACCOUNT</h1>
            <h1>About Us</h1>
            <h1>Delivery Information</h1>
            <h1>Privacy Policy</h1>
            <h1>Terms & Conditions</h1>
            <h1>Newsletter</h1>
          </div>
          <div className=" text-sm text-gray-100 flex flex-col gap-5">
            <h1 className=" text-xl">CUSTOMER </h1>
            <h1>Contact Us</h1>
            <h1>Site Map</h1>
            <h1>Gift Certificates</h1>
            <h1>Affiliate</h1>
            <h1>Returns</h1>
          </div>
          <div className="  text-sm  text-gray-100 flex flex-col gap-5">
            <h1 className=" text-xl">CONTACT US</h1>
            <h1>Address: Kathmandu,Nepal </h1>
            <h1>WhatsApp : 9866441806</h1>
            <h1>Call: 9866441806</h1>
            <h1>Email: rajanshahi1263@gmail.com</h1>
          </div>
        </div>
      </div>
      <div className=" text-gray-100 bg-black justify-center">
        <div className=" flex justify-center w-full md:w-10/12 py-5">
          <h1>Copy Right By Rajan bahadur Shahi © 2023</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
