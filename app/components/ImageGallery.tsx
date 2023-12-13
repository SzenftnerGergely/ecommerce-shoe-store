"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '../lib/sanity'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

interface iAppProps {
    images: StaticImport[],
}

const ImageGallery = ({ images }: iAppProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

    return (
      <section className='min-h-screen py-12'>
        <div className='container'>
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='h-96 w-full rounded-lg'
          >
            {images.map((image: string | StaticImport, index: number) => (
              <SwiperSlide key={index}>
                <div className='flex h-full w-full items-center justify-center'>
                  <Image
                    src={urlFor(image).url()}
                    width={500} height={500}
                    alt='photo'
                    className='block h-full w-full object-cover'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
  
          {/* Thumbnail */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={12}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='thumbs mt-3 h-32 w-full rounded-lg'
          >
            {images.map((image: string | StaticImport, index: number) => (
              <SwiperSlide key={index}>
                <button className='flex h-full w-full items-center justify-center'>
                  <Image
                    src={urlFor(image).url()}
                    width={200} height={200}
                    alt='Photo' 
                    className='block h-full w-full object-cover'
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    )
}

export default ImageGallery