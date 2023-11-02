import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsScreen } from "../../features/restaurant/screens/restaurant.screen";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native-paper';



//  Settings screen Tab
const SettingsScreen = () => (
    <SafeArea>
        <Text>Settings!</Text>
    </SafeArea>);


//  Map screen tab
const MapScreen = () => (
    <SafeArea><Text>Maps!</Text>
    </SafeArea>);

const Tab = createBottomTabNavigator();


// function component for MyTabs UI
const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Restaurant') {
                        iconName = "md-restaurant";
                    } else if (route.name === 'Settings') {
                        iconName = "md-settings";
                    }
                    else if (route.name === 'Maps') {
                        iconName = "md-map";
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
            <Tab.Screen name="Maps" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

//  Return render function that calls all components for app navigator
export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
