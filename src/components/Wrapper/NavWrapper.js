
"use client";
import { usePathname } from "next/navigation";
import Navbar from "../shared/Navbar/Navbar";


export default function NavWrapper() {
  const pathname = usePathname();
  const hideLayout = pathname === "/404";

  if (hideLayout) return null;
  return <div className="sticky top-0 z-[9998]"><Navbar /></div>;
}
