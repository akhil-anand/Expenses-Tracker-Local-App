import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpenseContext } from '../store/expenses-context';

const ManageExpenses = ({ route, navigation }) => {

  const expenseCtx = useContext(ExpenseContext)

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  const deleteExpenseHandler = () => {
    expenseCtx.deleteExpense(editedExpenseId)
    navigation.goBack()
  }

  const cancelHandler = () => {
    navigation.goBack()
  }

  const confirmhandler = () => {
    if(isEditing){
      expenseCtx.updateExpense(
        editedExpenseId,
        {
        description: 'Test!!!',
        amount: 29.99,
        date: new Date('2024-01-15')
      });
    }else{
      expenseCtx.addExpense({
        description: 'Test',
        amount: 19.99,
        date: new Date('2024-02-01')
      })
    }
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler} >Cancel</Button>
        <Button style={styles.button} onPress={confirmhandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      {isEditing &&
        <View style={styles.deleteContainer}>
          <IconButton icon="trash" color={GlobalStyles.colors.error500}
            size={36} onPress={deleteExpenseHandler} />
        </View>
      }
    </View>
  )
}

export default ManageExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
})