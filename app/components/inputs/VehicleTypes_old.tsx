"use client";
import React, { useCallback, useMemo, useState } from "react";
import { FeatureBtn } from "./FeatureBtn";

// export const VehicleTypes = () => {
  const [activeType, setActiveType] = useState("none");

  const onSetActiveType = (type: string) => {
    console.log("ON SET ACTIVE TYPE CLICKED");
    console.log(
      "🚀 ~ file: VehicleTypes.tsx:13 ~ onSetActiveType ~ activeType:",
      activeType
    );
    setActiveType(type);
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

  const labels = ["Private", "Motorcycle", "4X4", "Truck"];

  return (
    <div className="grid items-center w-full text-white rounded-lg border-[1px] h-1/4 align-items-center">
      <div className="vehicles w-full gap-2 grid grid-cols-2 grid-rows-2 justify-items-center">
        {labels.map((label) => (
          <FeatureBtn
            label={label}
            isVehicle={true}
            isActive={handleIsDisabled(label)}
            onSetActiveType={onSetActiveType}
            activeType={activeType}
          />
        ))}
      </div>
    </div>
  );
};
