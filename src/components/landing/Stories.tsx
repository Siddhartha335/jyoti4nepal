"use client";

import { useState } from "react";
import Image from "next/image";
import HeroWrapper from "../HeroWrapper";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Stories = () => {
  const limit = 100;
  const [expanded, setExpanded] = useState<boolean[]>([]);

  const stories = [
    {
      image: "/story1.jpg",
      title: "How a Single Bag Changed a Family’s Future",
      description:
        "When one artisan joined Jyoti4Nepal, she transformed her family’s life. This is the story of hope, opportunity, and the power of meaningful work.",
      readtime: 5,
      date: "Aug 2025",
    },
    {
      image: "/story2.jpg",
      title: "Sita’s Journey: From Learner to Team Leader",
      description:
        "Sita Sharma never imagined her skills would one day support her family and inspire others. In this interview, she shares her story of growth, resilience, and leadership.",
      readtime: 5,
      date: "Aug 2025",
    },
    {
      image: "/story3.jpg",
      title: "The Making of a Reusable Cloth Diaper",
      description:
        "From fabric selection to careful stitching, discover the process behind crafting diapers that are gentle on babies and sustainable for the environment.",
      readtime: 6,
      date: "Aug 2025",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpanded((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  return (
    <div className="mt-12">
      {/* Section title */}
      <div className="text-center max-w-4xl mx-auto space-y-2 p-5 md:p-0">
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-4xl text-[#2B2B2B] font-semibold leading-[48px]"
        >
          Stories of change
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg leading-[28px]"
        >
          Every stitch tells a story. Discover the journey of crafting in Nepal,
          the impact of your support, and the beauty of creating change
          together.
        </motion.p>
      </div>

      <HeroWrapper>
        {/* Story grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="stories rounded-xl overflow-hidden bg-white shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
              }}
            >
              {/* Image */}
              <motion.div
                className="relative h-[290px] w-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={story.image}
                  alt="Story"
                  fill
                  className="object-cover object-top rounded-t-xl"
                />
              </motion.div>

              {/* Text content */}
              <div className="p-5">
                <div className="w-full flex justify-between mb-3">
                  <p className="font-semibold text-lg leading-[100%] mb-2 text-[#5F3824] w-[75%]">
                    {story.title}
                  </p>
                  <p className="text-[#B3B3B3] text-sm">{story.readtime} min read</p>
                </div>

                <AnimatePresence initial={false}>
                  {expanded[index] ? (
                    <motion.p
                      key="expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-[#595959] text-sm mb-5"
                    >
                      {story.description}{" "}
                      <span
                        className="text-[#FF6F61] cursor-pointer"
                        onClick={() => toggleExpand(index)}
                      >
                        Less
                      </span>
                    </motion.p>
                  ) : (
                    <motion.p
                      key="collapsed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-[#595959] text-sm mb-5"
                    >
                      {story.description.slice(0, limit)}
                      {story.description.length > limit && "..."}{" "}
                      <span
                        className="text-[#FF6F61] cursor-pointer"
                        onClick={() => toggleExpand(index)}
                      >
                        More
                      </span>
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between">
                  <p className="text-[#595959] text-sm">{story.date}</p>
                  <motion.p
                    whileHover={{ x: 3 }}
                    className="text-sm flex items-center gap-1 cursor-pointer"
                  >
                    Read More <ExternalLink size={14} className="inline-block" />
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="mt-8 mb-10 rounded-[8px] px-6 py-4 border border-[#D5D5D5] bg-[#CE9F41] text-white"
          >
            Read More
          </Button>
        </motion.div>
      </HeroWrapper>
    </div>
  );
};

export default Stories;
