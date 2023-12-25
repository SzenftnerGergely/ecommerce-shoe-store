'use client'

import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import Image from 'next/image'
import { FaTrashAlt } from "react-icons/fa";
import { CartEntry } from 'use-shopping-cart/core';

 
export default function CartItem({ item }: CartEntry) {
    const { name, image, quantity, price } = item
    const { removeItem } = useShoppingCart()

    const removeItemFromCart = () => {
        removeItem(item.id)
    }

    return (
        <div className='w-full flex items-center justify-between py-2'>
            <Image 
                src={image} 
                alt={name} 
                width={100} 
                height={100} 
            />

            <div className='mr-auto'>
                <span className='text-gray-400'>{name}</span>
                <div className="flex gap-2">
                    <div className='text-gray-400'>${price} x {quantity}</div> 
                    <div className='font-bold'>${quantity * price}</div>
                </div>
            </div>

            <button
                onClick={() => removeItemFromCart()}
                className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
            >
                <FaTrashAlt  className="hover:scale-105 active:scale-100 translate-all duration-150 text-gray-400 text-lg" />
            </button>
        </div>
    )
}