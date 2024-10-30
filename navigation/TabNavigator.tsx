import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsStack from './TransactionsStack';
import SummaryScreen from '../screens/SummaryScreen';
import { IconButton } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Transactions') iconName = 'file-multiple';
        else if (route.name === 'Summary') iconName = 'chart-bar';

        return <IconButton icon={iconName} color={color} size={size} />;
      },
    })}
  >
    <Tab.Screen name="Transactions" component={TransactionsStack} />
    <Tab.Screen name="Summary" component={SummaryScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
