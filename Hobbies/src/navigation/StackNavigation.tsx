import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {HobbyDetails} from '../screens/HobbyDetails';

const Stack= createNativeStackNavigator();

export const StackNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'Categories' component={CategoriesScreen}
                    options={{
                        title: 'Mis categorias',
                        headerTitleAlign:'center',
                        headerStyle:{backgroundColor:'#4484AD'},
                        headerTintColor:'white',
                    }}/>
                <Stack.Screen name = 'Details' component={HobbyDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation