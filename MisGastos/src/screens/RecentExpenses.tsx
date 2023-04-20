import React from 'react'
import { Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';
import { DummyData } from '../model/data/DummyData';


export const RecentExpenses = () => {

  const period = 'Mes actual';
  const data = DummyData.filter((item) => item.date > new Date('2023-04-08'));

  console.log(data);
 

  return (
    <>     
      <ExpensesOutput period={period} expenses={data} />
    </>
  )
}
