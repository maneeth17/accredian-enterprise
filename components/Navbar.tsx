"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs", dropdown: true },
  { name: "About Us", href: "/about" },
];

const programItems = [
  { name: "Product & Innovation", href: "/programs" },
  { name: "Gen-AI Mastery", href: "/programs" },
  { name: "Leadership", href: "/programs" },
  { name: "Tech & Data", href: "/programs" },
];

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProgramsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProgramsClick = () => {
    router.push("/programs");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-navy">
            Accredian
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Home Link */}
            <Link
              href="/"
              className="font-medium transition-colors text-text-primary hover:text-gold"
            >
              Home
            </Link>

            {/* Programs Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                onMouseEnter={() => setIsProgramsOpen(true)}
                className="flex items-center gap-1 font-medium transition-colors text-text-primary hover:text-gold"
              >
                Programs
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${isProgramsOpen ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {isProgramsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, visibility: "hidden" }}
                    animate={{ opacity: 1, y: 0, visibility: "visible" }}
                    exit={{ opacity: 0, y: 10, visibility: "hidden" }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-border py-2"
                    onMouseLeave={() => setIsProgramsOpen(false)}
                  >
                    <button
                      onClick={handleProgramsClick}
                      className="w-full text-left px-4 py-2 text-sm font-semibold text-navy border-b border-border hover:bg-bg-alt"
                    >
                      View All Programs
                    </button>
                    {programItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-text-primary hover:bg-bg-alt hover:text-navy transition-colors"
                        onClick={() => setIsProgramsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Link */}
            <Link
              href="/about"
              className="font-medium transition-colors text-text-primary hover:text-gold"
            >
              About Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button size="sm">Contact Sales</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-navy" />
            ) : (
              <Menu className="w-6 h-6 text-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block py-2 text-text-primary font-medium hover:text-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/programs"
                className="block py-2 text-text-primary font-medium hover:text-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/about"
                className="block py-2 text-text-primary font-medium hover:text-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Contact Sales</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}