'use client'

import HeroWrapper from '@/components/HeroWrapper'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Name from "@/images/name.svg"
import Tip from "@/images/tip.svg"
import { motion } from 'framer-motion'
import gsap from 'gsap'

const Page = () => {
  const [active, setActive] = useState<string>('Bags')
  const gridRef = useRef<HTMLDivElement>(null)

  const buttons = [
    'Bags',
    'From the loom',
    'Baby products',
    'Coffee & kitchen',
    'All-natural hygiene',
    'Other classics'
  ]

  const steps = [
    "Choose from our customer favorites below or design your own fabric product",
    "Get in touch with us for a quote & estimated time to complete and ship your order",
    "Send us your design and/or custom print specifications",
    "We’ll create a test product and send photos for your approval",
    "Our team will get to work on your order",
    "We’ll choose the best shipping option based on your order size and location",
    "Receive your order and sell or gift your sustainable products!",
  ]

  const reverse = false

  // 🔥 GSAP animation on category change
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.product-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
        }
      )
    }
  }, [active])

  return (
    <>
      <HeroWrapper>
        {/* Header */}
        <motion.div
          className='text-[#2B2B2B] text-center pt-10 mb-7'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h4 className='font-medium text-3xl md:text-4xl mb-3'>Our Products</h4>
          <p className='text-lg font-light'>Every order empowers Nepali women</p>
        </motion.div>

        {/* Category buttons */}
        <div
          className='max-w-5xl mx-auto mb-8 bg-[#F7F6F3] rounded-[50px] p-2 overflow-x-auto scrollbar-hide'
          style={{ boxShadow: '0px 0px 4px 0px #00000040' }}
        >
          <div className='flex flex-nowrap justify-between gap-2 min-w-max'>
            {buttons.map((btn, index) => {
              const isActive = active === btn
              return (
                <div
                  key={index}
                  className={`px-5 text-base md:text-lg py-[10px] font-light cursor-pointer transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#CE9F41] text-[#F7F6F3] rounded-[50px]'
                      : 'text-[#2B2B2B] hover:bg-[#e0dcd3] hover:rounded-[50px]'
                  }`}
                  style={isActive ? { boxShadow: '0px 0px 4px 0px #00000040' } : {}}
                  onClick={() => setActive(btn)}
                >
                  {btn}
                </div>
              )
            })}
          </div>
        </div>

        {/* Product Grid (GSAP animates this) */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
        >
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="product-card shadow-subtle rounded-md overflow-hidden bg-white"
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.12)" }}
            >
              <div className="relative h-[200px] w-full">
                <Image
                  src="/product.jpg"
                  alt="Products"
                  fill
                  className="object-cover rounded"
                />
                <Button className="absolute top-4 left-4 h-0 bg-[#E3DACF] border border-[#EAEAEA] text-xs text-[#2B2B2B] rounded-full px-1.5 py-2.5 shadow">
                  Best Seller
                </Button>
              </div>
              <div className="p-5 text-[#2B2B2B]">
                <h4 className="font-semibold text-2xl leading-[100%] mb-2">
                  Canvas zippered totes
                </h4>
                <p className="text-sm">
                  Durable zippered bag with an interior zippered pocket. Customizable size.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </HeroWrapper>

      {/* Wholesale/Custom Section */}
      <div className="bg-[#FAF7EC]">
        <HeroWrapper>
          <motion.h4
            className="text-[#2B2B2B] font-medium text-3xl md:text-4xl text-center pt-5 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Ready-made wholesale and custom-made products
          </motion.h4>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left side - images */}
            <motion.div
              className={`space-y-3 ${reverse ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080] z-10" />
                <Image
                  src="/section1.jpg"
                  alt="Sewing"
                  width={600}
                  height={362}
                  className="rounded-lg h-[362px]"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 text-center">
                  <div className='flex items-center justify-center'>
                    <Name />
                  </div>
                  <p className='text-xl mt-2 font-light'>Put your name on it!</p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080] z-10" />
                <Image
                  src="/product.jpg"
                  alt="Fabric options"
                  width={600}
                  height={362}
                  className="rounded-lg h-[362px] object-cover object-top"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20">
                  <p className='text-xl text-center'>
                    Optional customization for stand-out sustainable products for your business or organization
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - steps */}
            <motion.div
              className={`space-y-6 ${reverse ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } }
              }}
            >
              {steps.map((text, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <div className='flex flex-col gap-2 items-center'>
                    <span className="flex-shrink-0 w-12 h-12 text-xl rounded-full bg-[#E1B565] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    {index !== steps.length - 1 && (
                      <div className='h-8 border-s-2 border-[#000000]' />
                    )}
                  </div>
                  <h4 className="text-[#2B2B2B] text-xl">{text}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className='flex justify-center pb-5'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-[#CE9F41] text-white font-medium px-6 py-3 rounded-md hover:bg-[#c99a50] transition cursor-pointer">
              Start an order
            </button>
          </motion.div>
        </HeroWrapper>
      </div>

      {/* Suggestion Section */}
      <HeroWrapper className='py-15'>
        <motion.div
          className='flex items-center justify-center gap-3 mb-3'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Tip />
          <h4 className=' text-xl md:text-3xl'>Don’t see what you are looking for?</h4>
        </motion.div>
        <motion.div
          className='flex flex-col md:flex-row items-center justify-center gap-3'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className='text-base md:text-lg text-[#65421E]'>
            We&apos;re open to suggestions! Let us make you a prototype!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F7F6F3] border border-[#D5D5D5] text-[#2B2B2B] font-medium px-5 py-2 rounded-md transition cursor-pointer"
          >
            Get Started
          </motion.button>
        </motion.div>
      </HeroWrapper>
    </>
  )
}

export default Page
