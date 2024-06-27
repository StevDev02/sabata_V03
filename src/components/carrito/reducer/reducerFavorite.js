// Verificar si estamos en un entorno del navegador
const isBrowser = typeof window !== 'undefined';

function getInitialFavoriteState() {
    if (!isBrowser) return [];

    const storedFavorites = window.localStorage.getItem('favorite');
    try {
        if (storedFavorites) {
            const parsedFavorites = JSON.parse(storedFavorites);
            if (Array.isArray(parsedFavorites)) {
                return parsedFavorites;
            } else {
                console.error('Invalid data found in localStorage for favorite. Initializing with empty array.');
            }
        }
    } catch (error) {
        console.error('Error parsing localStorage data for favorite. Initializing with empty array.', error);
    }
    return [];
}

export const favoriteInitialState = getInitialFavoriteState();

export const updateLocalStorage = (state) => {
    if (isBrowser) {
        try {
            window.localStorage.setItem('favorite', JSON.stringify(state));
        } catch (error) {
            console.error('Error saving data to localStorage for favorite.', error);
        }
    }
};

export const FavoriteReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;

    switch (actionType) {
        case 'ADD_TO_FAVORITE': {
            const { id } = actionPayload;
            const productInFavorite = state.findIndex(item => item.id === id);
            if (productInFavorite >= 0) {
                return state;
            }
            const newState = [...state, { ...actionPayload }];
            updateLocalStorage(newState);
            return newState;
        }
        case 'CLEAN_FROM_FAVORITE': {
            const { id } = actionPayload;
            const newState = state.filter(item => item.id !== id);
            updateLocalStorage(newState);
            return newState;
        }
        case 'REMOVE_FROM_FAVORITE': {
            updateLocalStorage([]);
            return [];
        }
        default:
            return state;
    }
};
