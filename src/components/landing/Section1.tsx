import React from 'react'
import HeroWrapper from '../HeroWrapper'
import { Button } from '../ui/button'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div>
      <h4 className="text-[#2B2B2B] mt-24 mb-10 md:mb-14 font-semibold text-3xl sm:text-4xl md:text-5xl text-center">
        Our Story and Values
      </h4>

      <StorySection
        title="A sewing center for good"
        paragraphs={[
          "Everyone should have the opportunity to do dignified work in a supportive environment. Our sewing center is not just a job, but a community of women who care for one another and are passionate about their craft.",
          "Jyoti employs women who are overcoming physical disability or socio-economic disadvantage. Employees are empowered with a living wage, maternity leave, childcare, and counseling resources.",
        ]}
        buttonText="Learn More"
        imageSrc="/section1.jpg"
        imageAlt="Sewing center"
      />

        <StorySection
          title="Custom products shipped internationally"
          paragraphs={[
            "Our seamstresses and weavers create a range of sustainable products.",
            "We sell individual and bulk orders of ready-to-order products as well as custom designs and custom printing.",
          ]}
          buttonText="Make an order"
          imageSrc="/section2.jpg"
          imageAlt="Custom products"
          reverse
        />
      </div>
  )
}

export default Section1


interface StorySectionProps {
  title: string;
  paragraphs: string[];
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;

}

const StorySection: React.FC<StorySectionProps> = ({
  title,
  paragraphs,
  buttonText,
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  return (
    <HeroWrapper
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 mb-16`}
    >
      <div className="w-full md:w-[45%]">
        <h4 className="text-3xl text-[#2B2B2B] leading-[40px] mb-5 font-semibold">
          {title}
        </h4>
        <div className="text-[#2B2B2B] space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {
          !reverse ? (
            <Button
              variant="outline"
              size="lg"
              className="mt-8 rounded-[8px] px-6 py-4 border border-[#D5D5D5] bg-[#E8D5A0] text-[#2B2B2B]"
            >
              {buttonText}
            </Button>
          ) : (
            <Button
              variant="outline"
              size="lg"
              className="mt-8 rounded-[8px] px-6 py-4 border border-[#D5D5D5] bg-[#CE9F41] text-white"
            >
              {buttonText}
            </Button>
          )
        }
      </div>

      {/* Image Block */}
      <div className="w-full md:w-[55%]">
        <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-[10px] object-cover"
          />
        </div>
      </div>
    </HeroWrapper>
  );
};
