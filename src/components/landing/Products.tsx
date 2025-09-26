import HeroWrapper from "../HeroWrapper"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const Products = () => {
  return (
    <HeroWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {[...Array(3)].map((_, index) => (
                <div key={index} className="shadow-subtle">
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
                        <h4 className="font-semibold text-2xl leading-[100%] mb-2">Canvas zippered totes</h4>
                        <p className="text-sm">Durable zippered bag with an interior zippered pocket. Customizable size.</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="flex justify-center">
            <Link href={"/product"}>
                <Button 
                    variant="outline"
                    size="lg"
                    className="mt-8 rounded-[8px] px-6 py-4 border border-[#D5D5D5] bg-[#CE9F41] text-white cursor-pointer"
                >
                    Explore all Products
                </Button>
            </Link>
        </div>
    </HeroWrapper>
  )
}

export default Products