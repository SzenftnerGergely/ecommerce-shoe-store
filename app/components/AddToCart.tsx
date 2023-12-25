"use client"

import { urlFor } from "@/app/lib/sanity"
import { useState } from "react"
import { useShoppingCart } from "use-shopping-cart"
import { BsCart3 } from "react-icons/bs"

interface ProductCart {
  name: string,
  description: string,
  price: number,
  currency: string,
  image: any,
  price_id: string
}

const AddToCart = ({ currency, description, image, name, price, price_id }: ProductCart) => {

  const { addItem } = useShoppingCart()
  const [quantity, setQuantity] = useState(0)
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const addToCart = () => {
    addItem(product, { count: quantity })
    setQuantity(1)
  }

  return (
    <div className="sm:flex w-full sm:justify-between gap-4">
      <div className="flex text-black flex-col gap-3 py-4 
        bg-[#f7f8fd] rounded-lg text-center sm:w-1/3 mb-5
        sm:mb-0">
        <div className="flex justify-around items-center">
          <button
            onClick={decreaseQuantity}
            className="hover:opacity-70 text-2xl font-bold
            rounded-full transition-all duration-500 text-[#ff7d1a]"
          >
            -
          </button>
          <span className="text-center font-bold">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="hover:opacity-70 text-2xl font-bold
            rounded-full transition-all duration-500 text-[#ff7d1a]"
          >
            +
          </button>
        </div>
      </div>
        <button
          onClick={() => addToCart()}
          className="w-full sm:w-2/3 bg-[#ff7d1a] hover:opacity-70 hover:text-white 
          transition-all duration-500 text-white rounded-lg shadow-md flex 
          items-center justify-center gap-4 font-semibold py-4 sm:py-0"
        >
          <BsCart3 className="text-lg" />
          <p>Add to cart</p>
        </button>
    </div>
  )
}

export default AddToCart
