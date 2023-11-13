import React, { useContext } from 'react';

import { List } from "react-native-paper";
import { Text, Button } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const SettingsScreen = ({ navigation }) => {
    return (
        <SafeArea>
            <List.Section>
                <List.Item
                    style={{ padding: 16 }}
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate("Favourites")}
                />
                <List.Item
                    style={{ padding: 16 }}
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                />
            </List.Section>
        </SafeArea>
    );
};
