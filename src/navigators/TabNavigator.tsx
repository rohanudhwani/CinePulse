import React from "react";
import HomeScreen from "../screens/HomeScreen";
import TicketScreen from "../screens/TicketScreen";
import SearchScreen from "../screens/SearchScreen";
import UserAccountScreen from "../screens/UserAccountScreen";
import { COLORS, FONTSIZE, SPACING } from "../theme/theme";
import CustomIcon from "../components/CustomIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Ticket" component={TicketScreen} />
            <Tab.Screen name="User" component={UserAccountScreen} />
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({

});

export default TabNavigator;