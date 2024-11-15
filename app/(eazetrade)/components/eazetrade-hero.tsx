import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import Image from "next/image"
import hero from '../../../public/images/hero.jpg'


export default function Component() {
    return (
        <div className="relative min-h-[600px] w-full overflow-hidden">
            {/* Main Content */}
            <div className="container mx-auto px-4 pt-16">
                <div className="relative z-10 max-w-xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-[40px] leading-tight">
                        Connecting sellers and buyers where convenience meet innovation
                    </h1>
                    <p className="mt-3 text-gray-600">
                        World&apos;s largest market place
                    </p>
                    <Button className="mt-6 bg-[#5F3AFB] px-5 py-2 rounded-[30px] h-[65px] w-[308px] text-2xl">
                        Get started
                    </Button>
                </div>

                {/* Search Bar */}
                <div className="relative z-10 mt-24 max-w-2xl mx-auto top-32">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search..."
                            className="w-full rounded-full bg-[#FFFFFF] border-gray-200 pl-6 pr-12 py-6 text-base shadow-lg focus-visible:ring-[#6C5CFF] focus-visible:ring-offset-2"
                        />
                        <Button
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#6C5CFF] hover:bg-[#5F3AFB]"
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute right-0 top-0">
                    <Image
                        src={hero}
                        alt="Shopping cart and price tags illustration"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}


{/* <div className="mt-12 md:mt-0 md:absolute md:right-0 md:top-0 md:w-1/2"> */ }