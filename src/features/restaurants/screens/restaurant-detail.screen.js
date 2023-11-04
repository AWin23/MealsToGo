import React from 'react';
import { ScrollView } from 'react-native';
import { List, Icon, MD3Colors } from 'react-native-paper';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />

      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={props => <List.Icon {...props} icon="bread-slice" />}>
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={props => <List.Icon {...props} icon="food-off" />}
          onPress={handlePress}>
          <List.Item title="Burger w/Fries" />
          <List.Item title="Steak Sandwich" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={props => <List.Icon {...props} icon="food-variant" />}
          onPress={handlePress}>
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={props => <List.Icon {...props} icon="cup" />}
          onPress={handlePress}>
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
