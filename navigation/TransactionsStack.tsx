// navigation/TransactionsStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionListScreen from '../screens/TransactionListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

// Define the type for the stack parameters
export type TransactionsStackParamList = {
  TransactionList: undefined;
  TransactionDetail: { transaction: { id: string; name: string; amount: number; date: string; category: string; paymentMethod: string; location: string } };
};

const Stack = createNativeStackNavigator<TransactionsStackParamList>();

const TransactionsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TransactionList" component={TransactionListScreen} options={{ title: 'Transactions' }} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Transaction Details' }} />
  </Stack.Navigator>
);

export default TransactionsStack;
