"use client"

import React from 'react'
import Image from 'next/image'
import { SiNike, SiAdidas, SiNewbalance, SiPuma, SiReebok } from "react-icons/si"
import { motion } from "framer-motion"
import Link from "next/link";

const Hero = () => {
    return (

        <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
            <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
                <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
                    <h1 className='mb-4 tex-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl'>
                        Welcome to Cool Shoes – Where Style Meets Comfort!
                    </h1>
                    <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>
                        Lace up and Step into the Future of Cool with our Sneakers – Where Street Style Meets Next-Level Comfort, delivering the Hottest Trends and Flyest Kicks at Prices that Keep You on Point!
                    </p>
                </div>

                <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
                    <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:mgl-0'>
                        <Image
                            src="/hero-2.jpg"
                            alt="Great Photo"
                            className='h-full w-full object-cover object-center'
                            priority
                            width={500}
                            height={500}
                        />
                    </div>

                    <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
                        <Image
                            src="/hero-1.jpg"
                            alt='Great Photo'
                            className='h-full w-full object-cover object-center'
                            priority
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>

            <motion.div
                className='flex items-center justify-between py-12'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.2,
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

export default Hero
