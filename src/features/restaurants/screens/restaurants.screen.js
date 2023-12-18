import React, { useContext, useState } from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";

import { FadeInView } from "../../../components/animations/fade.animation";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext, FavouritesContextProvider } from "../../../services/favourites/favourites.context";

import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import { FavouritesBar } from "../components/favourites/favourites-bar.component";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { RestaurantList } from '../components/restaurant-list.styles';


const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`

const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const ErrorContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;


export const RestaurantsScreen = ({ navigation }) => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    const { favourites } = useContext(FavouritesContext);
    const [isToggled, setIsToggled] = useState(false);

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
            <Search
                isFavouritesToggled={isToggled}
                onFavouritesToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled && <FavouritesBar
                favourites={favourites}
                onNavigate={navigation.navigate}
            />
            }
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("RestaurantDetail", {
                                    restaurant: item,
                                })
                            }
                        >
                            <Spacer position="bottom" size="large">
                                <FadeInView>
                                    <RestaurantInfoCard restaurant={item} />
                                </FadeInView>
                            </Spacer>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
};


