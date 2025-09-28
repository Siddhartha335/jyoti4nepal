"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  gsap.fromTo(
    ".hero-overlay",
    { background: "linear-gradient(106deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 100%)" },
    {
      background:
        "linear-gradient(106deg, rgba(0,0,0,0.6) 20%, rgba(61,61,61,0.6) 85%)",
      duration: 1.5,
      ease: "power2.out",
    }
  );
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden">
      {/* Background Image with GSAP ref */}
      <div ref={bgRef} className="absolute top-0 left-0 w-full h-full">
        <Image
          src={"/hero.jpg"}
          alt="Hero Image"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(106.04deg, rgba(0, 0, 0, 0.6) 20%, rgba(61, 61, 61, 0.6) 85%)",
            zIndex: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex mt-24 sm:mt-0 items-center-safe md:items-center px-6 sm:px-10 md:px-16 lg:px-24">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3, delayChildren: 0.5 }}
        >
          <motion.h4
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-semibold text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:leading-[60px]"
          >
            Empowering women through <br />
            <span className="text-[#E8D5A0]">Sustainable Production</span>
          </motion.h4>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-white text-base sm:text-lg mb-6 max-w-lg"
          >
            Creating meaningful employment for marginalized communities while
            producing sustainable, high-quality goods that honor both people and
            planet.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex gap-4 sm:gap-6"
          >
            <Link href="/product">
              <Button
                variant="outline"
                size="lg"
                className="rounded-[8px] px-6 py-4 text-white bg-[#CE9F41] cursor-pointer"
              >
                Explore Products
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="rounded-[8px] px-6 py-4 border border-[#D5D5D5] text-[#CE9F41] bg-white"
            >
              Our Story
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
