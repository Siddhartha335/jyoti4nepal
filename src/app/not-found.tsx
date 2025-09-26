import React from 'react';
import Not from '@/images/404one.svg';
import Not1 from "@/images/404two.svg"
import F404 from "@/images/404.svg"
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Notfound = () => {
  return (
      <div className=" bg-[#F3EBCE] min-h-screen relative  grid place-items-center max-w-full overflow-hidden">
      {/* Top-left SVG */}
      <div className='absolute top-16 left-20 hidden md:block z-0 opacity-60 '>
        <Not />
      </div>

      {/* Other floating SVGs */}
      <div className="absolute top-36 right-32 hidden md:block z-0 opacity-60 ">
        <Not1 />
      </div>
      <div className="absolute left-40 top-1/2 hidden md:block z-0 opacity-60 ">
        <Not1 />
      </div>
      <div className="absolute top-[65%] right-56 hidden md:block z-0 opacity-60 ">
        <Not1 />
      </div>

      {/* Centered content */}
      <div className="w-full px-4 text-center z-10">
        <h4 className='text-4xl md:text-6xl font-semibold mb-2'>Oops! Page Not Found</h4>

        <div className='flex items-center justify-center mb-2'>
          <h5 className='text-[180px] md:text-[274px] leading-none'>4</h5>
          <Image 
            src={"/404.svg"}
            alt="404 Illustration"
            width={150}
            height={150}
            className='w-[150px] md:w-[274px] h-auto'
          />
          <h5 className='text-[180px] md:text-[274px] leading-none'>4</h5>
        </div>

        <p className='text-base md:text-lg'>Looks like this page is as lost as a missing thread in our weave.</p>
        <p className='text-base md:text-lg mb-9'>But don’t worry—you can find your way back to something meaningful.</p>

        <div className='flex flex-wrap justify-center items-center gap-4 mb-8'>
          <Button variant="link" size="lg" className='bg-[#CE9F41]'>
            <span className='text-[#F7F6F3]'>Back to Home</span>
          </Button>
          <Button variant="link" size="lg" className='bg-[#F7F6F3]'>
            <span className='text-[#2B2B2B]'>Explore Products</span>
          </Button>
        </div>

        <p className='text-[#878787]'>Every product you buy supports women in Nepal.</p>
      </div>
      </div>
  );
};

export default Notfound;
