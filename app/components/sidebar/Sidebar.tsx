"use client";
import { SafeUser } from "@/types";
import React from "react";
import { HiMenu } from "react-icons/hi";
import Avatar from "../Avatar";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { IoMdImages, IoMdInformationCircle } from "react-icons/io";

interface SidebarProps {
  currentUser?: SafeUser | null;
  handleIsShown: () => void;
  isShown: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentUser,
  handleIsShown,
  isShown,
}) => {
  const categories = [
    {
      name: "Home",
      icon: (
        <>
          <AiFillHome size={28} />
        </>
      ),
    },
    {
      name: "Gallery",
      icon: (
        <>
          <IoMdImages size={28} />
        </>
      ),
    },
    {
      name: "Contact Us",
      icon: (
        <>
          <AiFillMessage size={28} />
        </>
      ),
    },
    {
      name: "About",
      icon: (
        <>
          <IoMdInformationCircle size={28} />
        </>
      ),
    },
  ];

  const categoriesList = () => {
    return categories.map((category) => (
      <div className="flex flex-col items-center justify-center w-full h-full text-white">
        {category.icon}
        {category.name}
      </div>
    ));
  };

  return (
    <div
      className={`bg-red-900 
                    w-32 
                    left-0 
                    h-screen 
                    absolute 
                    border 
                    rounded-xl 
                    hidden 
                    md:block
                    transition
                    ${isShown ? "block" : "hidden"}

                    `}
    >
      <div className="relative h-full w-full grid justify-items-center grid-cols-1	">
        <div>
          <HiMenu
            onClick={handleIsShown}
            size={38}
            className={`h-20 m-auto cursor-pointer transition`}
          />
        </div>
        {currentUser ? (
          <>
            <Avatar src={currentUser?.image} size={70} />
            {categoriesList()}
            <div className="w-full text-center m-auto text-white">Sign Out</div>
          </>
        ) : (
          <>
            <div className="w-full text-center m-auto text-white">Sign In</div>
          </>
        )}
      </div>
    </div>
  );
};
