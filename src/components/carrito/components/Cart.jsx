import { useCart } from "../hooks/useCart.js"
import { ItemsCart } from "./ItemsCart.jsx"


export function CartShop() {
    const {
        cart,
        addToCart,
        removeFromCart,
        clearFromCart
    } = useCart()

    const subtotal = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)
    
    const formattedSubtotal = subtotal.toFixed(2)

    return ( 
        <>
                <div className="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div className="pointer-events-auto w-screen max-w-[390px] ">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                <div className="ml-3 flex h-7 items-center">
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="flow-root">
                                <ul role="list" className="-my-6 ">
                                {cart.map( product => (
                                    <ItemsCart key={product.id}
                                    {...product}
                                    clearFromCart={() => clearFromCart(product)}
                                    addToCart={() => addToCart(product)}
                                    />
                                ))}
                                </ul>
                                </div>
                            </div>
                            </div>

                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-sm font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>${formattedSubtotal}</p>
                            </div>
                            <p className="mt-2 text-xs text-gray-500">Los gastos de envío y los impuestos se calculan al finalizar la compra.</p>
                            <div className="mt-6 gap-2 items-center flex">
                                <button className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 w-[260px] h-[46px] text-sm font-medium text-white shadow-sm hover:bg-blue-600">Finalizar compra</button>
                                <button
                                onClick={removeFromCart}
                                className="flex h-[46px] w-[40px] items-center justify-center rounded-md  bg-transparent text-sm font-medium shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg>
                                </button>
                            </div>
                            <div className="mt-6 gap-2 flex justify-center text-center text-sm text-gray-500">
                                <p> or </p>
                                <button type="button" className="font-medium text-blue-500 hover:text-blue-700">
                                    Revisar carrito
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
     )
}