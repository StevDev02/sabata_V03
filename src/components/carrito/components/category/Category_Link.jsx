import { useCallback } from "react"
import { useFilters } from "../../hooks/useFilters"

export function Category_Link() {

    const { setFiler } = useFilters()

    const handleChangeCategory = useCallback((e) => {
        setFiler( prevState => 
            ({...prevState, 
                category: e.target.value}))
    }, [ setFiler ])

    return ( 
        <>
            <div className=" text-xs gap-6 grid items-center lg:grid-cols-5 md:grid-cols-3  xl:grid-cols-5  ">
                <button  value={'all'} onClick={handleChangeCategory} className=" shadow-md border-t border-black/5 h-7 transition-all ease-in-out duration-200 px-6" >Todos los productos</button>
                <button  value={'mens clothing'} onClick={handleChangeCategory} className=" shadow-md border-t border-black/5  h-7 ransition-all ease-in-out duration-200  px-6">mens clothing</button>
                <button  value={'jewelery'} onClick={handleChangeCategory} className=" shadow-md border-t border-black/5  h-7 ransition-all ease-in-out duration-200  px-6">jewelery</button>
                <button  value={'electronics'} onClick={handleChangeCategory} className=" shadow-md border-t border-black/5  h-7 ransition-all ease-in-out duration-200  px-6">electronics</button>
                <button  value={'womens clothing'} onClick={handleChangeCategory} className=" shadow-md border-t border-black/5  h-7 ransition-all ease-in-out duration-200  px-6">womens clothing</button>
            </div>
        </>
     )
}