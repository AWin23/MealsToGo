import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, FlatList, SafeAreaView, } from 'react-native';
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsInfoCard } from "../components/restaurant-info-card";
import { Spacer } from "../../../components/spacers/spacer.component";

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


export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar placeholder="Search for Nearby Meals" />
        </SearchContainer>
        <RestaurantList
            data={[
                { name: 1 },
                { name: 2 },
                { name: 3 },
                { name: 4 },
                { name: 5 },
                { name: 6 },
                { name: 7 },
                { name: 8 },
                { name: 9 },
                { name: 10 },
                { name: 11 },
                { name: 12 },
                { name: 13 },
                { name: 14 },
            ]}
            renderItem={() => (
                <Spacer position="bottom" size="large">
                    <RestaurantsInfoCard />
                </Spacer>
            )}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16 }}
        />
    </SafeArea>
)


