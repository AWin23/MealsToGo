import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const NoFavouritesArea = styled(SafeArea)`
    alignItems: center;
    justifyContent: center;
`;
export const FavouritesScreen = ({ navigation }) => {
    console.log("FAVOURITES SCREEN IS FIRED");
    const { favourites } = useContext(FavouritesContext);

    return favourites.length ? (
        <SafeArea>
            <RestaurantList
                data={favourites}
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
                                <RestaurantInfoCard restaurant={item} />
                            </Spacer>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    ) : (
        <NoFavouritesArea>
            <Text center>No favorites yet</Text>
        </NoFavouritesArea>
    );
};
