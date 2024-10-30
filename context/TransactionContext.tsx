import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Transaction } from '../types/types';

const TransactionContext = createContext<{ transactions: Transaction[] }>({ transactions: [] });

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions] = useState<Transaction[]>([
    { id: '1', name: 'Grocery', amount: 50, date: '2023-10-28' },
    { id: '2', name: 'Electricity Bill', amount: 75, date: '2023-10-29' },
    // Add more mock data
  ]);

  return (
    <TransactionContext.Provider value={{ transactions }}>  
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = () => useContext(TransactionContext);