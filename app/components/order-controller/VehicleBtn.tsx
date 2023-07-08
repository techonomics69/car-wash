"use client";
import React, { useCallback, useState } from "react";

interface VehicleBtnProps {
  label: string;
  onSetActiveType?: any;
  activeType: string;
  isActive: boolean;
  price: number;
}

export const VehicleBtn: React.FC<VehicleBtnProps> = ({
  label,
  onSetActiveType,
  activeType,
  isActive,
  price,
}) => {
  return (
    <div
      onClick={() => onSetActiveType(label, price)}
      className={`
    lg:w-36
    lg:h-12
    lg:text-lg
    text-sm
    aspect-video
    w-28
    h-12
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
    </div>
  );
};
