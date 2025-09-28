"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react"; // icons
import Image from "next/image";
import WidthWrapper from "../WidthWrapper";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50 bg-[#F3F3F2]">
      {/* Top Navbar */}
      <WidthWrapper className="flex items-center justify-between py-5">
        <Link href={"/"}>
          <Image src="/logo.svg" alt="logo" width={180} height={36} />
        </Link>
        <button
          className="text-[#2B2B2B] focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} className="cursor-pointer" />
        </button>
      </WidthWrapper>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-72 z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Background with grid */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            'z-10'
          ) }
        />
        <div className="pointer-events-none absolute inset-0 bg-white z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col p-6 gap-6 text-[#2B2B2B]">
          <div className="flex justify-between items-center mb-6">
            <Image src="/logo.svg" alt="logo" width={140} height={32} />
            <button onClick={() => setIsOpen(false)}>
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col gap-5 text-lg font-medium">
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/product" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <Link href="/partner" onClick={() => setIsOpen(false)}>
              For Brands
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/team" onClick={() => setIsOpen(false)}>
              Our Team
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button
                variant="outline"
                className="w-full rounded-[8px] border border-[#D5D5D5] text-[#2B2B2B] bg-white hover:bg-[#CE9F41] hover:text-white"
              >
                Contact
              </Button>
            </Link>
            <Link href="/wholesale" onClick={() => setIsOpen(false)}>
              <Button
                className="w-full rounded-[8px] border border-[#D5D5D5] text-white bg-[#CE9F41] hover:bg-[#F7F6F3] hover:text-[#2B2B2B]"
              >
                Wholesale Enquiry
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
