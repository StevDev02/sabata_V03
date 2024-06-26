import { useContext } from "react"
import { FilterContext } from "../context/filters"

export function useFilters() {

    const {filter , setFiler} = useContext(FilterContext)

    
  
    const filterProducts = (products) => {
      try {
          if (!products) return []

          return products.filter((product) => {
              return (
                  product.price >= filter.minPrice &&
                  (filter.category === "all" || product.category === filter.category) &&
                  (filter.clasificar === "all" || product.clasificar === filter.clasificar) &&
                  (filter.talla === "all" || product.talla === filter.talla) &&
                  (filter.estilo === "all" || product.estilo === filter.estilo) &&
                  (filter.color === "all" || product.color === filter.color) &&
                  (filter.tipo === "all" || product.tipo === filter.tipo)
              );
          });
      } catch (error) {
          console.error("Error filtering products:", error);
          return []
      }
  };
  
    return {filter, filterProducts, setFiler}
  }