"use client";
import React, { useCallback, useMemo, useState } from "react";
// import { FeatureBtn } from "./FeatureBtn";
import { VehicleBtn } from "../order-controller/VehicleBtn";

interface VehicleTypesProps {
  setCustomValue: (id: string, label: string, price?: number) => void;
}

export const VehicleTypes: React.FC<VehicleTypesProps> = ({
  setCustomValue,
}) => {
  const [activeType, setActiveType] = useState("none");

  const onSetActiveType = (type: string, price: number) => {
    setActiveType(type);
    setCustomValue("vehicle", type, price);
  };

  const handleIsDisabled = useCallback(
    (vehicle: string) => {
      if (activeType === vehicle) return true;
      else return false;
    },
    [activeType]
  );

  // const handleIsDisabled = (vehicle: string) => {
  //   if (activeType === vehicle) return true;
  //   else return false;
  // };

  const labels = [
    { name: "Private", price: 10 },
    { name: "Motorcycle", price: 7 },
    { name: "4X4", price: 14 },
    { name: "Truck", price: 16 },
  ];

  return (
    <div
      className="vehicles
                  gap-3
                  w-screen
                  sm:w-full
                  items-center
                  justify-center
                  flex flex-wrap"
    >
      {labels.map((label) => (
        <VehicleBtn
          label={label.name}
          price={label.price}
          activeType={activeType}
          onSetActiveType={onSetActiveType}
          isActive={handleIsDisabled(label.name)}
        />
      ))}
    </div>
  );
};
