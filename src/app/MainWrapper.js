"use client";

import { usePathname } from "next/navigation";

export default function MainWrapper({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className={`flex-grow ${isHome ? "mt-0" : "mt-24 md:mt-24 lg:mt-28"}`}>
      {children}
    </main>
  );
}
