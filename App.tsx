import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { TransactionProvider } from './context/TransactionContext';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    accent: '#03dac4',
  },
};
export default function App() {
  return (
    <PaperProvider>
      <TransactionProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </TransactionProvider>
    </PaperProvider>
  );
}
