import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import { Counter } from './src/screens/counter'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Counter />
      </Provider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})