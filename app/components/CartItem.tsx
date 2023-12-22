'use client'

import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import Image from 'next/image'
import { CartEntry } from 'use-shopping-cart/core'
import { FaTrash } from "react-icons/fa";

export default function CartItem({ product }: CartEntry) {
    const { name, image, quantity, price } = product
    const { removeItem } = useShoppingCart()

    console.log(product);


    const removeItemFromCart = () => {
        removeItem(product.id)
    }

    return (
        <div className='my-10'>
            <div className="flex items-center gap-4 mb-3">
                <div>
                    {name} <span className="text-xs">({quantity})</span>
                </div>
                <div className="ml-auto">
                    {quantity * price} $
                </div>
                <button
                    onClick={() => removeItemFromCart()}
                    className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
                >
                    <FaTrash className="hover:scale-105 active:scale-100 translate-all duration-150" />
                </button>
            </div>
            <Image src={image} alt={name} width={100} height={100} />
            <div className="divider divider-warning"></div>
        </div>
    )
}