

export function ItemFavorite({ title, image_one, category, clearFromFavorite }) {
    return ( 
        <>
            <li className="flex relative items-center py-7">
                <div className="h-[49px] w-[49px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src={image_one} alt={category} />
                </div>

                <div className="ml-4 text-start">
                    <h3 className="text-xs font-medium text-gray-900">{title}</h3>
                    <p className="mt-1 text-start text-xs text-gray-500">{category}</p>
                </div>

                <button
                className="absolute w-[28px] h-[28px] rounded-full shadow-md grid place-content-center translate-x-[-50%] translate-y-[-50%] top-[50%] right-0 "
                onClick={clearFromFavorite}
                >
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="#f26d6d"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-heart-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-.5 .428m-6 6l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M22 22l-5 -5" /><path d="M17 22l5 -5" /></svg>
                </button>
            </li>
        </>
     )
}