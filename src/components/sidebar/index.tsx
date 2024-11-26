/** @format */

import Link from "next/link";

const sections = ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5", "Brand 6"];

export default function Sidebar() {
  return (
    <aside className="bg-white dark:bg-slate-300  w-64  p-4 shadow">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <nav>
        <ul>
          {sections.map((name) => (
            <li key={name}>
              <Link
                href="/"
                className="block py-2 px-4 rounded whitespace-nowrap hover:bg-slate-200"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
