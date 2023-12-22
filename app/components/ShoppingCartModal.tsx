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

const ShoppingCartModal = () => {
    const { 
        cartCount, 
        shouldDisplayCart, 
        handleCartClick, 
        cartDetails, 
        removeItem, 
        totalPrice ,
        redirectToCheckout
    } = useShoppingCart();

    return  (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
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
    </Sheet>
  )
}

export default ShoppingCartModal
