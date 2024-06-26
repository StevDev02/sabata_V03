
export function ItemsCart({ title, priceTotal, image_one, quantity, addToCart, category, clearFromCart }) {

    const formattedSubtotal = priceTotal.toFixed(2)

    return ( 
        <>
            <li className="flex relative py-4">
                <div className="h-24 shadow w-24 flex-shrink-0 overflow-hidden">
                    <img src={image_one} alt={title} className="h-full w-full object-cover object-center" />
                </div>

                <div className="ml-4 flex  flex-col">
                    <div>
                        <div className="flex text-start items-center justify-between text-sm">
                            <h3>{title}</h3>
                            <p className="ml-4">${formattedSubtotal}</p>
                        </div>
                    </div>
                    <div className="grid gap-y-1.5 w-full">
                        <div className="flex mt-1 items-center justify-between">
                            <p className="mt-1 text-start text-sm text-gray-500">{category}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[13px] ">Cantidad: {quantity}</p>
                            <button className="w-[24px] h-[24px] rounded-full shadow-md grid place-content-center" onClick={addToCart}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 5l0 14" />
                                    <path d="M5 12l14 0" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <button className="absolute top-2 border -left-2 bg-white  w-[24px] h-[24px] rounded-full shadow-md grid place-content-center "
                    onClick={clearFromCart}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                </button>
            </li>
        </>
     )
}