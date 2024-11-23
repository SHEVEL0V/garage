/** @format */

import React from "react";
import ProductCard from "../card";

export default function ListProducts({ data }: { data: number[] }) {
  return (
    <section>
      <ul className="grid gap-2 p-2  grid-cols-1 sm:grid-cols- md:grid-cols-2 lg:grid-cols-4  ">
        {data.map((item) => (
          <ProductCard key={item} item={item} />
        ))}
      </ul>
    </section>
  );
}
