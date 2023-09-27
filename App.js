import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from "./src/features/restaurant/screens/restaurant.screen";


import { useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato";


import { ThemeProvider } from "styled-components/native";
import { theme } from './src/infastructure/theme';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

