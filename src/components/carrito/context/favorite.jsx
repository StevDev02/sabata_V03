import { createContext } from "react"
import { useFavoriteReducer } from "../hooks/useFavoriteReducer"

export const FavoriteContext = createContext()

export const FavoriteProvider = ({ children }) => {

    const { addToFavorite, clearFromFavorite, removeFromFavorite, state } = useFavoriteReducer()

    return (
        <FavoriteContext.Provider value={{
            favorite: state,
            addToFavorite,
            clearFromFavorite,
            removeFromFavorite
        }}>
            {children}
        </FavoriteContext.Provider>
    )

}