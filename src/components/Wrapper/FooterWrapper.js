
"use client";
import { usePathname } from "next/navigation";
import Footer from "../shared/Footer/Footer";


export default function FooterWrapper() {
  const pathname = usePathname();
  if (pathname === "/404") return null;
  return <Footer />;
}
