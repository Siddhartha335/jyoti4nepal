"use client";

import HeroWrapper from "../HeroWrapper";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { easeInOut, Variants } from "framer-motion";

const Products = () => {

  const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: easeInOut,
    },
  }),
};

  return (
    <HeroWrapper>
      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="shadow-subtle rounded-md overflow-hidden bg-white"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.12)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {/* Image */}
            <div className="relative h-[200px] w-full">
              <Image
                src="/product.jpg"
                alt="Products"
                fill
                className="object-cover rounded-t"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
                viewport={{ once: true }}
              >
                <Button className="absolute top-4 left-4 h-0 bg-[#E3DACF] border border-[#EAEAEA] text-xs text-[#2B2B2B] rounded-full px-1.5 py-2.5 shadow">
                  Best Seller
                </Button>
              </motion.div>
            </div>

            {/* Text */}
            <div className="p-5 text-[#2B2B2B]">
              <h4 className="font-semibold text-2xl leading-[100%] mb-2">
                Canvas zippered totes
              </h4>
              <p className="text-sm">
                Durable zippered bag with an interior zippered pocket.
                Customizable size.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore all products button */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Link href={"/product"}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="mt-8 rounded-[8px] px-6 py-4 border border-[#D5D5D5] bg-[#CE9F41] text-white cursor-pointer"
            >
              Explore all Products
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </HeroWrapper>
  );
};

export default Products;
