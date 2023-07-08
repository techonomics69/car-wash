"use client";

import React, { useState } from "react";

interface FeatureBtnProps {
  label: string;
  isActive?: boolean;
  setCustomValue: (label: string, isActive?: boolean, price?: number) => void;
  price?: number;
}

export const FeatureBtn: React.FC<FeatureBtnProps> = ({
  label,
  setCustomValue,
  price,
}) => {
  const [isActive, setIsActive] = useState(true);

  const handleIsActive = () => {
    setIsActive(!isActive);
    setCustomValue(label, isActive, price);
    console.log(isActive, "IS ACTIVE");
  };

  return (
    <div
      className=" 

                  "
      onClick={() => handleIsActive()}
    >
      <button
        className={`
        lg:w-36
    lg:h-10
    lg:text-lg
    text-md
    aspect-video
    w-32
    h-14
    hover:bg-gray-600
    active:bg-gray-700 
    text-white 
    font-bold 
    p-1
    rounded
    grid
    place-items-center
    bg-sky-950	 
    ${!isActive ? "bg-gray-200" : "bg-gray-500"}`}
      >
        {label.toUpperCase()}
      </button>
    </div>
  );
};
