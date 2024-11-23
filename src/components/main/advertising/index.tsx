/** @format */

import Image from "next/image";
import React from "react";

export default function Advertising() {
  return (
    <section className="flex p-2">
      <div className="border p-2 bg-slate-300 w-full justify-center  flex gap-2">
        <Image
          src="/images/thumb__780_320_0_0_crop2.webp"
          alt="logo2"
          width={500}
          height={300}
        />
        <Image
          src="/images/thumb__780_320_0_0_crop.webp"
          alt="logo"
          width={500}
          height={300}
        />
      </div>
    </section>
  );
}
