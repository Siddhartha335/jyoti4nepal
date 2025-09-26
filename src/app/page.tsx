import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import Impact from "@/components/landing/Impact";
import Navbar from "@/components/landing/navbar";
import Products from "@/components/landing/Products";
import Section1 from "@/components/landing/Section1";
import Stories from "@/components/landing/Stories";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="products-bg">
        <Section1 />
        <Products />
        <Impact />
      </div>    
      <Stories />  
      <Footer />
    </div>
  );
}
