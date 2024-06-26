
import { useCart } from '../hooks/useCart.js'
import { useState } from 'react';
import { useFavorite } from '../hooks/useFavorite.js';


export function ProductsShoopingCart({ products }) {
    const { addToCart, cart, clearFromCart } = useCart()
    const { addToFavorite, favorite } = useFavorite();

    const checkedProductInCart = (product) => {
        return cart.some(item => item.id === product.id);
    };

    const checkedProductInFavorite = (product) => {
        return favorite.some(item => item.id === product.id);
    };

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        return words.slice(0, wordLimit).join(' ')
    };

    const ProductItem = ({ product }) => {
        const [isHovered, setIsHovered] = useState(false);
        const isProductInCart = checkedProductInCart(product);
        const isProductInFavorite = checkedProductInFavorite(product);

        return (
            <li className='w-[270px] h-[430px]' key={product.id}>
                <div
                    className='w-full relative bg-center bg-no-repeat bg-cover h-[320px]'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>

                    <img className='h-full cover w-full' 
                    src={isHovered ? product.image_two : product.image_one} alt={product.name}/>

                    <button className='bg-[#fafafa] grid place-content-center shadow-xl w-8 h-8 absolute -translate-y-[-50%]  -translate-x-[-50%] bottom-1 right-3 rounded-full'
                        onClick={() => addToFavorite(product)}>
                        {isProductInFavorite ?
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="#f26d6d"  className="icon icon-tabler icons-tabler-filled icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                        }
                    </button>

                </div>
                <div className='w-full h-[90px] gap-5 grid grid-rows-3 py-2 px-1'>
                    <p className='lowercase leading-3 text-wrap text-[11px]'>{truncateDescription(product.description, 6)}</p>
                    <div className='flex items-center justify-between'>
                        <span className='text-[11px] text-[#2d2d2d] scale-y-[115%] font-bold'>${product.price} - # {product.talla}</span>
                        <button
                            onClick={() => isProductInCart ? clearFromCart(product) : addToCart(product)}
                            className='w-[34px] h-[34px] rounded-full shadow-md grid place-content-center'>
                            { isProductInCart ?
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="#f26d6d"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M13 17h-7v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /><path d="M22 22l-5 -5" /><path d="M17 22l5 -5" /></svg>
                                :
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12.5 17h-6.5v-14h-2" /><path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                            }
                        </button>    
                    </div>
                    <div className=' items-center flex gap-2 -mt-2 '>
                        {product.clasificar === 'popular' ? <p className='h-[16px] text-[9px] text-white bg-[#666] border inline-block px-2 font-bold ' >POPULAR</p> : null}
                        {product.clasificar === 'descuento' ? <p className='h-[16px] text-[9px] text-[#666] border inline-block px-2 font-bold ' >DESCUENTO</p> : null}
                        {product.clasificar === 'nuevo' ? <p className='h-[16px] text-[9px] text-[#666] border inline-block px-2 font-bold ' >NEW</p> : null}
                    </div>
                </div>
            </li>
        );
    };

    return ( 
        <>
                <ul className='grid gap-x-10 gap-y-5 items-center justify-center px-[100px] md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </ul>
        </>
    );
}
