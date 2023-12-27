"use client"

import React from 'react'
import { links } from "@/lib/constants"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SheetDemo } from './SideBar'
import { motion } from "framer-motion"
import ShoppingCartModal from './ShoppingCartModal'
import { UserButton, useUser, SignInButton } from "@clerk/nextjs";
import { PiUser } from "react-icons/pi";

const Navbar = () => {
    const pathname = usePathname()
    const { isSignedIn } = useUser();

    return (
        <header>
            <div className='mb-16 lg:py-10 border-b flex items-center justify-between 
            mx-auto max-w-2xl lg:max-w-[1440px] px-6 md:px-0'>

                <div className='flex items-center py-8 lg:py-0'>
                    <div className='flex items-center gap-3'>
                        <SheetDemo />
                        <motion.div
                            whileHover={{ y: -5, borderBottomColor: "#ff7d1a", borderBottomWidth: "3px" }}
                        >
                            <Link href="/">
                                <h1 className='text-2xl md:text-4xl font-bold'>
                                    sneakers
                                </h1>
                            </Link>
                        </motion.div>

                    </div>

                    <nav className='hidden gap-10 lg:flex ml-16'>
                        {links.map((link, idx) => (
                            <div key={idx}>
                                {pathname === link.href ? (
                                    <Link href={link.href} className='text-lg font-semibold text-[#b6bcc8]'>
                                        {link.name}
                                    </Link>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className='text-lg font-semibold text-[#b6bcc8] trasition-all duration-100 
                                        hover:text-[#1d2025] hover:border-b-4 pb-[3.6rem] hover:border-b-[#ff7d1a]'
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                <div className='flex items-center justify-between sm:gap-6'>
                    <div className='p-2 rounded-full relative'>
                        <ShoppingCartModal />
                    </div>

                    <div>
                        {isSignedIn ? (<UserButton afterSignOutUrl="/" />) : (
                            <SignInButton>
                                <div className='btn btn-ghost btn-circle'>
                                    <PiUser className="text-4xl cursor-pointer" />
                                </div>
                            </SignInButton>
                        )}
                    </div>
                </div>

                {/*<Image
                    className='hover:border-2 hover:border-[#ff7d1a] rounded-full 
                            transition-all duration-75 cursor-pointer h-10 w-10 sm:h-14 sm:w-14'
                    src="/image-avatar.png"
                    alt='avatar'
                    width={55}
                    height={55}
                    priority
                /> */}

            </div>
        </header>
    )
}

export default Navbar
