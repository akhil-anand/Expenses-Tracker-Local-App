import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const renderExpenseItem = (itemData) => {
 return <Text>{itemData.item.description}</Text>
}

const ExpensesLists = ({expenses}) => {
    return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>
   
}

export default ExpensesLists

const styles = StyleSheet.create({})