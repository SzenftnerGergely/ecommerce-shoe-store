"use client"

import Link from "next/link";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import 'swiper/css'

export interface simplifiedProduct {
  [x: string]: any;
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}


export default function Newest() {
  const [data, setData] = useState<simplifiedProduct | null>(null)
  const [isLoading, setLoading] = useState(true)

  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
      price,
    name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url
  }`;

  useEffect(() => {
    client.fetch(query)
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  })

  if (isLoading) return <div className="mx-auto w-full py-12 text-center"><p>Loading... <span className="loading loading-spinner text-warning"></span></p></div>
  if (!data) return <p>No data</p>

  return (
    <div className="bg-white">
      <div className="relative mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest products
          </h2>

          <Link className="group text-primary flex items-center gap-x-1" href="/all">
            See All{" "}
            <span className="group-hover:translate-x-1 duration-200">
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="swiper-button image-swiper-button-next">
          <IoIosArrowForward />
        </div>
        <div className="swiper-button image-swiper-button-prev">
          <IoIosArrowBack />
        </div>

        <Swiper
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled"
          }}
          pagination={{ type: 'fraction' }}
          spaceBetween={16}
          modules={[Navigation]}
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 3,
            },
            912: {
              slidesPerView: 4,
            },
          }}
          className='w-full rounded-lg'
        >
          <div>
            {data.map((product: simplifiedProduct) => (
              <SwiperSlide key={product._id} className="group">
                <div className="aspect-square w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-contain object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>

                <div className="mt-4 flex justify-around">
                  <div>
                    <h3 className="text-sm text-gray-700 hover:text-[#ff7d1a]">
                      <Link href={`/product/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.categoryName}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}