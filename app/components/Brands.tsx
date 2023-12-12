"use client"

import React from 'react'
import { SiNike, SiAdidas, SiNewbalance, SiPuma, SiReebok } from "react-icons/si"
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from "next/link";

const Brands = () => {
    return (
        <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
            <motion.div
                className='flex items-center justify-between py-12'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                }}
                whileInView="animate"
                viewport={{
                    once: true
                }}
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Link href="/Nike">
                        <SiNike className="w-auto h-16 hover:text-gray-600 hover:scale-105" />
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Link href="/Adidas">
                        <SiAdidas className="w-auto h-16 hover:text-gray-600 hover:scale-105" />
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Link href="/Newbalance">
                        <SiNewbalance className="w-auto h-16 hover:text-gray-600 hover:scale-105" />
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Link href="/Puma">
                        <SiPuma className="w-auto h-16 hover:text-gray-600 hover:scale-105" />
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Link href="/Reebook">
                        <SiReebok className="w-auto h-16 hover:text-gray-600 hover:scale-105" />
                    </Link>
                </motion.div>
            </motion.div>

            <div className="divider divider-warning mt-10"></div>

            <div className="w-full lg:flex-row sm:mx-auto flex flex-col justify-between gap-3 lg:gap-0 pt-16">
                <div><Image src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/holiday/1-story-2-assets/wk45_120323_1_story_left_crocs.jpg" alt='shoe' width={550} height={550} /></div>
                <div className="divider divider-horizontal"></div>
                <div><Image src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/holiday/1-story-2-assets/wk45_120323_1_story_right_crocs.jpg" alt='shoe' width={550} height={550} /></div>
            </div>
        </section>
    )
}

export default Brands
