'use client'
import { createContext, useState } from "react";

export const EcommerceContext = createContext()

export const EcommerceProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addCart = (value) => {
        
        setCart([value, ...cart])
        
    }

    return <EcommerceContext.Provider value={{cart, addCart}}>
        {children}
    </EcommerceContext.Provider>
}