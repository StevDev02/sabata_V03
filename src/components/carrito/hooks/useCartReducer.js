import { useReducer } from "react"
import { CartReducer, cartInitialState } from "../reducer/reducerCart"

export function useCartReducer() {
    const [state, dispatch] = useReducer(CartReducer, cartInitialState)

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }

    const clearFromCart = (product) => {
        dispatch({ type: 'CLEAN_FROM_CART', payload: product })
    }

    const removeFromCart = () => {
        dispatch({ type: 'REMOVE_FROM_CART'})
    }

    return { addToCart, clearFromCart, removeFromCart, state }
}