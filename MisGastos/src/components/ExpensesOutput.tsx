import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { IItem } from '../model/interfaces/IItem';
import ExpensesSummary from './ExpensesSummary';
import { DummyData } from '../model/data/DummyData';
import { ExpensesList } from './ExpensesList';
import { GlobalStyles } from '../ui/GlobalStyle';

interface Props {
    expenses: IItem[]
    period: String
}

const ExpensesOutput = ({ expenses, period }: Props) => {
    return (
        <View style={Styles.container}>
            <ExpensesSummary  expenses={expenses}  period={period} />
            <ExpensesList expenses={expenses} />
        </View>
    )
} 

export default ExpensesOutput;


const Styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: GlobalStyles.colors.gray
    }
  });