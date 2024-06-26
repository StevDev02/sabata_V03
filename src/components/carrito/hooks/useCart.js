import { useContext } from "react"
import { CartContext } from "../context/cart"

export const useCart = () => {
    const cart = useContext(CartContext)

    return cart
}