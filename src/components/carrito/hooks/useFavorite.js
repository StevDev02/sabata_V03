import { useContext } from "react"
import { FavoriteContext } from "../context/favorite"

export const useFavorite = () => {
    const favorite = useContext(FavoriteContext)

    return favorite
}