"use client"

import { useState } from "react"
import Image from "next/image"
import HeroWrapper from "../HeroWrapper"
import { ExternalLink } from "lucide-react"
import { Button } from "../ui/button"

const Stories = () => {
  const limit = 100

  // store per-card expanded states
  const [expanded, setExpanded] = useState<boolean[]>([])

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
  ]

  const toggleExpand = (index: number) => {
    setExpanded((prev) => {
      const copy = [...prev]
      copy[index] = !copy[index] 
      return copy
    })
  }

  return (
    <div className="mt-12">
      <div className="text-center max-w-4xl mx-auto space-y-2 p-5 md:p-0">
        <h4 className="text-2xl lg:text-4xl text-[#2B2B2B] font-semibold leading-[48px]">
          Stories of change
        </h4>
        <p className="text-lg leading-[28px]">
          Every stitch tells a story. Discover the journey of crafting in Nepal,
          the impact of your support, and the beauty of creating change
          together.
        </p>
      </div>
      <HeroWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {stories.map((story, index) => (
            <div key={index} className="stories rounded-xl">
              <div className="relative h-[290px] w-full">
                <Image
                  src={story.image}
                  alt="Products"
                  fill
                  className="object-cover object-top rounded-t-xl"
                />
              </div>
              <div className="p-5">
                <div className="w-full flex justify-between mb-3">
                  <p className="font-semibold text-lg leading-[100%] mb-2 text-[#5F3824] w-[75%]">
                    {story.title}
                  </p>
                  <p className="text-[#B3B3B3] text-sm float-right">
                    {story.readtime} min read
                  </p>
                </div>
                {expanded[index] ? (
                  <p className="text-[#595959] text-sm mb-5">
                    {story.description}{" "}
                    <span
                      className="text-[#FF6F61] cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      Less
                    </span>
                  </p>
                ) : (
                  <p className="text-[#595959] text-sm mb-5">
                    {story.description.slice(0, limit)}
                    {story.description.length > limit && "..."}{" "}
                    <span
                      className="text-[#FF6F61] cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      More
                    </span>
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <p className="text-[#595959] text-sm">{story.date}</p>
                  <p className="text-sm flex items-center gap-1 cursor-pointer">
                    Read More <ExternalLink size={14} className="inline-block" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
            <Button 
                variant="outline"
                size="lg"
                className="mt-8 mb-10 rounded-[8px] px-6 py-4 border border-[#D5D5D5] bg-[#CE9F41] text-white"
            >
                Read More
            </Button>
        </div>
      </HeroWrapper>
    </div>
  )
}

export default Stories
