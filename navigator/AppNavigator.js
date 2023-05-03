import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';


const Tab = createBottomTabNavigator();

const AppNavigator=() => {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen component={HomeScreen}  name='Home'/>
          </Tab.Navigator>
        </NavigationContainer>
      );
}


export default AppNavigator