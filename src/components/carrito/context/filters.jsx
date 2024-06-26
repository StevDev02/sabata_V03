import { useState } from "react"
import { createContext } from "react"

//1. Creamos el contexto FilterContext
export const FilterContext = createContext()

//2. Creamos el Provider para proveer el contexto a los componentes
export function FilterProvider({ children }) {
    const [filter, setFiler] = useState({
        category: 'all',
        minPrice: 0,
        clasificar: 'all',
        talla: "all",
        estilo: 'all',
        color: 'all',
        tipo: 'all',
      })
    return (
        <FilterContext.Provider value={{
            filter,
            setFiler
        }}>
            {children}
        </FilterContext.Provider>
    )
}


