import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/navbar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbar />
            {children}
        <Footer />
    </>
  )
}
