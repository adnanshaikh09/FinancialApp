// screens/SummaryScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

// Updated transactions data (you could alternatively retrieve this from context or global state if needed)
const transactions = [
  { id: '1', name: 'Grocery', amount: 50, date: '2023-10-28', category: 'Food & Beverages', paymentMethod: 'Credit Card', location: 'Walmart Supercenter' },
  { id: '2', name: 'Electricity Bill', amount: 75, date: '2023-10-29', category: 'Utilities', paymentMethod: 'Bank Transfer', location: 'Online Payment' },
  { id: '3', name: 'Internet Bill', amount: 45, date: '2023-10-30', category: 'Utilities', paymentMethod: 'Credit Card', location: 'Online Payment' },
  { id: '4', name: 'Dining Out', amount: 60, date: '2023-10-27', category: 'Entertainment', paymentMethod: 'Debit Card', location: 'Olive Garden' },
  { id: '5', name: 'Movie Tickets', amount: 30, date: '2023-10-26', category: 'Entertainment', paymentMethod: 'Credit Card', location: 'AMC Theatres' },
  { id: '6', name: 'Gym Membership', amount: 40, date: '2023-10-25', category: 'Health & Fitness', paymentMethod: 'Bank Transfer', location: 'Fit4Less Gym' },
];

const SummaryScreen = () => {
  // Calculate total expenses
  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  // Calculate total number of transactions
  const transactionCount = transactions.length;

  return (
    <LinearGradient colors={['#6200ee', '#bb86fc']} style={styles.background}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.header}>Summary</Title>
            <Text style={styles.statLabel}>Total Expenses:</Text>
            <Text style={styles.statValue}>${totalExpenses}</Text>
            <Text style={styles.statLabel}>Number of Transactions:</Text>
            <Text style={styles.statValue}>{transactionCount}</Text>
          </Card.Content>
        </Card>
      </View>
    </LinearGradient>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    padding: 24,
    borderRadius: 16,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 16,
  },
});
