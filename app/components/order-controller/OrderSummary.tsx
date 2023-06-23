import React from "react";

interface OrderSummaryProps {
  totalPrice: number;
  isDisabled: boolean;
  onSubmit: () => void;
  formValues: any;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  isDisabled,
  totalPrice,
  onSubmit,
  formValues,
}) => {
  console.log("🚀 ~ file: OrderSummary.tsx:31 ~ formValues:", formValues);
  const { wax, polish, interior, exterior, vehicle } = formValues;
  const orderInfo = [wax, polish, interior, exterior, vehicle];
  return (
    <div className="flex flex-col">
      <h1 className="">Total price is: {totalPrice}$</h1>
      {orderInfo.map((item) => (
        <div>{orderInfo[item]}</div>
      ))}
      <button
        disabled={isDisabled}
        onClick={onSubmit}
        className="w-32 h-12 border-[1px] m-auto rounded-md"
        type="submit"
      >
        Order
      </button>
    </div>
  );
};
