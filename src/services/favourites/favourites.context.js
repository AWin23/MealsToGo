import React, { createContext, useState } from 'react';
import { Provider } from 'react-native-paper';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    };

    const remove = (restaurant) => {
        const newFavourites = favourites.filter(
            (x) => x.placeId !== restaurant.placeId
        );

        setFavourites(newFavourites);
    }

    return (
        <FavouritesContext.Provider
        value={{
            favourites,
            addToFavourites: remove,  
        }}
        >
            {children}
        </FavouritesContext.Provider>
    )
}