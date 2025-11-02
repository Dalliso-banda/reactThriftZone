import React, { createContext, useContext, useEffect, useState } from "react";
const CART_KEY= 'thriftZoneCart'

export const CartContext = createContext()

const getCartIntialState=()=>{
     const cartStorage= localStorage.getItem(CART_KEY);
     cartStorage?JSON.parse(cartStorage):[]
}

export const CartProvider =({Children})=>{
    const [cartState,setCartState]= useState(getCartIntialState);


        useEffect(
       ()=>{
            localStorage.setItem(CART_KEY,cartState)
       },[cartState])



 const addToCart=(product)=>{
    const addToCart=(product)=>{
          setCartState(prevCart=>{
        const isInCart=  prevCart.find(item=>item.id===product.id);

        if(isInCart){
            console.log('already in endlish ')

        }
        return [...prevCart,{...product}]
      })
    }
    const removeCartItem=(productId)=>{
        setCartState(prevCart=>{
        return  prevCart.filter(item=>item.id!==productId)
         
        })
       
 }

   




  
   const contextValues={
           
           removeCartItem,
           addToCart,
           cartState
   }
    return(
        <CartContext.Provider value={contextValues}>
            {Children}
        </CartContext.Provider>
    )


}
}
export const useCart =()=> useContext(CartContext)