"use client";

import { useState, useEffect } from "react";
import HeroWrapper from "../HeroWrapper";
import Leaf from "@/images/leaf.svg";
import Location from "@/images/location.svg";
import Recycle from "@/images/recycle.svg";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Impact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const impacts = [
    {
      logo: <Leaf className="mb-5" />,
      title: "Sustainable materials",
      description:
        "We use sustainable materials, including recycled saris, organic cotton and locally plant-dyed fabric.",
    },
    {
      logo: <Location className="mb-5" />,
      title: "Locally-sourced",
      description:
        "We source as much as possible from within Nepal, reducing the carbon impact of transportation and supporting the Nepali economy.",
    },
    {
      logo: <Recycle className="mb-5" />,
      title: "Reusable products",
      description:
        "Many of our products are reusable and replace high-waste alternatives such as reusable diapers, sanitary pads, and gift packaging.",
    },
  ];

  const testimonials = [
    {
      text: `"Through working at Jyoti I was able to build true friendships and be a part of a community that supports each other."`,
      author: "— Anisa, Staff Care",
    },
    {
      text: `"Jyoti gave me the opportunity to work with dignity while providing for my children."`,
      author: "— Sita, Tailor",
    },
    {
      text: `"I feel proud knowing our products are helping reduce waste in Nepal."`,
      author: "— Maya, Weaver",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="mt-20">
      {/* Section intro */}
      <div className="max-w-4xl mx-auto text-center mb-15 p-5">
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-semibold text-[#2B2B2B] text-xl sm:text-2xl md:text-4xl leading-[48px] mb-2"
        >
          Reducing the environmental impact of production
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg leading-[28px]"
        >
          We dream of a healthy Nepal, with smaller landfills, cleaner air, and
          the elimination of harmful chemicals. At Jyoti, we’re doing our part
          to show that it’s possible!
        </motion.p>
      </div>

      <HeroWrapper>
        {/* Impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-15">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.08)" }}
              className="bg-white border border-[#EAEAEA] shadow-[#FFFFFF0A] shadow-2xs flex flex-col items-center p-5 rounded-xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 250, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
              >
                {impact.logo}
              </motion.div>
              <h4 className="text-2xl leading-[28px] font-medium mb-5">
                {impact.title}
              </h4>
              <p className="text-[#7E7167] leading-[100%] pb-5 text-center">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="bg-[#f1ecdc] text-center py-5 px-5 rounded-xl relative min-h-[160px] flex flex-col justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={handlePrev}
              className="hidden sm:flex absolute left-[-50px] lg:left-[-150px] top-1/2 -translate-y-1/2"
            >
              <CircleArrowLeft className="w-8 h-8 sm:w-8 sm:h-8" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <h4 className="text-xl md:text-2xl leading-[40px] font-semibold mb-4 max-w-3xl">
                  {testimonials[currentIndex].text}
                </h4>
                <p className="text-[#CE9F41]">
                  {testimonials[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={handleNext}
              className="hidden sm:flex absolute right-[-50px] lg:right-[-160px] top-1/2 -translate-y-1/2"
            >
              <CircleArrowRight className="w-8 h-8 sm:w-8 sm:h-8" />
            </button>
          </motion.div>

          {/* Mobile arrows */}
          <div className="flex sm:hidden items-center justify-center gap-8 mt-3">
            <button onClick={handlePrev}>
              <CircleArrowLeft className="w-6 h-6" />
            </button>
            <button onClick={handleNext}>
              <CircleArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </HeroWrapper>
    </div>
  );
};

export default Impact;
