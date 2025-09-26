import Image from "next/image"
import { Button } from "../ui/button"
import WidthWrapper from "../WidthWrapper"
import Link from "next/link"
import MobileNavbar from "./mobileNavbar"

const Navbar = () => {
  return (
    <>
        <div className="bg-[#F3F3F2] hidden md:block">
            <WidthWrapper className="flex items-center justify-between">
                <Image
                    src='/logo.svg'
                    alt='logo'
                    width={240}
                    height={44}
                />
                <div className=" hidden lg:flex gap-7 font-medium text-[#2B2B2B]">
                    <Link href={"/about"}><p className="hover:border-b hover:border-[#CE9F41] hover:pb-2">About Us</p></Link>
                    <Link href={"/product"}><p className="hover:border-b hover:border-[#CE9F41] hover:pb-2">Products</p></Link>
                    <Link href={"/partner"}><p className="hover:border-b hover:border-[#CE9F41] hover:pb-2">For Brands</p></Link>
                    <Link href={"/blog"}><p className="hover:border-b hover:border-[#CE9F41] hover:pb-2">Blog</p></Link>
                    <Link href={"/partner"}><p className="hover:border-b hover:border-[#CE9F41] hover:pb-2">Our Team</p></Link>
                </div>
                <div className="flex gap-5">
                    <Button
                        variant={"outline"}
                        size={"sm"}
                        className="rounded-[8px] px-3 py-5 border border-[#D5D5D5] text-[#2B2B2B] bg-white hover:bg-[#CE9F41] hover:text-white" 
                    >
                        Contact
                    </Button>
                    <Button
                        variant={"outline"}
                        size={"lg"}
                        className="rounded-[8px] px-3 py-5 border border-[#D5D5D5] text-white bg-[#CE9F41] hover:bg-[#F7F6F3] hover:text-[#2B2B2B]" 
                    >
                        Wholesale Enquiry
                    </Button>
                </div>
            </WidthWrapper>
        </div>
        <div className="md:hidden">
            <MobileNavbar />
        </div>
    </>
  )
}

export default Navbar