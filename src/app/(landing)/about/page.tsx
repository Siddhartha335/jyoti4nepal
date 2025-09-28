"use client";

import { motion } from "framer-motion";
import HeroWrapper from "@/components/HeroWrapper";
import Image from "next/image";
import React from "react";
import Scissors from "@/images/scissors.svg";
import Sewing from "@/images/sewing.svg";
import { StorySection } from "@/components/landing/Section1";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";

const page = () => {
  const works = [
    {
      icon: <Scissors />,
      title: "Central Sewing Center",
      description:
        "Our seamstresses work at our central sowing center in Lalitpur - our central hub and home to our sowing machinery!",
    },
    {
      icon: <Sewing />,
      title: "Home Weavers",
      description:
        "Home weavers with mobility limitations work from home, with regular local gatherings for support and training.",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden">
        {/* Background image with fade + zoom animation */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-[300px] md:h-[580px]"
        >
          <Image
            src="/about1.jpg"
            alt="About Us"
            width={1430}
            height={200}
            priority
            className="object-cover z-0 w-full h-[300px] md:h-[580px]"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-0 left-0 w-full h-full bg-[#00000033] z-10"
        />

        {/* Title */}
        <div className="absolute inset-0 z-20 flex items-center px-6 sm:px-10 md:px-16 lg:px-24">
          <motion.h4
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-semibold text-3xl sm:text-4xl md:text-5xl text-white leading-[60px]"
          >
            About Us
          </motion.h4>
        </div>
      </div>

      {/* Content */}
      <div className="products-bg mt-10">
        <HeroWrapper>
          {/* Intro */}
          <div className="text-left md:text-center mb-15">
            <h4 className="font-medium text-3xl md:text-4xl mb-10">
              It all began with reusable diapers...
            </h4>
            <p className="text-[#2B2B2B] text-lg font-light max-w-4xl mx-auto leading-[28px]">
              Jyoti began in 2018 as &quot;Babu&apos;s Bum&quot; with a vision to
              empower Nepali women with barriers to employment with a great job
              making re-usable diapers. As our team has grown, we now offer a
              range of pre-made and made-to-order handmade and customizable
              fabric products for sale in Nepal and around the world.
            </p>
          </div>

          {/* Team Section */}
          <div>
            <h4 className="text-left md:text-center font-medium text-3xl md:text-4xl mb-7">
              The Jyoti team works across the Kathmandu Valley
            </h4>
          </div>
          <div className="flex justify-center gap-10 md:gap-15 flex-wrap mb-15">
            {works.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                }}
                className="space-y-3 bg-[#FFFFFF] border border-[#EAEAEA] rounded-md work-shadow p-5 max-w-sm"
              >
                <div className="flex items-center justify-center">{work.icon}</div>
                <p className="text-2xl text-center">{work.title}</p>
                <p className="text-sm text-center">{work.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Story sections (already animated) */}
          <StorySection
            title="Environmentally sustainable"
            paragraphs={[
              "We create environmentally sustainable products designed for re-use, not quick consumption. Whenever possible, we source environmentally-friendly materials such as natural plant-died fabrics. We make sure to recycle all waste fabric from custom orders in functional everyday items that are donated and used locally.",
            ]}
            buttonText={["Instagram", "Facebook"]}
            imageSrc="/about2.png"
            imageAlt="About us"
            buttonLogo={[
              <FaInstagram key="instagram" />,
              <LuFacebook key="facebook" />,
            ]}
            imageBtn="7+ years Average Tenure"
          />

          <StorySection
            title="Creating livelihoods for women"
            paragraphs={[
              "Finding dignified work in Nepal is extremely difficult for people with barriers to employment. Our sowing center gives single mothers, women with disabilities, or challenging personal circumstances an opportunity to pull themselves out of poverty.",
            ]}
            imageSrc="/about3.png"
            imageAlt="About us"
            reverse
          />

          <StorySection
            title="Passionately Nepali"
            paragraphs={[
              "We do our best to support other Nepali businesses by purchasing locally-produced supplies. We give back to women and babies in the community by donating a portion of our classic re-usable diapers and sanitary pads to those in need.",
            ]}
            imageSrc="/about4.jpg"
            imageAlt="About us"
          />
        </HeroWrapper>
      </div>
    </>
  );
};

export default page;
