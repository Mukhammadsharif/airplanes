import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from './screens/Menu';
import Main from './screens/Main';
import Detail from './screens/Detail';
import Order from './screens/Order';
import OrderConfirm from './screens/OrderConfirm';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={Menu}
          name="Menu"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={Main}
          name="Main"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={Detail}
          name="Detail"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={Order}
          name="Order"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={OrderConfirm}
          name="OrderConfirm"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
