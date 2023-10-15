import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, FlatList, SafeAreaView, } from 'react-native';
import { View } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacers/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import { Search } from '../components/search.component';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";


const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`

const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;


export const RestaurantsScreen = () => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    return (

        <SafeArea>
            {isLoading && (
                <LoadingContainer style={{ position: "absolute", top: "50%", left: "50%" }}>
                    <Loading size={50} animating={true} color={MD2Colors.blue300} />
                </LoadingContainer>
            )}

            {error && (
                <ErrorContainer style={{ position: "absolute", top: "50%", left: "50%" }}>
                    Unable to Find Nearby Data 🥲
                </ErrorContainer>
            )}
            <Search />
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


