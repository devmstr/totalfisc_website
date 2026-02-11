"use client";
import axios from "axios";
import React from "react";
import OfferList from "./OfferList";
import { Price } from "@/types/price";
import { useRouter } from "next/navigation";

const PricingBox = ({ product }: { product: Price }) => {
  const router = useRouter();
  const handleSubscription = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    window.location.href = "https://totalfisc-dashboard-9xyx.vercel.app/";
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 flex h-full flex-col overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        {product.recommanded && (
          <p className="absolute right-[-35px] top-[47px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
            Recommandé
          </p>
        )}

        <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
          {product.nickname}
        </span>

        <div className="mb-[40px] flex-1">
          <h3 className="mb-5 text-lg font-medium text-dark dark:text-white">
            Fonctionnalités incluses
          </h3>
          <div className="space-y-3">
            {product?.offers.map((offer, i) => (
              <OfferList key={i} text={offer} />
            ))}
          </div>
        </div>

        <div className="mt-auto w-full">
          <button
            onClick={handleSubscription}
            className="inline-block w-full rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90"
          >
            S&apos;inscrire
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
