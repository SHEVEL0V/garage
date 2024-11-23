/** @format */

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-600 text-slate-100 flex p-4">
      <p>&copy; 2024 Всі права захищено. Компанія Garage.</p>
      <nav className="ml-auto">
        <ul>
          <li>
            <Link href="#">Політика конфіденційності</Link>
          </li>
          <li>
            <Link href="#">Умови використання</Link>
          </li>
          <li>
            <Link href="#">Контакти</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
