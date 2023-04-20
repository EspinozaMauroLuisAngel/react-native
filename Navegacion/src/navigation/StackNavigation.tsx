import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SubjectScreen from '../screens/SubjectScreen';
import SunbjectsScreen from '../screens/SunbjectsScreen';

import HomeScreen from '../screens/common/HomeScreen';
import { ISubject } from '../interfaces/ISubject';



    export type StackParams = {
        Home: undefined ,
        Subjects: undefined, 
        Subject: ISubject
    }

    const Stack = createNativeStackNavigator<StackParams>();
    
    export const StackNavigation = () => {

        return (

        <Stack.Navigator initialRouteName = 'Subject'>
            <Stack.Screen name= 'Home' component={ HomeScreen }/>
            <Stack.Screen name= 'Subjects' component={ SunbjectsScreen }/>
            <Stack.Screen name= 'Subject' component={ SubjectScreen }/>
        </Stack.Navigator>
        )
    }

    export default StackNavigation