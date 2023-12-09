"use client"

import React from 'react'
import { links } from "@/lib/constants"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsCart3 } from "react-icons/bs"
import Image from 'next/image'
import { SheetDemo } from './SideBar'
import { motion } from "framer-motion"

const Navbar = () => {
    const pathname = usePathname()

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
                                        hover:text-[#1d2025] hover:border-b-4 pb-[3.3rem] hover:border-b-[#ff7d1a]'
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                <div className='flex items-center justify-between gap-10'>
                    <div className='p-2 rounded-full relative'>
                        <BsCart3
                            className="w-7 h-7 text-[#b6bcc8] hover:text-black transition-all"
                        />
                        <div className='absolute right-0 top-0 bg-[#ff7d1a] text-white px-2 text-xs rounded-full'>3</div>
                    </div>

                    <div>
                        <Image
                            className='hover:border-2 hover:border-[#ff7d1a] rounded-full 
                            transition-all duration-75 cursor-pointer'
                            src="/image-avatar.png"
                            alt='avatar'
                            width={55}
                            height={55}
                            priority
                        />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Navbar
