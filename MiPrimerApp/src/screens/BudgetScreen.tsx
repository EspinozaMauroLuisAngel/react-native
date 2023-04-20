import React, { useState } from "react";
import  { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import MyButton from "../components/MyButton";

const BudgetScreen = () => {

    const initialBudget = 1000;
    const [budget, setBudget] = useState(initialBudget);

    const increase = (value: number = 1) => {
        setBudget(budget + value);
    }
    
    const decrease = (value: number = 1) => {
        setBudget(budget - value);
    }

    return (
        <View style={{ flex: 1, marginTop: 20, alignContent: 'center' }}>
            <View style={{ flex: 2}}>
                <Text style={styles.mainText} > Presupuesto: { initialBudget } </Text>
                <Text style={[styles.secondaryText]} > Mi presupuesto actual: { budget } </Text>
            </View>

            <View style={{ flex: 2, flexDirection: 'row' }}>
                <MyButton title='Sumar' onPress={() => increase(100)} />
                <MyButton title='Restar' onPress={() => decrease(50)} />
            </View>
        </View>
    )
}

     const styles = StyleSheet.create({
         mainText: {
             fontWeight: 'bold',
             textAlign: 'center',
             fontSize: 40
         },
         secondaryText:  {
             textAlign: 'center',
             fontSize: 20
         }
     });

     

export default BudgetScreen