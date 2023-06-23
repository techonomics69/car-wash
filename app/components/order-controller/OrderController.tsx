import React, { useState } from "react";
import ImageUpload from "../inputs/ImageInput";
import { FeatureBtn } from "./FeatureBtn";
import { VehicleTypes } from "../inputs/VehicleTypes";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { OrderSummary } from "./OrderSummary";

export const OrderController = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [vehicleType, setVehicleType] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const setCustomValue = (id: string, value: any, price?: number) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    if (price) setTotalPrice(totalPrice + price);
  };

  const {
    watch,
    setValue,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      wax: false,
      polish: false,
      interior: false,
      exterior: false,
      vehicle: "",
      image: "",
    },
  });

  const formValues = watch();
  const features = [
    { name: "wax", price: 3 },
    { name: "polish", price: 4 },
    { name: "exterior", price: 2 },
    { name: "interior", price: 5 },
  ];

  const onSubmit = (formValues: any) => {
    console.log(formValues);
    const { interior, exterior } = formValues;
    console.log("🚀 ~ file: AppMenu.tsx:63 ~ onSubmit ~ exterior:", exterior);
    console.log("🚀 ~ file: AppMenu.tsx:63 ~ onSubmit ~ interior:", interior);
    if (!interior && !exterior) {
      toast.error("Select Interior or Exterior");
    }
    // setIsLoading(true);
    // axios
    //   .post("/api/listings", data)
    //   .then(() => {
    //     toast.success("Listing created!");
    //     router.refresh();
    //     reset();
    //   })
    //   .catch(() => {
    //     toast.error("Something went wrong");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  return (
    <div
      className="order-menu 
                  lg:rows-span-2
                  lg:col-span-3 row-start-2 bg-green-500 p-4
                  row-span-full
                  place-items-center
                  gap-1
                  border 
                  border-red-500
                  lg:grid
                  lg:grid-cols-2
                  lg:grid-rows-2
                  "
    >
      <div className="row-span-1 col-span-1 text-white rounded-lg mb-4">
        <VehicleTypes setCustomValue={setCustomValue} />
      </div>
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
      <div className="col-span-2 col-start-2 row-start-1 w-1/2 m-auto mt-4">
        <ImageUpload
          onChange={(value) => setCustomValue("imageSrc", value)}
          value={imageSrc}
        />
      </div>
      <div className="m-auto gap-3 row-start-2 col-start-2 text-center text-white">
        <OrderSummary
          totalPrice={totalPrice}
          isDisabled={isDisabled}
          onSubmit={handleSubmit(onSubmit)}
          formValues={formValues}
        />
      </div>
    </div>
  );
};
