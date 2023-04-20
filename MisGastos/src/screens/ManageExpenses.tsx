import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../ui/GlobalStyle';
import IconButton from '../components/IconButton';
import Button from '../components/Button';
import { CommonActions } from '@react-navigation/native';



export const ManageExpenses = ({ route, navigation }: any) => {

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;


  const onDelete = () => {
    navigation.dispatch(CommonActions.goBack());
  }

  const onCancel = () => {
    navigation.dispatch(CommonActions.goBack());
  }

  const onConfirm = () => {
    navigation.dispatch(CommonActions.goBack());
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={onConfirm}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.red}
            size={36}
            onPress={onDelete}
          />
        </View>
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.navy,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.purple,

    alignItems: 'center',
  },
});
