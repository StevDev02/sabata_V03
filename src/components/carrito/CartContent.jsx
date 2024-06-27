import { useCartShow } from "@/components/carrito/hooks/useCartShow";
import { useEffect, useState } from "react";

export function CartContentShow() {

    const cart = useCartShow();
    const [showCart, setShowCart] = useState(false);
    
    useEffect(() => {
        if (cart.length > 0) {
            setShowCart(true);
        } else {
            setShowCart(false);
        }
    }, [cart]);
    

    return ( 
        <>
            <section className=" px-[65px] mt-[32px] ">
                <h1 className="mb-10 text-start text-4xl font-bold">Carrito de Compras</h1>
                <div className="justify-between flex">
                    {showCart ? 
                        <ul>
                        {cart.map(item => (
                            <li key={item.id} className="h-[272px] relative w-[680px] border-b border-t flex items-center gap-4 justify-start">
                                <div className="w-[192px] grid shadow-lg border place-content-center h-[194px]">
                                    <img className="object-cover" src={item.image_one} />
                                </div>
                                <div className="flex gap-x-24">
                                    <div className="grid gap-14 justify-center">
                                        <div className="flex flex-col text-sm gap-y-1.5">
                                            <h4 className="text-black/80 font-medium">{item.title}</h4>
                                            <p className="text-black/50 text-[15px] font-medium">Talla: #{item.talla}</p>
                                            <p className="text-black/50 text-[15px] font-medium">Precio: ${item.price}</p>
                                            <h4 className="text-black/80 font-medium">Cantidad: <span>{item.quantity}</span></h4>
                                        </div>
                                        <div className="flex gap-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                            <p className="text-black/80 text-sm font-medium">Disponible</p>
                                        </div>
                                    </div>
                                    <div className="w-[252px] text-sm grid gap-y-14">
                                        <div>
                                            <h4 className="text-black/80 font-medium">Descripción</h4>
                                            <p className="text-black/50 font-medium">{item.description.slice(0, 100)}{item.description.length > 100 && '...'}</p>
                                        </div>
                                        <div className="flex gap-x-14 items-center">
                                            <div className="flex gap-x-3">
                                                <h4 className="text-black/80 font-medium">Color: </h4>
                                                <div className="w-6 h-6 rounded-full" 
                                                style={{backgroundColor: item.color}}></div>
                                            </div>
                                                    {item.clasificar === 'popular' ? <p className='h-[22px] text-[9px] text-white bg-[#666] border inline-block px-8 font-bold ' >POPULAR</p> : null}
                                                    {item.clasificar === 'descuento' ? <p className='h-[22px] text-[9px] text-[#666] border inline-block px-8 font-bold ' >DESCUENTO</p> : null}
                                                    {item.clasificar === 'nuevo' ? <p className='h-[22px] text-[9px] text-[#666] border inline-block px-8 font-bold ' >NEW</p> : null}
                                        </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    : 
                    <p className="text-black/80 text-xl font-medium">no hay productos en el carrito</p>}
                    
                    <div className="w-[468px] bg-white grid gap-y-1 h-[373px] text-[15px] border rounded-lg p-8 ">
                    {showCart ? 
                        <div>
                            <h2 className="text-black/80 text-xl font-medium">Order summary</h2>
                            <div className="flex items-center justify-between h-[52px] border-b ">
                                <p className="text-black/50 font-medium">Subtotal</p>
                                <p className="text-black/80 text-[15px] font-medium">$120.00</p>
                            </div>
                            <div className="flex items-center justify-between h-[52px] border-b ">
                                <p className="text-black/50 font-medium">Shipping estimate</p>
                                <p className="text-black/80 text-[15px] font-medium">$120.00</p>
                            </div>
                            <div className="flex items-center justify-between h-[52px] border-b ">
                                <p className="text-black/50 font-medium">Tax estimate</p>
                                <p className="text-black/80 text-[15px] font-medium">$120.00</p>
                            </div>
                            <div className="flex items-center justify-between h-[52px] ">
                                <p className="text-black/80 text-lg font-medium">Order total</p>
                                <p className="text-black/80 text-lg font-medium">$120.00</p>
                            </div>
                            <button className="mt-6 w-full rounded-md bg-blue-500 h-[50px] font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                        </div>
                        : 
                        <div className="flex flex-col items-center">
                            <p className="text-black/80 text-center text-xl font-medium">Agrega productos en la tienda para cotizar tus productos</p>
                            <a href="/es/shop" className="mt-6 grid cursor-pointer place-content-center px-28 rounded-md bg-blue-500 h-[50px] font-medium text-blue-50 hover:bg-blue-600">Visitar Tienda</a>
                        </div>
                    }
                    </div>
                </div>
            </section>
        </>
    );
}
