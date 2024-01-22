import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesLists from './ExpensesLists'

const ExpensesOutput = ({ expenses }) => {
    return (
        <View>
            <ExpensesSummary />
            <ExpensesLists />
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({})