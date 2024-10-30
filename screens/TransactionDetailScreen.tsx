// screens/TransactionDetailScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TransactionsStackParamList } from '../navigation/TransactionsStack';

type TransactionDetailScreenRouteProp = RouteProp<TransactionsStackParamList, 'TransactionDetail'>;

const TransactionDetailScreen = () => {
  const route = useRoute<TransactionDetailScreenRouteProp>();
  const { transaction } = route.params;

  return (
    <LinearGradient colors={['#6200ee', '#bb86fc']} style={styles.background}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>{transaction.name}</Title>
            <Text style={styles.amount}>Amount: ${transaction.amount}</Text>
            <Text style={styles.date}>Date: {transaction.date}</Text>
            <Text style={styles.category}>Category: {transaction.category}</Text>
            <Text style={styles.paymentMethod}>Payment Method: {transaction.paymentMethod}</Text>
            <Text style={styles.location}>Location: {transaction.location}</Text>
          </Card.Content>
        </Card>
      </View>
    </LinearGradient>
  );
};

export default TransactionDetailScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
  },
  card: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ee',
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  paymentMethod: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
});
