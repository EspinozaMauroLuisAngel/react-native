import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AllExpenses } from '../screens/AllExpenses';
import { RecentExpenses } from '../screens/RecentExpenses';
import { ManageExpenses } from '../screens/ManageExpenses';
import { GlobalStyles } from '../ui/GlobalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from '../components/IconButton';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpensesOverview() {
    return (
        <Tab.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: { backgroundColor: GlobalStyles.colors.blue },
                headerTintColor: GlobalStyles.colors.white,
                tabBarStyle: { backgroundColor: GlobalStyles.colors.navy },
                tabBarActiveTintColor: GlobalStyles.colors.beige,
                headerRight: ({ tintColor }) => (
                    <IconButton
                        icon="add"
                        size={24}
                        color={tintColor}
                        onPress={() => {
                            navigation.navigate('ManageExpenses');
                        }}
                    />
                ),

            })}
        >
            <Tab.Screen name="RecentExpenses"
                component={RecentExpenses}
                options={{
                    title: 'Mis últimos gastos',
                    tabBarLabel: 'Últimos gastos',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="hourglass" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="AllExpenses" component={AllExpenses}
                options={{
                    title: 'Todos los gastos',
                    tabBarLabel: 'Todos los gastos',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: GlobalStyles.colors.blue },
                    headerTintColor: GlobalStyles.colors.white,
                }}
            >
                <Stack.Screen name="ExpensesOverview"
                    component={ExpensesOverview}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="ManageExpenses"
                    component={ManageExpenses}
                    options={{
                        presentation: 'modal',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
