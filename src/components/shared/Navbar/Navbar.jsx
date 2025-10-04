"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className="flex items-center justify-between py-2.5 relative"
          aria-label="Main navigation"
        >
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

          {/* Desktop Navigation */}
          <ul
            className={`hidden md:flex md:items-center md:space-x-8 text-[18px] font-medium transition-colors duration-300 ${
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
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Cart */}
            <Link href="#" className="relative inline-block">
              <div
                className={`flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border rounded-full transition-colors duration-300 ${
                  scrolled
                    ? "border-primary text-primary"
                    : "border-secondary text-secondary"
                }`}
              >
                <img
                  id="cart-icon"
                    src={scrolled ? "/images/cart-3.png" : "/images/cart2.svg"}
                  alt="Cart"
                  class="w-6 h-6 transition-all duration-300"
                />
              </div>
              <span
                className={`absolute flex items-center justify-center w-4 h-4 text-xs rounded-full top-1 right-1 md:top-2 md:right-3 transition-colors duration-300 ${
                  scrolled ? "bg-primary text-white" : "bg-white text-primary"
                }`}
              >
                2
              </span>
            </Link>

            {/* Whatsapp */}
            <Link
              href="#"
              className={`hidden md:inline-flex items-center gap-2 border py-[14px] px-[20px] rounded-full text-[18px] font-medium hover:opacity-70 transition ${
                scrolled ? "text-[#17A52E] border-[#17A52E]" : "text-[#52FFA1] border-[#52FFA1]"
              }`}
            >
              <Image src="/images/whatsap.svg" alt="Whatsapp" width={24} height={24} />
              <span>Whatsapp Us</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md md:hidden transition-colors duration-300 ${
                scrolled ? "invert-0" : "invert"
              }`}
              aria-controls="primary-menu"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <Image
                src="/images/Hamburger.svg"
                alt="menu"
                width={40}
                height={40}
                className="transition-all duration-300"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
<div
  id="primary-menu"
  className={`absolute left-0 right-0 w-full mt-2 bg-white shadow-md md:hidden top-16 rounded-b-md overflow-hidden transition-all duration-500 ease-in-out ${
    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <ul className="flex flex-col p-4 space-y-2 text-base text-black">
    {navLinks.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className="block px-2 py-2 rounded hover:bg-gray-50"
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </Link>
      </li>
    ))}

    <li className="pt-2 border-t">
      <Link
        href="#"
        className="flex w-full justify-center md:hidden items-center gap-2 text-[#52FFA1] border py-[14px] px-[20px] rounded-full text-[18px] font-medium hover:opacity-70 transition border-[#52FFA1]"
      >
        <Image src="/images/whatsap.svg" alt="" width={20} height={20} />
        <span>Whatsapp Us</span>
      </Link>
    </li>
  </ul>
</div>

          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
