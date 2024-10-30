// TransactionListScreen.tsx
import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TransactionsStackParamList } from '../navigation/TransactionsStack';

type TransactionListScreenProps = NativeStackScreenProps<TransactionsStackParamList, 'TransactionList'>;

const transactions = [
  { id: '1', name: 'Grocery', amount: 50, date: '2023-10-28' },
  { id: '2', name: 'Electricity Bill', amount: 75, date: '2023-10-29' },
  // Add more mock data as needed
];

const TransactionListScreen: React.FC<TransactionListScreenProps> = ({ navigation }) => {
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card onPress={() => navigation.navigate('TransactionDetail', { transaction: item })} style={{ marginBottom: 10 }}>
            <Card.Title title={item.name} subtitle={`$${item.amount}`} />
            <Card.Content>
              <Text>Date: {item.date}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default TransactionListScreen;
