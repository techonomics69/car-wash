"use client";
import React from "react";
import Heading from "./Heading";
import { FeatureBtn } from "./order-controller/FeatureBtn";
import { VehicleTypes } from "./inputs/VehicleTypes";
import ImageUpload from "./inputs/ImageInput";
import { FieldValues, useForm } from "react-hook-form";
import { useMemo, useState } from "react";
import { OrderController } from "./order-controller/OrderController";
import { SafeUser } from "@/types";
import { OrdersData } from "./orders-data/OrdersData";

interface DashboardProps {
  currentUser?: SafeUser | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ currentUser }) => {
  const backgroundStyle = {
    backgroundImage: `url('/images/car-wash-background.jpg')`,
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "1px solid black",
  };

  return (
    <div className="p-20 grid grid-cols-4 grid-rows-5 h-full w-full">
      <Heading
        title={`Welcome back, ${currentUser?.name}`}
        subtitle="Now. Cheap."
      />
      <OrdersData />
      <OrderController />
    </div>
  );
};
