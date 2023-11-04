import React, { useContext, useEffect, useState } from "react";
import styled from 'styled-components/native';
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 2px;
  elevation: 2; /* This property adds a shadow on Android */
  position: absolute; 
  z-index: 999;
  top: 35px;
  width: 100%;
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                icon="map"
                value={searchKeyword}
                onSubmitEditing={() => {
                    console.log("useeffect fired in search.components.js");
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
            />
        </SearchContainer>
    );
};