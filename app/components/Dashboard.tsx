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
import Container from "./Container";

interface DashboardProps {
  currentUser?: SafeUser | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ currentUser }) => {
  return (
    <Container>
      <div
        className="sm:grid 
                    sm:grid-cols-4 
                    sm:gap-5 
                    sm:grid-rows-5 
                    h-screen 
                    w-full 
                    pt-24
                    flex
                    flex-col
                    "
      >
        <Heading
          title="Car Wash"
          subtitle={`Welcome back, ${currentUser?.name}`}
        />
        <OrdersData />
        <OrderController />
      </div>
    </Container>
  );
};
