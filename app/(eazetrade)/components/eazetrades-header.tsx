"use client";

import { useState } from 'react'
import Image from "next/image";
import logo from "../../../public/images/eazetrades-logo-3 3.png"
import { Button } from "@/components/ui/button";
import { NavDropdown } from "./eazetrades-dropdown";
import { Menu, Package, Search, Users } from "lucide-react";
import { SearchInput } from "./eazetrades-input";
import { Briefcase } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';

export default function AppHeader() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    return (
        <header className="sticky top-0 z-50 border-b">
            <div className=" px-4 py-4 sm:px-6 lg:px-8">
                {/* Desktop Layout */}
                <div className="hidden md:flex md:flex-wrap md:items-center md:justify-between md:gap-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src={logo} alt="Eazetrades logo" width={32} height={32} />
                        <span className="text-lg font-semibold text-[#4F4F4F]">EAZETRADES</span>
                    </Link>
                    <SearchInput />
                    <nav className="flex items-center space-x-4">
                        <NavDropdown icon={<Package className="h-4 w-4" />} label="Products" items={['Item 1', 'Item 2', 'Item 3']} />
                        <NavDropdown icon={<Briefcase className="h-4 w-4" />} label="Services" items={['Service 1', 'Service 2', 'Service 3']} />
                        <NavDropdown icon={<Users className="h-4 w-4" />} label="Vendors" items={['Vendor 1', 'Vendor 2', 'Vendor 3']} />
                    </nav>
                    <Button className="bg-[#5F3AFB] rounded-3xl">Get Started</Button>
                </div>

                {/* Mobile Layout */}
                <div className="flex md:hidden items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Image src={logo} alt="Eazetrades logo" width={24} height={24} />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col space-y-4 mt-8">
                                    <Button variant="ghost" className="justify-start">
                                        <Package className="mr-2 h-4 w-4" />
                                        Products
                                    </Button>
                                    <Button variant="ghost" className="justify-start">
                                        <Briefcase className="mr-2 h-4 w-4" />
                                        Services
                                    </Button>
                                    <Button variant="ghost" className="justify-start">
                                        <Users className="mr-2 h-4 w-4" />
                                        Vendors
                                    </Button>
                                    <Button>Get Started</Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                {isSearchOpen && (
                    <div className="md:hidden mt-4">
                        <SearchInput />
                    </div>
                )}
            </div>
        </header>

    )
}