import WidthWrapper from "../WidthWrapper"
import Image from "next/image"
import Insta from "@/images/insta.svg"
import Fb from "@/images/fb.svg"
import Mail from "@/images/mail.svg"
import Phone from "@/images/phone.svg"
import Location from "@/images/location1.svg"
import { Button } from "../ui/button"

const Footer = () => {
  return (
    <div className="bg-[#3B280D]">
        <WidthWrapper className="py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 mb-5">
                <div className="space-y-[10px]">
                    <Image
                        src='/footer-logo.svg'
                        alt='logo'
                        width={240}
                        height={44}
                    />
                    <p className="text-[#F7F6F3] text-lg">Creating meaningful employment for marginalized communities while producing sustainable, high-quality goods that honor both people and planet.</p>
                    <div className="flex gap-3">
                        <Insta />
                        <Fb />
                    </div>
                </div>

                <div className="text-[#F7F6F3] space-y-2 text-lg">
                    <h4 className="text-xl md:text-[28px]">Quick Links</h4>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Our Team</p>
                </div>

                <div className="text-[#F7F6F3] space-y-2 text-lg">
                    <h4 className="text-xl md:text-[28px]">For Business</h4>
                    <p>Our Products</p>
                    <p>For Brands</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>

                <div className="text-[#F7F6F3] space-y-3 text-lg">
                    <h4 className="text-xl md:text-[28px]">Stay Connected</h4>
                    <div className="flex gap-3 items-center">
                        <Mail />
                        <p>hello@gmail.com</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Phone />
                        <p>+977 987654321</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Location />
                        <p>Nakkhu, Lalitpur, Nepal</p>
                    </div>
                    <p className="text-[#F7F6F3] text-sm">Join the family! Subscribe to our newsletter!</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <input
                            className="pt-1 pr-2.5 pb-1 pl-2.5 rounded-lg border-2 bg-[#664C1D] border-[#868686] text-sm accent-[#F3EBCE] placeholder-[#F3EBCE]"
                            placeholder="Enter your email"
                        />

                        <Button 
                            variant="outline"
                            size="sm"
                            className="rounded-[8px] px-2 py-1 border border-[#D5D5D5] bg-[#8F7219] text-white"
                        >
                            Subscribe
                        </Button>
                    </div>                    
                </div>
            </div>
            <hr />
            <div className="p-5 flex justify-between">
                <p className="text-[#FFFFFF] text-sm sm:text-base">© 2025 Jyoti. All rights reserved.</p>
                <div className="text-[#F7F6F3] flex gap-5 text-sm sm:text-base">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </WidthWrapper>
    </div>
  )
}

export default Footer