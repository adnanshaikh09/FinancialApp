// navigation/TransactionsStack.tsx
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from '../screens/TransactionListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

export type TransactionsStackParamList = {
  TransactionList: undefined;
  TransactionDetail: { transaction: { id: string; name: string; amount: number; date: string } };
};

const Stack = createStackNavigator<TransactionsStackParamList>();

const TransactionsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TransactionList" component={TransactionListScreen} options={{ title: 'Transactions' }} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Transaction Details' }} />
  </Stack.Navigator>
);

export default TransactionsStack;
