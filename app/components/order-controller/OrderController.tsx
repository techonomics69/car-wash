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
                  sm:overflow-hidden
                  sm:row-span-4
                  sm:col-span-3 
                  sm:row-start-2
                  sm:grid
                  sm:grid-cols-2
                  sm:grid-rows-1
                  overflow-x-scroll overflow-y-hidden snap-x mandatory rounded-xl
                  h-full
                  drop-shadow-md	
                  bg-indigo-50
                  flex
                  gap-1
                  border 
                  "
    >
      <div
        className="block-one
                    snap-start
                    min-w-full

                      sm:col-span-1
                      sm:w-1/2
                      h-full
                      justify-evenly
                      p-4
                      gap-3
                      flex
                      items-center
                      flex-col
                      mb-4
                      text-white
                      rounded-lg
      "
      >
        <VehicleTypes setCustomValue={setCustomValue} />

        <div
          className="features 
          gap-3
          w-screen
          sm:w-full
          items-center
          justify-center
          flex flex-wrap
          "
        >
          {features.map((feature) => (
            <FeatureBtn
              setCustomValue={setCustomValue}
              label={feature.name}
              price={feature.price}
            />
          ))}
        </div>
      </div>
      <div
        className="block-two
                  snap-start
                      sm:col-start-2
                      sm:w-full
                  min-w-full
                      h-full
                      p-4
                      justify-evenly
                      flex-col
                      flex
                      gap-3
                      relative
      "
      >
        <ImageUpload
          onChange={(value) => setCustomValue("imageSrc", value)}
          value={imageSrc}
        />

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
