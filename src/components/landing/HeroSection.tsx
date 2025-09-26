import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-[100vh]">
      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(106.04deg, rgba(0, 0, 0, 0.6) 20%, rgba(61, 61, 61, 0.6) 85%)",
          zIndex: 1,
        }}
      />

      {/* Background Image */}
      <Image
        src={"/hero.jpg"}
        alt="Hero Image"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex mt-24 sm:mt-0 items-center-safe md:items-center px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <h4 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:leading-[60px]">
            Empowering women through <br />
            <span className="text-[#E8D5A0]">Sustainable Production</span>
          </h4>
          <p className="text-white text-base sm:text-lg mb-6 max-w-lg">
            Creating meaningful employment for marginalized communities while
            producing sustainable, high-quality goods that honor both people and
            planet.
          </p>

          {/* ✅ Make buttons horizontal on all screen sizes */}
          <div className="flex gap-4 sm:gap-6">
            <Link href="/product">
              <Button
                  variant="outline"
                  size="lg"
                  className="rounded-[8px] px-6 py-4 text-white bg-[#CE9F41] cursor-pointer"
                >
                  Explore Products
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="rounded-[8px] px-6 py-4 border border-[#D5D5D5] text-[#CE9F41] bg-white"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
