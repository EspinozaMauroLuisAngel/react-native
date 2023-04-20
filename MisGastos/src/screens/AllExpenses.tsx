import React from 'react';
import { Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';
import { DummyData } from '../model/data/DummyData';

export const AllExpenses = () => {
  const period = 'Todos ';
  return (
    <>
      <ExpensesOutput  period={period} expenses={DummyData}/>
    </>
  )
}
