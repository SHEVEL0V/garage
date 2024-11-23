/** @format */

import React from "react";
import Image from "next/image";
import ButtonBasket from "@/components/ui/button/basket";
import ButtonStars from "@/components/ui/button/stars";

export default function ProductCard({ item }: { item: number }) {
  return (
    <li className="shadow border p-2 bg-white">
      <div className="text-gray-500 flex justify-between">
        <div>key:{item}</div>
        <div>toptul</div>
      </div>

      <Image
        src="/images/thumb__500_500_0_0_crop.webp"
        alt="logo"
        width={500}
        height={500}
      />
      <div className="text-blue-700">Name ..............</div>
      <div className="flex items-center justify-between">
        <div>
          Price <b>0000</b>
        </div>
        <ButtonBasket />
      </div>
      <ButtonStars />
    </li>
  );
}
