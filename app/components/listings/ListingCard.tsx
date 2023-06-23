"use client";
import { SafeListing, SafeReservation, SafeUser } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface ListingCardProps {
  //   data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

export const ListingCard: React.FC<ListingCardProps> = ({
  //   data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();

  return (
    <div
      className="col-span-1 p-4 cursor-pointer group"
      onClick={() => router.push(`/listings/${data.id}`)}
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="aspect-square 
                    w-full
                    relative
                    overflow-hidden
                    rounded-xl"
        >
          <Image
            src={"/images/car-wash-background.jpg"}
            fill
            alt="Listings"
            className="object-cover
                      h-full
                      w-full
                      group 
                      hover:scale-110
                      transition"
          />
          <div className="font-bold p-4 w-full bg-yellow-500 opacity-90 text-white absolute text-lg bottom-0 group-hover:-translate-y-0 transition-transform translate-y-20 duration-500">
            price, 30$
          </div>
        </div>
      </div>
    </div>
  );
};
