// screens/TransactionListScreen.tsx
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const transactions = [
  { id: '1', name: 'Grocery', amount: 50, date: '2023-10-28', category: 'Food & Beverages', paymentMethod: 'Credit Card', location: 'Walmart Supercenter' },
  { id: '2', name: 'Electricity Bill', amount: 75, date: '2023-10-29', category: 'Utilities', paymentMethod: 'Bank Transfer', location: 'Online Payment' },
  { id: '3', name: 'Internet Bill', amount: 45, date: '2023-10-30', category: 'Utilities', paymentMethod: 'Credit Card', location: 'Online Payment' },
  { id: '4', name: 'Dining Out', amount: 60, date: '2023-10-27', category: 'Entertainment', paymentMethod: 'Debit Card', location: 'Olive Garden' },
  { id: '5', name: 'Movie Tickets', amount: 30, date: '2023-10-26', category: 'Entertainment', paymentMethod: 'Credit Card', location: 'AMC Theatres' },
  { id: '6', name: 'Gym Membership', amount: 40, date: '2023-10-25', category: 'Health & Fitness', paymentMethod: 'Bank Transfer', location: 'Fit4Less Gym' },
];
  

  const TransactionListScreen = () => {
    const navigation = useNavigation();
  
    return (
      <LinearGradient colors={['#6200ee', '#bb86fc']} style={styles.background}>
        <View style={styles.container}>
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card
                style={styles.card}
                onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
              >
                <Card.Content>
                  <Title style={styles.title}>{item.name}</Title>
                  <Text style={styles.amount}>${item.amount}</Text>
                </Card.Content>
              </Card>
            )}
          />
        </View>
      </LinearGradient>
    );
  };
  
  export default TransactionListScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  amount: {
    fontSize: 18,
    color: '#6200ee',
    marginTop: 4,
  },
});
