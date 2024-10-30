// navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsStack from './TransactionsStack';
import SummaryScreen from '../screens/SummaryScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerTitle: 'Finance Manager',  // Set app name as header title
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Transactions') {
          iconName = 'format-list-bulleted';
        } else if (route.name === 'Summary') {
          iconName = 'chart-pie';
        }
        return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
      },
      tabBarActiveTintColor: '#6200ee',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Transactions" component={TransactionsStack} />
    <Tab.Screen name="Summary" component={SummaryScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
