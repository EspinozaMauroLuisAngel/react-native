import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigation';

const app = () => {
    return (

      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>

    )
}

export default app


