import { createContext } from "react"
import { useCartReducer } from "../hooks/useCartReducer"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const { addToCart, clearFromCart, removeFromCart, state } = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearFromCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )

}