"use client";

import NavBar from "@/components/layout/NavBar";
import { usePathname } from "next/navigation";

export default function ConditionalNavBar() {
  const showNavBar = ["/", "/login", "/register"];
  const pathname = usePathname();

  if (!showNavBar.includes(pathname)) {
    return null;
  }
  return <NavBar />;
}
