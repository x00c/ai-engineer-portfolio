"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "@/components/sections/Footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const isHome = usePathname() === "/";
  return (
    <div className="flex min-h-full flex-col">
      {!isHome && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isHome && <Footer />}
    </div>
  );
}
