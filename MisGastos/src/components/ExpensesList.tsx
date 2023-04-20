import { FlatList, Text } from 'react-native'
import { IItem } from '../model/interfaces/IItem'
import ExpenseItem from './ExpenseItem'

interface Props {
  expenses: IItem[]
}

const renderItem = (data: any) => {
  return <ExpenseItem {...data.item}  />
}

export const ExpensesList = ({expenses}: Props) => {
  return (
    <FlatList data={expenses} renderItem={renderItem} keyExtractor={(item) => item.id}/>
  )
}
