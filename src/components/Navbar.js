"use client";
import NavLinks from "@/Atoms/NavLinks";
import React, { useState, useRef, useEffect } from "react";
import "@/styles/ContactUs.css";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logo/Logo_new.webp";
import { FiMail } from "react-icons/fi";


const Navbar = () => {
  const pathname = usePathname();
  const [highlightStyle, setHighlightStyle] = useState({});
  const containerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHomeTop, setIsHomeTop] = useState(true);

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Digital Solutions ", href: "/digitalsolutions" },
    { label: "Case Studies", href: "/casestudies" },
    { label: "Blogs", href: "https://blog.triospheretech.com" },
    { label: "Careers", href: "/careers" }
  ];

  /* 👇 Detect if user is at the top of Home page */
  useEffect(() => {
    if (pathname !== "/") {
      setIsHomeTop(false);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY < 800) setIsHomeTop(true);
      else setIsHomeTop(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
  if (!containerRef.current) return;

  requestAnimationFrame(() => {
    const matchedItem = navItems.find(item => pathname.startsWith(item.href));

    if (!matchedItem) {
      setHighlightStyle({});
      return;
    }

    const activeBtn = containerRef.current.querySelector(`[href="${matchedItem.href}"]`);
    if (!activeBtn) return;

    const rect = activeBtn.getBoundingClientRect();
    const parentRect = containerRef.current.getBoundingClientRect();

    setHighlightStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
      height: rect.height,
    });
  });
}, [pathname]);



  /* Disable scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`px-0 py-4 fixed top-0 w-full z-50 transition-all duration-300 
        ${pathname === "/" && isHomeTop
            ? "bg-transparent backdrop-blur-xl border-b border-white/10"
            : "bg-white/50 backdrop-blur-md"
          }`}
      >
        <div className="w-full max-w-7xl px-6
        lg:px-8 mx-auto">

          <div className="">
            <div className="w-full flex flex-col lg:flex-row justify-between">
              {/* Logo + Mobile Hamburger */}
            <div className="flex justify-between items-center lg:flex-row">
              <Link href="/">
                <Image
                  src={pathname === "/" && isHomeTop ? Logo : Logo}
                  alt="Triosphere Logo"
                  className="h-10 md:h-12  w-auto transition-all duration-300"
                />
              </Link>

              <button
                className={`lg:hidden text-2xl focus:outline-none transition-all duration-300 ${pathname === "/" && isHomeTop ? "text-black" : "text-black"
                  }`}
                onClick={() => setMenuOpen(true)}
              >
                ☰
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden  lg:flex w-full items-center justify-center">
              <ul
                ref={containerRef}
                className={`relative flex items-center justify-center flex-col py-4 px-3 mt-4 lg:mt-0 lg:mx-auto 
                lg:flex-row gap-2 rounded-full p-1 
                ${pathname === "/" && isHomeTop
                    ? "  backdrop-blur-3xl"
                    : ""}`}
              >
                {highlightStyle.width && (
                  <motion.div
                    className="absolute rounded-full bg-transparent border border-black/10 shadow-sm"
                    animate={highlightStyle}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {navItems.map(({ label, href }) => (
                  <li key={label}>
                    <NavLinks
  label={label}
  href={href}
  isActive={pathname.startsWith(href)}
  className={`transition-all ${pathname === "/" && isHomeTop ? "text-zinc-800" : "text-black"}`}
/>

                  </li>
                ))}

              </ul>

              <button
                className={`ml-4 whitespace-nowrap animated-button transition-all duration-300 ${pathname === "/" && isHomeTop ? "text-black border-black" : "text-black"
                  }`}
              >
                <span>
                  <Link href="/contact">Contact Us</Link>
                </span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-0 left-0 w-full h-[1px] ${pathname === "/" && isHomeTop
          ? "bg-[linear-gradient(to_right,white,[#232323],white)]"
          : "bg-[linear-gradient(to_right,white,blue,white)]"
          }`}></div>

          </div>
 </nav>
        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Dim Background */}
              <motion.div
                className="fixed inset-0 bg-black/40 z-[9998]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />

              {/* Sidebar */}
              <motion.div
                className="fixed top-0 left-0 w-[80%] max-w-xs h-[100dvh] bg-white z-[9999] shadow-xl flex flex-col"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              >
                {/* Header */}
                <div className="flex justify-between items-center py-4 px-4 border-b border-zinc-200">
                 <Link href="/">
                <Image
                  src={pathname === "/" && isHomeTop ? Logo : Logo}
                  onClick={() => setMenuOpen(false)}
                  alt="Triosphere Logo"
                  className="h-9 md:h-12 w-auto transition-all duration-300"
                />
              </Link>
                  <button
                    className="text-lg text-zinc-200 bg-zinc-800 p-1 px-2.5 rounded-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    ✕
                  </button>
                </div>

                {/* SCROLLABLE MENU ITEMS */}
                <div className="flex-1 overflow-y-auto px-4 py-4">
                  <ul className="flex flex-col gap-3">
                    {navItems.map(({ label, href }) => (
                      <li key={label}>
                        <Link
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          className={`block py-3 px-3 rounded-md text-base transition 
${pathname.startsWith(href) ? "bg-zinc-200 font-semibold" : "hover:bg-zinc-100"}`}

                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* STICKY BOTTOM */}
                <div className="px-4 py-6 border-t border-zinc-200 bg-white">
                  {/* Social Icons */}
                  <div className="flex items-center justify-start gap-5 mb-2">

                    {/* Instagram */}
                    <Link
                      href="https://www.instagram.com/triospheretech/"
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center"
                    >
                      <FaInstagram className="text-xl text-zinc-700" />
                    </Link>

                    {/* LinkedIn */}
                    <Link
                      href="https://www.linkedin.com/company/triospheretech/"
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center"
                    >
                      <FaLinkedinIn className="text-xl text-zinc-700" />
                    </Link>

                    {/* WhatsApp */}
                    <Link
                      href="https://wa.me/918320333166"   // <-- replace with your WhatsApp number
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center"
                    >
                      <FaWhatsapp className="text-xl text-zinc-700" />
                    </Link>
                     <Link
                      href="mailto:info@triospheretech.com"  // replace with your email
                      className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center"
                    >
                      <FiMail className="text-xl text-zinc-700" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center gap-10 mb-5">
                    {/* <Link
                      href="tel:+91XXXXXXXXXX"  // replace with your number
                      className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center"
                    >
                      <FiPhone className="text-2xl text-zinc-700" />
                    </Link> */}

                    {/* Email */}
                    {/* <Link
                      href="mailto:yourmail@gmail.com"  // replace with your email
                      className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center"
                    >
                      <FiMail className="text-2xl text-zinc-700" />
                    </Link> */}

                  </div>


                  {/* Button */}
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="block bg-black text-white text-center py-3 rounded-xl transition-all duration-300 active:scale-105 font-medium w-full"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>



     
    </>
  );
};

export default Navbar;
