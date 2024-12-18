/** @format */

import React from "react";

const buttonName = [
  "ТОП Товари",
  "Підйомники",
  "Шиномонтаж",
  "Автосканери",
  "Домкрати",
  "Компресори",
  "Фарбопульти",
  "Набори інструментів",
  "Набори ключів",
  "Гайковерти",
];

export default function NawProducts() {
  return (
    <section className=" mb-2 flex flex-col items-center">
      <ul className="flex gap-1 w-full  overflow-auto ">
        {buttonName.map((name) => (
          <li
            key={name}
            className="p-1 rounded bg-slate-50 hover:bg-slate-200 dark:bg-slate-300 shadow border flex whitespace-nowrap"
          >
            <button>{name}</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
