'use client'

import HeroWrapper from '@/components/HeroWrapper'
import { StorySection } from '@/components/landing/Section1'
import Manufacture from "@/images/manufacture.svg"
import Label from "@/images/label.svg"
import Chain from "@/images/chain.svg"
import Disc from "@/images/disc.svg"
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Page = () => {

  const servicesRef = useRef<HTMLDivElement>(null)
  const storiesRef = useRef<HTMLDivElement>(null)
  const partnersRef = useRef<HTMLDivElement>(null)

  // 🔥 GSAP animations
  useEffect(() => {
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current.querySelectorAll('.service-card'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 85%',
          }
        }
      )
    }

    if (storiesRef.current) {
      gsap.fromTo(
        storiesRef.current.querySelectorAll('.story-card'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storiesRef.current,
            start: 'top 85%',
          }
        }
      )
    }

    if (partnersRef.current) {
      gsap.fromTo(
        partnersRef.current.querySelectorAll('.partner-step'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: partnersRef.current,
            start: 'top 85%',
          }
        }
      )
    }
  }, [])

  const services  = [
    {
      icon: <Manufacture />,
      title: "Custom Manufacturing",
      description: "End-to-end production of your branded products with our ethical manufacturing standards",
      points:[
        'Design consultation',
        'Prototype development',
        'Quality assurance',
        'Scalable production'
      ]
    },
    {
      icon: <Label />,
      title: "Private Label",
      description: "Ready-to-market products under your brand with our sustainable materials and processes",
      points:[
        'Pre-designed products',
        'Custom branding',
        'Fast turnaround',
        'Minimum order flexibility'
      ]
    },
    {
      icon: <Chain />,
      title: "Supply Chain Solutions",
      description: "Complete supply chain management with transparency and traceability at every step",
      points:[
        'Supplier network',
        'Logistics management',
        'Compliance monitoring',
        'Impact reporting'
      ]
    },
  ]

  const success_stories = [
    {
      btnText: "Sustainable fashion",
      title: "GreenWear Co.",
      analysis: {
        Challenge:"Needed ethical manufacturing partner for organic cotton line",
        Solution:"Custom production facility with 200+ dedicated artisans",
        Result:"50% faster time-to-market, 100% ethical sourcing",
        Products:"Organic T-shirts, Hoodies, Activewear"
      }
    },
    {
      btnText: "Children's Products",
      title: "EcoKids Brand",
      analysis: {
        Challenge:"Required chemical-free manufacturing for baby products",
        Solution:"Specialized clean production line with organic materials",
        Result:"Zero chemical exposure, Fair Trade certification",
        Products:"Baby Clothes, Organic Diapers, Toys"
      }
    },
    {
      btnText: "Fashion Accessories",
      title: "Urban Caps",
      analysis: {
        Challenge:"Wanted to launch sustainable cap collection",
        Solution:"Recycled materials production with custom designs",
        Result:"95% recycled content, 30% cost reduction",
        Products:"Caps, Beanies, Sun Hats"
      }
    },
  ]

  const partnerships = [
    {
      title:"Consultation",
      desc:"Discuss your needs and sustainability goals"
    },
    {
      title:"Proposal",
      desc:"Receive detailed project timeline and pricing"
    },
    {
      title:"Production",
      desc:"Begin ethical manufacturing with regular updates"
    },
    {
      title:"Delivery",
      desc:"Quality products delivered with impact reports"
    },
  ]

  return (
    <>
        <StorySection
            title="Be Part of the Change"
            paragraphs={[
                "Every purchase supports women's empowerment and environmental sustainability. Join us in creating a better world, one product at a time.",
            ]}
            buttonText={["Start a Project","Download Partnership Guide"]}
            imageSrc="/partner.jpg"
            imageAlt="Partners"  
        />

        {/* Our Services */}
        <div className='partner -mt-10 mb-5'>
            <div className='text-[#2B2B2B] px-5 sm:px-0 text-center pt-15 mb-5'>
                <motion.h4 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className='font-medium text-3xl md:text-4xl mb-3'
                >
                  Our Services
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className='text-lg max-w-4xl mx-auto'
                >
                  Comprehensive manufacturing solutions designed to meet your brand&apos;s unique needs while maintaining our commitment to ethical production.
                </motion.p>
            </div>
            <HeroWrapper>
                <div 
                  ref={servicesRef}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                      <div 
                        key={index} 
                        className='service-card p-5 bg-[#F7F6F3] border border-[#EAEAEA] services-shadow rounded-md space-y-2'
                      >
                          {service.icon}
                          <h4 className='text-xl text-[#2B2B2B] font-semibold mt-4 md:text-2xl leading-[40px]'>{service.title}</h4>
                          <p className='text-[#65421E]'>{service.description}</p>
                          <div className='space-y-[6px]'>
                              {service.points.map((point, index) => (
                                <div key={index} className='flex items-center gap-2'>
                                  <Disc />
                                  <p>{point}</p>
                                </div>
                              ))}
                          </div>
                      </div>
                    ))}
                </div>
            </HeroWrapper>
        </div>

        {/* Success Stories */}
        <div className='partner'>
            <div className='text-[#2B2B2B] px-5 sm:px-0 text-center pt-15 mb-5'>
              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className='font-medium text-3xl md:text-4xl mb-3'
              >
                Success Stories
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='text-lg max-w-xl mx-auto'
              >
                See how we&apos;ve helped brands achieve their sustainability goals while maintaining quality and efficiency.
              </motion.p>
            </div>
            <HeroWrapper>
              <div 
                ref={storiesRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                  {success_stories.map((ss,index) => (
                    <div 
                      key={index}
                      className='story-card p-5 bg-[#F7F6F3] border border-[#EAEAEA] services-shadow rounded-md space-y-2'
                    >
                        <Button
                          value={'outline'}
                          size={'sm'}
                          className='p-[5px] rounded-[18px] text-[12px] text-[#1E1E1E] font-semibold bg-[#E3DACF] border border-[#EAEAEA]'
                        >
                          {ss.btnText}
                        </Button>
                        <h4 className='text-xl text-[#2B2B2B] font-semibold md:text-2xl leading-[40px]'>{ss.title}</h4>
                        {(Object.keys(ss.analysis) as Array<keyof typeof ss.analysis>).map((key, _index) => (
                          <div key={key as string}>
                            <h2 className='leading-[28px] font-semibold'>{key}</h2>
                            <h3 className='text-sm font-medium text-[#65421E]'>{ss.analysis[key]}</h3>
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
            </HeroWrapper>
        </div>

        {/* Partnership Process */}
        <div className='bg-[#FAF7EC] pb-15'>
            <HeroWrapper>
              <div className='text-[#2B2B2B] px-5 sm:px-0 text-center pt-15 mb-5'>
                <motion.h4
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className='font-medium text-3xl md:text-4xl mb-3'
                >
                  Partnership Process
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className='text-lg max-w-4xl mx-auto'
                >
                  From initial consultation to product delivery, we make partnering with us simple and transparent.
                </motion.p>
              </div>
              <div 
                ref={partnersRef}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                  {partnerships.map((p, index) => (
                    <div 
                      key={index}
                      className='partner-step text-center space-y-4'
                    >
                      <h4 className='font-semibold text-3xl md:text-4xl text-[#CE9F41]'>0{index + 1}</h4>
                      <h2 className='text-xl leading-[28px] font-medium'>{p.title}</h2>
                      <p className='text-[#7E7167]'>{p.desc}</p>
                    </div>
                  ))}
              </div>
            </HeroWrapper>
        </div>

        {/* Final CTA */}
        <HeroWrapper>
          <motion.div
            className='text-[#2B2B2B] px-5 sm:px-0 text-center pt-15 mb-5'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h4 className='font-medium text-3xl md:text-4xl mb-3'>Ready to Start Your Partnership?</h4>
            <p className='text-lg max-w-xl mb-5 mx-auto'>
              Let&apos;s create something amazing together. Contact us to discuss your project and discover how we can bring your vision to life ethically.
            </p>
            <motion.div
              className='flex justify-center gap-5'
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.button
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="bg-[#CE9F41] text-white font-medium p-[10px] rounded-md hover:bg-[#c99a50] transition cursor-pointer"
              >
                Contact Our Team
              </motion.button>
              <motion.button
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="bg-[#FFFFFF] text-[#2B2B2B] font-medium p-[10px] rounded-md transition cursor-pointer"
                style={{boxShadow: "0px 0px 4px 0px #00000040"}}
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </HeroWrapper>
    </>
  )
}

export default Page
