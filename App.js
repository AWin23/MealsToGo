import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { Text, View } from 'react-native';



import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";


import { ThemeProvider } from "styled-components/native";
//import * as firebase from 'firebase';

import { theme } from './src/infastructure/theme';
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import { Navigation } from "./src/infastructure/navigation";

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDZ5_60CZkewOZWW9A56Ga4GPStgvnhCPA",
//   authDomain: "mealstogo-d9f5a.firebaseapp.com",
//   projectId: "mealstogo-d9f5a",
//   storageBucket: "mealstogo-d9f5a.appspot.com",
//   messagingSenderId: "1056370946452",
//   appId: "1:1056370946452:web:eb25a1ff1d550d3605df81"
// };

// firebase.initializeApp(firebaseConfig);


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

