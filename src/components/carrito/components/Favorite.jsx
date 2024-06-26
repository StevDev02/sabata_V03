import { useFavorite } from "../hooks/useFavorite";
import { ItemFavorite } from "./ItemFavorite";


export function Favorite({ setShowFavorite }) {

    const {
        favorite,
        clearFromFavorite,
        removeFromFavorite
    } = useFavorite()

    return ( 
        <>
                        <div className="translate-x-[-50%] top-14 right-[-6.5%] border flex pointer-events-auto fixed z-50 rounded-md w-[370px] h-[330px] flex-col bg-white">
                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                                <h2 className="text-base font-medium text-gray-900" id="slide-over-title">Favoritos</h2>
                                <div className="ml-3 flex h-7 items-center">
                                <button
                                onClick={() => setShowFavorite(false)}
                                type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                    <svg className="w-[28px] border rounded-full shadow-lg h-[28px] " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"/></svg>
                                </button>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {favorite.map( product => (
                                    <ItemFavorite key={product.id}
                                    {...product}
                                    clearFromFavorite={() => clearFromFavorite(product)}
                                    />
                                ))}
                                </ul>
                                </div>
                            </div>
                            </div>

                            <button className="h-[40px] bg-[#f26d6d] grid place-content-center rotate-180 shadow-[#f26d6d] shadow-sm w-full" onClick={removeFromFavorite}>
                                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="white" d="m899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-.3 1.5-.4 3-.4 4.4c0 14.4 11.6 26 26 26h723c1.5 0 3-.1 4.4-.4c14.2-2.4 23.7-15.9 21.2-30M204 390h272V182h72v208h272v104H204zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260z"/></svg>
                            </button>
                        </div>
        </>
     )
}