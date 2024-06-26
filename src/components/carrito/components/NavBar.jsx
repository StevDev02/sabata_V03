import { useEffect, useState } from "react"
import { CartShop } from "./Cart"
import { Category_Link } from "./category/Category_Link"
import { Filters } from "./Filters"
import { Favorite } from "./Favorite"
import { useFilters } from "../hooks/useFilters"
export function NavBar() {

    const [showCart, setShowCart] = useState(false)
    const [showFavorite, setShowFavorite] = useState(false)
    const [search, setSearch] = useState('')
    const {setFiler} = useFilters()

    const handleSearch = (e) => {
        const busqueda = e.target.value;
        setSearch(busqueda);
    
        if (busqueda === "") {
          setFiler(prevState => ({
            ...prevState,
            estilo: 'all',
            tipo: 'all',
          }));
        }
      };

    useEffect(() => {

        if (search === "") {
            setFiler( prevState => 
                ({...prevState, 
                    estilo: 'all'}))
        }

        if (search === "zapatos" || search === "Zapatos" || search === "Zapato" || search === "zapato") {
            setFiler( prevState => 
                ({...prevState, 
                    tipo: 'zapatos'}))
        }

    }, [search])


    return ( 
        <>
                <div id="filters" className="flex z-50 w-full px-4 h-10 justify-between items-center" >
                <div class="flex items-center gap-5">
                    <a href="/" id="toHome" data-astro-prefetch="tap" class="tracking-[5px]">SABATA</a>
                    <div class="w-[2px] h-[15px] bg-black"></div>
                    <p class="tracking-[2px]">TIENDA</p>
                </div>
                    
                    <div className="flex place-content-center gap-2">
                        <input className="border pl-4 border-b-white hover:shadow-lg shadow-md w-[520px] py-1 "  placeholder="Buscar productos" type="text"
                        onChange={handleSearch}
                        value={search} />
                        <button className="w-[36px] border shadow grid place-content-center h-[36px] "
                        onClick={handleSearch}>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                        </button>
                    </div>

                    <div className="flex items-center gap-x-2">
                        
                        <button className="text-xs mr-1 uppercase">Iniciar Sesion</button>
                    
                        <button className="w-[30px] h-[30px] rounded-full shadow-md grid place-content-center ">
                            {showFavorite ?
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="#f26d6d"  className="icon icon-tabler icons-tabler-filled icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
                            : 
                            <svg onClick={() => setShowFavorite(true)}  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                            }
                            { showFavorite &&  <Favorite setShowFavorite={setShowFavorite} /> }
                        </button>

                        <button className="w-[30px] cursor-pointer h-[30px] rounded-full shadow-md grid place-content-center "
                        onClick={() => {
                            setShowCart(true);
                            setShowFavorite(false);
                          }}>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" /><path d="M9 11v-5a3 3 0 0 1 6 0v5" /></svg>
                            { showCart && <CartShop setShowCart={setShowCart} />}
                        </button>
                    </div>
                </div>
            <section className="py-4 gap-y-10 mt-10 w-full grid place-content-center">
                    <Category_Link />
                    <Filters />
            </section>
            <div className="w-full pb-5 text-center">
                <h2 className="text-base mt-10 font-medium" >Productos</h2>
                <p className="text-sm poppins">¡Bienvenida al vestidor oficial de ASOS! Viene cargado de vestidos <br /> para mujer con los que renovar tu estilo.</p>
            </div>

            {showCart &&
                <button className="z-[999] right-4 top-[45.5px] translate-x-[-50%] translate-y-[-50%] fixed -m-2 p-2 text-gray-400 hover:text-gray-500"
                    onClick={() => setShowCart(false)}
                    type="button">
                    <svg className="w-[28px] border rounded-full shadow-lg h-[28px] " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"/></svg>
                </button>
            }
        </>
     )
}