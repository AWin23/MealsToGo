import React from 'react';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';
import { CompactRestaurantInfo } from '../../restaurant/compact-restaurant-info.component';

export const MapCallout = ({ restaurant }) => {
    return (
        <CompactRestaurantInfo 
            restaurant={restaurant}
        />
    )
}
