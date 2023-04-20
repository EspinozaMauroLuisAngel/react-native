import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { IItem } from '../model/interfaces/IItem';
import { GlobalStyles } from '../ui/GlobalStyle';

interface Props {
    expenses: IItem[]
    period?: String
}


const ExpensesSummary = ({ expenses, period }: Props) => {

    const total:number = expenses.reduce((total, expense) => total + (expense.price * expense.qty), 0);

    return (
        <View style={Styles.container}>
            <Text style={Styles.period}>{period}</Text>
            <Text style={Styles.sum}>${total.toFixed(2)}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.sea,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    },
});

export default ExpensesSummary