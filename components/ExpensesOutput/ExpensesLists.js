import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'

const renderExpenseItem = ({item}) => {
 return <ExpenseItem {...item} />
}

const ExpensesLists = ({expenses}) => {
    return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>
   
}

export default ExpensesLists

const styles = StyleSheet.create({})