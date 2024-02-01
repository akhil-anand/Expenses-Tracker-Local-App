import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'

const ExpenseForm = () => {

    const amountChangedHandler = () => {

    }

    return (
        <View>
            <Input label="Amount"
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: amountChangedHandler
                }}
            />
            <Input label="Date" 
            textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: () => {}
            }} />
            <Input label="Description" 
            textInputConfig={{
                multiline: true
                // autoCapitalize: 'characters',
                // autoCorrect: false
            }} />
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({})