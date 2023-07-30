import { React, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillHeart,
  AiFillWallet,
} from "react-icons/ai";
import { BsCartFill, BsTruck } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { BiSolidHelpCircle, BiSolidTruck } from "react-icons/bi";
import { FaRupeeSign, FaUserFriends } from "react-icons/fa";
import { HiArchive } from "react-icons/hi";
const Navbar = () => {
  const [menu, setmenu] = useState(false);
  return (
    <div className="max-w-[1640px] flex justify-between items-center p-4 mx-auto">
      <div className="flex items-center">
        <div onClick={()=>setmenu(!menu)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>

        <h4 className="text-2xl sm:text-3xl lg:text-4xl px-2 items-center">
          H. <span className="font-bold"> Eats</span>
        </h4>

        <div className="hidden lg:flex bg-gray-200 rounded-full text-[14px] p-1">
          <p className="bg-black text-white p-2 rounded-full">Delievery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      <div className="flex bg-slate-200 items-center rounded-xl w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={30} />
        <input
          className="bg-gray-200 rounded-lg px-2 w-full focus:outline-none"
          placeholder="Search Button"
        />
      </div>
      <button className="bg-black text-white flex w-[100px] items-center justify-center p-1 rounded-xl hover:bg-orange-600 hover:border-orange-400">
        <BsCartFill size={20} className="mr-2" />
        Cart
      </button>
      {menu?<div className="w-full h-screen fixed top-0 left-0 z-10 bg-black/80"></div>:""}
   
      <div className={menu?"w-[200px] h-screen fixed top-0 left-0 z-10 bg-white duration-300":"w-[200px] h-screen fixed top-0 left-[-100%] z-0 bg-white duration-200"}>
        <h4 className="text-2xl p-3">
          H.<span className="font-bold"> Eats</span>
        </h4>
        <ImCross onClick={()=>setmenu(!menu)} size={10} className="absolute top-3 left-40 cursor-pointer" />
        <div>
          <ul className="flex flex-col p-4 space-y-6 font-mono font-semibold justify-center">
            <li className="flex items-center  ">
              <BiSolidTruck size={20} className=" mr-2" />
              Orders
            </li>
            <li className="flex items-center ">
              <AiFillHeart size={20} className=" mr-2" />
              Favourites
            </li>
            <li className="flex items-center ">
              <AiFillWallet size={20} className=" mr-2" />
              Wallet
            </li>
            <li className="flex items-center ">
              <BiSolidHelpCircle size={20} className=" mr-2" />
              Help
            </li>
            <li className="flex items-center ">
              <FaRupeeSign size={20} className=" mr-2" />
              Promotions
            </li>
            <li className="flex items-center ">
              <HiArchive size={20} className=" mr-2" />
              Best Ones
            </li>
            <li className="flex items-center ">
              <FaUserFriends size={20} className=" mr-2" />
              Invite Friends
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  );
};

export default Navbar;
