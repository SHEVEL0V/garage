/** @format */
import React from "react";
import Link from "next/link";
import ButtonUser from "../ui/button/user";
import ButtonLanguage from "../ui/button/language";

export default function Header() {
  return (
    <header className="bg-slate-500 p-4 flex justify-between text-gray-100">
      <ButtonLanguage />
      <nav className="flex gap-2 text-sm uppercase text-gray-100">
        <Link href="/">Про компанію</Link>
        <Link href="/about">Інформація</Link>
        <Link href="/about">Оплата і доставка</Link>
        <Link href="/about">Гарантія та сервіс</Link>
        <Link href="/contact">Контакти</Link>
      </nav>
      <ButtonUser />
    </header>
  );
}
