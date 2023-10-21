import React, { useContext, useState } from "react";
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
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    
    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for Nearby Meals"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
            />
        </SearchContainer>
    );
};