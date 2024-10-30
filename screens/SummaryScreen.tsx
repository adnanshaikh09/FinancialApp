// SummaryScreen.tsx
import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { useTransactionContext } from '../context/TransactionContext';

const SummaryScreen = () => {
  const { transactions } = useTransactionContext();
  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <View style={{ padding: 10 }}>
      <Card>
        <Card.Content>
          <Text variant="headlineLarge">Total Expenses</Text>
          <Text variant="headlineMedium">${totalExpenses}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default SummaryScreen;
