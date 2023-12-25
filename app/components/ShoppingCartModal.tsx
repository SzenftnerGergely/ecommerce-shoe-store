"use client"

import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import CartItem from './CartItem'
import Link from 'next/link'
import { BsCart2 } from 'react-icons/bs'

function closeDropdown() {
  const elem = document.activeElement as HTMLElement
  if (elem) {
    elem.blur()
  }
}

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout
  } = useShoppingCart();

  return (
    <>
      <div className="dropdown dropdown-end">
        <label htmlFor="" tabIndex={0} className="btn-ghost btn-circle btn">
          <div className="indicator">
            <BsCart2 className="text-2xl" />
            <span className="badge badge-sm indicator-item bg-[#ff7d1a] text-white border-none">
              {cartCount || 0}
            </span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="card dropdown-content card-compact mt-3 rounded-xl
          w-[22rem] bg-base-100 shadow z-30 -left-[15rem]"
        >
          <div className="card-body bg-white">
            <div className='font-bold text-lg border-b border-b-gray-300 w-full pb-3'>Cart</div>
            <div className="card-actions flex items-center justify-center m-auto">
              {cartCount && cartCount > 0 ? (
                <>
                  {Object.values(cartDetails ?? {}).map((product) => (
                    <CartItem key={product.id} product={product} id={''} quantity={0} value={0} formattedValue={''} name={''} price={0} currency={''} />
                  ))}
                </>
              ) : (
                <div className="h-36 flex items-center text-gray-400 text-xl">Your cart is empty</div>
              )}
              <Link
                href="/cart"
                className="btn btn-block bg-[#ff7d1a] text-white border-none"
                onClick={closeDropdown}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle className='m-auto'>Shopping Cart</SheetTitle>
        </SheetHeader>
        {cartCount && cartCount > 0 ? (
        <>
          {Object.values(cartDetails ?? {}).map((product) => (
            <CartItem key={product.id} product={product} id={''} quantity={0} value={0} formattedValue={''} name={''} price={0} currency={''} />
          ))}
        </>
      ) : (
        <div className="p-5">You have no items in your cart</div>
      )}
      </SheetContent>
    </Sheet> */}

    </>
  )
}

export default ShoppingCartModal
