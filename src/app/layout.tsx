/** @format */

import type { Metadata } from "next";

import "./globals.css";

// --fonts --------------------------------

//--meta data --------------------------------
export const metadata: Metadata = {
  title: "Garage",
  description: "Garage tools online store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-slate-100 dark:bg-slate-500 text-gray-700 transition-colors  `}
      >
        {children}
      </body>
    </html>
  );
}
