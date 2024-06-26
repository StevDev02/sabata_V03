import { useReducer } from "react"
import { FavoriteReducer, favoriteInitialState } from "../reducer/reducerFavorite"

export function useFavoriteReducer() {
    const [state, dispatch] = useReducer(FavoriteReducer, favoriteInitialState)

    const addToFavorite = (product) => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: product })
    }

    const clearFromFavorite = (product) => {
        dispatch({ type: 'CLEAN_FROM_FAVORITE', payload: product })
    }

    const removeFromFavorite = () => {
        dispatch({ type: 'REMOVE_FROM_FAVORITE'})
    }

    return { addToFavorite, clearFromFavorite, removeFromFavorite, state }
}