"use client";
import React, { useState } from "react";
import { VehicleTypes } from "../inputs/VehicleTypes";

interface VehicleSelectionProps {
  setCustomValue: (id: string, label: string, price?: number) => void;
}

export const VehicleSelection: React.FC<VehicleSelectionProps> = ({
  setCustomValue,
}) => {
  const [vehicleType, setVehicleType] = useState("");

  return (
    <div
      className="w-screen
                      sm:row-span-1 
                      sm:col-span-1 
                      text-white 
                      rounded-lg 
                      mb-4"
    >
      <VehicleTypes setCustomValue={setCustomValue} />
    </div>
  );
};
