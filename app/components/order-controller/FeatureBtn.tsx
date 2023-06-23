"use client";

import React, { useState } from "react";

interface FeatureBtnProps {
  label: string;
  isActive?: boolean;
  setCustomValue: (label: string, isActive: boolean, price?: number) => void;
  price: number;
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
      className="w-36
                  h-12"
      onClick={() => handleIsActive()}
    >
      <button
        className={`w-full
                    h-full
                   hover:bg-gray-600
                   active:bg-gray-700 
                   text-white 
                   font-bold 
                   py-2 
                   px-4 
                   rounded 
                   ${isActive ? "bg-gray-200" : "bg-gray-500"}`}
      >
        {label.toUpperCase()}
      </button>
    </div>
  );
};
