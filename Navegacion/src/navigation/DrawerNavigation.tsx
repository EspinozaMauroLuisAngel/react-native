import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from '../screens/common/AboutScreen';
import ProfileScreen from '../screens/common/ProfileScreen';
import AcademicsScreens from '../screens/common/AcademicsScreen';
import { StackNavigation } from "./StackNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => { 
     return (
        <Drawer.Navigator initialRouteName="Profile"> 
        <Drawer.Screen name= 'StackNavigation' options={{ title: 'Hone' }} component={StackNavigation}/> 
        <Drawer.Screen name ='Academics' component={ AcademicsScreens}/>
        <Drawer.Screen name = 'Profile' component={ ProfileScreen}/>
        <Drawer.Screen name = 'About' component={ AboutScreen}/>
        </Drawer.Navigator>

     )
}

export default DrawerNavigator
               