"use client";

import useRentModal from "@/app/hooks/useRentModal";
import axios from "axios";
import Modal from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Counter from "../inputs/Counter";
import dynamic from "next/dynamic";
import ImageUpload from "../inputs/ImageUpload";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

enum STEPS {
  VEHICLE = 0,
  FEATURES = 1,
  IMAGES = 2,
  PRICE = 3,
  SUMMARY = 4,
}

const RentModal = () => {
  const rentModal = useRentModal();
  const router = useRouter();

  const [step, setStep] = useState(STEPS.VEHICLE);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      vehicle: "",
      interior: false,
      exterior: false,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      description: "",
    },
  });
  const vehicle = watch("vehicle");
  const wax = watch("wax");
  const interior = watch("interior");
  const exterior = watch("exterior");
  const imageSrc = watch("imageSrc");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    setIsLoading(true);
    axios
      .post("/api/orders", data)
      .then(() => {
        toast.success("Order created!");
        router.refresh();
        reset();
        setStep(STEPS.VEHICLE);
        rentModal.onClose();
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) return "Create";
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.VEHICLE) return undefined;
    return "Back";
  }, [step]);

  // let bodyContent = (
  //   <div
  //     className="flex
  //                   flex-col
  //                   gap-8
  //   "
  //   >
  //     <Heading
  //       title="Which of these best describes your place?"
  //       subtitle="Pick a category"
  //     />
  //     <div
  //       className="grid
  //                     grid-cols-1
  //                     md:grid-cols-2
  //                     gap-3
  //                     max-h-[50vh]
  //                     overflow-y-auto
  //     "
  //     >
  //       {categories.map((item) => (
  //         <div key={item.label} className="col-span-1">
  //           <CategoryInput
  //             onClick={(vehicle) => {
  //               setCustomValue("vehicle", vehicle);
  //             }}
  //             selected={vehicle === item.label}
  //             label={item.label}
  //             icon={item.icon}
  //           />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  let bodyContent;

  if (step === STEPS.FEATURES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some basics about your order"
          subtitle="What would you like?"
        />
        <Counter
          title="Vehicle"
          subtitle="What vehicle would you like to wash"
          value={vehicle}
          onChange={(value) => setCustomValue("vehicle", value)}
        />
        <hr />
        <Counter
          title="Type of wash"
          subtitle="Select interior or exterior"
          value={interior}
          onChange={(value) => setCustomValue("interior", value)}
        />
        <hr />
        <Counter
          title="Wax"
          subtitle="Would you like to wax"
          value={wax}
          onChange={(value) => setCustomValue("wax", value)}
        />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Would you like to write about your car wash?"
          subtitle="Short and sweet works best"
        />
        <Input
          id="title"
          label="title"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Thank you!" subtitle="This is the current fee" />
        <Input
          id="price"
          label="price"
          formatPrice
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.VEHICLE ? undefined : onBack}
      title="Airbnb your home!"
      body={bodyContent}
    />
  );
};

export default RentModal;
