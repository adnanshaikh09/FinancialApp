// TransactionDetailScreen.tsx
import React from 'react';
import { View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TransactionsStackParamList } from '../navigation/TransactionsStack';

type TransactionDetailScreenProps = NativeStackScreenProps<TransactionsStackParamList, 'TransactionDetail'>;

const TransactionDetailScreen: React.FC<TransactionDetailScreenProps> = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={{ padding: 10 }}>
      <Card>
        <Card.Title title={transaction.name} />
        <Card.Content>
          <Text>Amount: ${transaction.amount}</Text>
          <Text>Date: {transaction.date}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default TransactionDetailScreen;
