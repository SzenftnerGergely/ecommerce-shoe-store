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
    <section className='sm:min-h-screen'>
      <div className='container flex flex-col'>
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='w-64 sm:h-96 sm:w-full rounded-lg'
        >
          {images.map((image: string | StaticImport, index: number) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={urlFor(image).url()}
                  width={500} height={500}
                  alt='photo'
                  className='block h-full w-full object-cover'
                  onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}
                />
              </div>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-2/5 max-w-5xl bg-white">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">✕</button>
                  </form>
                  <p className="py-4">
                    <Image
                      src={urlFor(image).url()}
                      width={600} height={600}
                      alt='photo'
                      className='block h-full w-full object-cover'
                    />
                  </p>
                </div>
              </dialog>
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
                  className='block h-16 sm:h-full sm:w-full object-cover'
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