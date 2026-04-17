"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="MoverTotes - Moving Made Easy" width={460} height={200} className="h-14 w-auto sm:h-20" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-700 transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-700 transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 transition-colors hover:text-primary">
            Contact
          </Link>
          <Link
            href="/booking"
            className="rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            <Link href="/" className="text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <Link
              href="/booking"
              className="mt-2 rounded-full bg-secondary px-6 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
