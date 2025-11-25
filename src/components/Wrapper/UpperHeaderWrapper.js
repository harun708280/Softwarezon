
"use client";
import { usePathname } from "next/navigation";
import UpperHeader from "../shared/UpperHeader/UpperHeader";


export default function UpperHeaderWrapper() {
  const pathname = usePathname();
  if (pathname === "/404") return null;
  return <UpperHeader />;
}
