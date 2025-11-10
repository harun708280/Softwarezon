"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/support", label: "Support" },
  ];

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  id="main-header"
  className={`fixed left-0 z-50 w-full transition-colors duration-300 ${
    scrolled ? "bg-white shadow-md !top-0" : "bg-transparent"
  }`}
>
  <div className="container mx-auto">
    <nav className="flex items-center justify-between py-3 relative">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={55}
          height={64}
          className="object-contain"
        />
      </Link>

      {/* Desktop Menu */}
      <ul
        className={`hidden lg:flex items-center space-x-8 text-[18px] font-medium ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center space-x-3 lg:space-x-5">
        {/* Cart */}
        <Link href="#" className="relative inline-block">
          <div
            className={`flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 border rounded-full ${
              scrolled
                ? "border-primary text-primary"
                : "border-secondary text-secondary"
            } transition-all duration-300`}
          >
            <ShoppingCart className="w-6 h-6" />
          </div>
          <span
            className={`absolute flex items-center justify-center w-4 h-4 text-xs rounded-full top-1 right-1 lg:top-2 lg:right-3 ${
              scrolled ? "bg-primary text-white" : "bg-white text-primary"
            } transition-all duration-300`}
          >
            2
          </span>
        </Link>

        {/* Whatsapp (Desktop) */}
        <Link
          href="#"
          className={`hidden lg:inline-flex items-center gap-2 border py-[14px] px-[20px] rounded-full text-[18px] font-medium hover:opacity-70 transition ${
            scrolled
              ? "text-[#17A52E] border-[#17A52E]"
              : "text-[#52FFA1] border-[#52FFA1]"
          }`}
        >
          <Image
            src="/images/whatsap.svg"
            alt="Whatsapp"
            width={24}
            height={24}
          />
          <span>Whatsapp Us</span>
        </Link>

        {/* Drawer Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className={`p-2 rounded-md lg:hidden transition-all duration-300 ${
            scrolled ? "invert-0" : "invert"
          }`}
        >
          <Image
            src="/images/Hamburger.svg"
            alt="menu"
            width={40}
            height={40}
          />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <Image src="/images/logo.svg" alt="Logo" width={45} height={45} />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-2 space-y-1 text-base text-gray-800">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 rounded-md hover:bg-gray-100 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-6 ">
          <Link
            href="#"
            className="flex items-center justify-center gap-2 border border-[#17A52E] text-[#17A52E] py-[8px]  lg:px-[20px] rounded-full text-[18px] font-medium hover:opacity-80 transition"
          >
            <Image src="/images/whatsap.svg" alt="" width={20} height={20} />
            <span>Whatsapp Us</span>
          </Link>
        </div>
      </div>
    </nav>
  </div>
</header>

  );
};

export default Navbar;
