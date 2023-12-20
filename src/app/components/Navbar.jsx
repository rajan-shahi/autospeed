"use client";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import en from "../assets/en-gb.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="  md:flex hidden bg-gray-700 justify-center">
        <div className=" flex  flex-col justify-center w-10/12">
          {/* topbar */}
          <div className=" flex   justify-between py-3 text-gray-300  text-sm">
            <h1 className=" cursor-pointer">
              Welcome to Autoparts online Store
            </h1>
            <div className=" flex gap-3">
              <span className=" flex border-r  gap-1 px-2 justify-center items-center">
                <span className=" cursor-pointer">
                  <MdLocationPin />
                </span>
                <h1 className=" cursor-pointer">Find a Store</h1>
              </span>
              <div className=" flex justify-center items-center  border-r px-2">
                <Image alt="img"className=" cursor-pointer" src={en}></Image>
                <select
                  className="  cursor-pointer bg-transparent outline-none "
                  name=""
                  id=""
                >
                  <option className=" text-black" value="">
                    Language
                  </option>
                  <option className=" text-black" value="Englisg">
                    English
                  </option>
                  <option className=" text-black" value="Nepali">
                    Nepali
                  </option>
                  <option className=" text-black" value="Hindi">
                    Hindi
                  </option>
                </select>
              </div>
              <div className=" flex justify-center items-center">
                <span className=" cursor-pointer">
                  <BiDollar />
                </span>
                <select
                  className="gap-6  cursor-pointer bg-transparent outline-none"
                  name=""
                  id=""
                >
                  <option className=" text-black" value="">
                    Currency
                  </option>
                  <option className=" text-black" value="Euro">
                    Euro
                  </option>
                  <option className=" text-black" value="pound Stelling">
                    pound
                  </option>
                  <option className=" text-black" value="US Dollors">
                    US Dollors
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
