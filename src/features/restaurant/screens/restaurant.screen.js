import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, FlatList, SafeAreaView, } from 'react-native';
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacers/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 2px;
  elevation: 2; /* This property adds a shadow on Android */
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;


export const RestaurantsScreen = () => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    console.log(error);
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="Search for Nearby Meals" />
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    console.log(item);
                    return (
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    );
                }}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    )
};


