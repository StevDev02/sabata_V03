import  InitialProducts from "./mocks/products.json"
import { ProductsShoopingCart } from "./components/Products";
import { CartProvider } from "./context/cart";
import { NavBar } from "./components/NavBar";
import { FavoriteProvider } from "./context/favorite";
import { useFilters } from "./hooks/useFilters";
import { useEffect, useState } from "react";


export function Shop() {

    // const [initialProducts, setInitialProducts] = useState()
    const { filterProducts } = useFilters()
    const [isLink, setIsLink] = useState(false);

    // useEffect(() => {
    //     const unsubscribe = onSnapshot(collection(projectAuth, "products"), (snapshot) => {
    //       const updatedProducts = snapshot.docs.map((doc) => ({
    //         ...doc.data(),
    //         id: doc.id,
    //       }));
    //       setInitialProducts(updatedProducts);
    //     });
    
    //     return () => unsubscribe()
    //   }, []);

    const filteredProducts = filterProducts(InitialProducts)

    useEffect(() => {
        // Verificamos si la URL es /cart cuando el componente está montado en el cliente
        const url = new URL(window.location.href);
        const checkIsCart = url.pathname.endsWith('/cart');
        setIsLink(checkIsCart)
      }, []);

    return ( 
        <>
            <CartProvider>
                <FavoriteProvider>
                    <nav className="w-full py-4 px-8 relative ">
                        <NavBar />
                    </nav>
                    <main className="w-full mt-0 grid place-content-center">
                        <ProductsShoopingCart products={filteredProducts} />
                    </main>
                </FavoriteProvider>
            </CartProvider>
            <button className="w-[40px] bg-white rounded-full shadow-xl h-[40px] border right-3 bottom-3 translate-x-[-50%] translate-y-[-50%] fixed -m-2 p-2" type="button">
                <a href="#filters"><svg xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-filter-question"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 19l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414" /><path d="M19 22v.01" /><path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /></svg></a>
            </button>
        </>
     )
}