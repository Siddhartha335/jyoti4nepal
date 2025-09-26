"use client"

import { useState, useEffect } from "react"
import HeroWrapper from "../HeroWrapper"
import Leaf from "@/images/leaf.svg"
import Location from "@/images/location.svg"
import Recycle from "@/images/recycle.svg"
import { CircleArrowLeft,CircleArrowRight } from "lucide-react"

const Impact = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const impacts = [
        {
            logo: <Leaf className="mb-5" />,
            title: "Sustainable materials",
            description: "We use sustainable materials, including recycled saris, organic cotton and locally plant-dyed fabric."
        },
        {
            logo: <Location className="mb-5" />,
            title: "Locally-sourced",
            description: "We source as much as possible from within Nepal, reducing the carbon impact of transportation and supporting the Nepali economy."
        },
        {
            logo: <Recycle className="mb-5" />,
            title: "Reusable products",
            description: "Many of our products are reusable and replace high-waste alternatives such as reusable diapers, sanitary pads, and gift packaging."
        },
    ]

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
    }, 10000);

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
    <div className="mt-20 md:mt-40">
        <div className=" max-w-4xl mx-auto text-center mb-15 p-5">
            <h4 className="font-semibold text-[#2B2B2B] text-xl sm:text-2xl md:text-4xl leading-[48px] mb-2">Reducing the environmental impact of production</h4>
            <p className="text-lg leading-[28px]">We dream of a healthy Nepal, with smaller landfills, cleaner air, and the elimination of harmful chemicals. At Jyoti, we’re doing our part to show that it’s possible!</p>
        </div>
        <HeroWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-15">
                {impacts.map((impact,index) => (
                    <div key={index} className="bg-white border border-[#EAEAEA] shadow-[#FFFFFF0A] shadow-2xs flex flex-col items-center p-5 rounded-xl">
                        {impact.logo}
                        <h4 className="text-2xl leading-[28px] font-medium mb-5">{impact.title}</h4>
                        <p className="text-[#7E7167] leading-[100%] pb-5 text-center">{impact.description}</p>
                    </div>
                ))}
            </div>
            {/* Testimonials */}
            <div className="flex flex-col items-center gap-4">
            {/* Testimonial content */}
            <div className="bg-[#f1ecdc] text-center py-5 px-5 rounded-xl relative">
                {/* Desktop/Tablet arrows (hidden on small) */}
                <button
                onClick={handlePrev}
                className="hidden sm:flex absolute left-[-50px] lg:left-[-150px] top-1/2 -translate-y-1/2"
                >
                <CircleArrowLeft className="w-8 h-8 sm:w-8 sm:h-8" />
                </button>

                <h4 className="text-xl md:text-2xl leading-[40px] font-semibold mb-4 max-w-3xl">
                {testimonials[currentIndex].text}
                </h4>
                <p className="text-[#CE9F41]">
                {testimonials[currentIndex].author}
                </p>

                <button
                onClick={handleNext}
                className="hidden sm:flex absolute right-[-50px] lg:right-[-160px] top-1/2 -translate-y-1/2"
                >
                <CircleArrowRight className="w-8 h-8 sm:w-8 sm:h-8" />
                </button>
            </div>

            {/* Mobile arrows (shown only on small) */}
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
  )
}

export default Impact