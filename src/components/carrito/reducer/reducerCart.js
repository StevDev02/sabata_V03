// Verificar si estamos en un entorno del navegador
const isBrowser = typeof window !== 'undefined';

// Obtener el estado inicial del carrito desde localStorage, si está disponible
export const cartInitialState = isBrowser ? JSON.parse(window.localStorage.getItem('cart')) || [] : [];

// Actualizar localStorage solo si estamos en un entorno del navegador
export const updateLocalStorage = (state) => {
    if (isBrowser) {
        window.localStorage.setItem('cart', JSON.stringify(state));
    }
};

export const CartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;

    switch (actionType) {
        case 'ADD_TO_CART': {
            const { id } = actionPayload;
            const productInCart = state.findIndex((item) => item.id === id);

            if (productInCart >= 0) {
                const newState = [
                    ...state.slice(0, productInCart),
                    {
                        ...state[productInCart],
                        quantity: state[productInCart].quantity + 1,
                        priceTotal: state[productInCart].priceTotal + actionPayload.price
                    },
                    ...state.slice(productInCart + 1)
                ];
                updateLocalStorage(newState);
                return newState;
            }

            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1,
                    priceTotal: actionPayload.price
                }
            ];

            updateLocalStorage(newState);
            return newState;
        }

        case 'CLEAN_FROM_CART': {
            const { id } = actionPayload;
            const newState = state.filter((item) => item.id !== id);
            updateLocalStorage(newState);
            return newState;
        }

        case 'REMOVE_FROM_CART': {
            updateLocalStorage([]);
            return [];
        }

        default:
            return state;
    }
};
