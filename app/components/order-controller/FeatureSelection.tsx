import React from "react";
import { FeatureBtn } from "./FeatureBtn";

interface FeatureSelectionProps {
  setCustomValue: (id: string, label: string, price?: number) => void;
}

export const FeatureSelection: React.FC<FeatureSelectionProps> = ({
  setCustomValue,
}) => {
  const features = [
    { name: "wax", price: 3 },
    { name: "polish", price: 4 },
    { name: "exterior", price: 2 },
    { name: "interior", price: 5 },
  ];

  return (
    <div
      className="features
                  grid 
                  row-span-2 
                  col-span-1 
                  col-start-1 
                  grid-cols-2 
                  grid-rows-2 
                  gap-3 
                  mt-10"
    >
      {features.map((feature) => (
        <FeatureBtn
          setCustomValue={setCustomValue}
          label={feature.name}
          price={feature.price}
        />
      ))}
    </div>
  );
};
