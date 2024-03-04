import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/Title'

const GameScreen = () => {
  return (
    <View style={styles.screen}>
    <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <View>
        <Text>Hight or lower?</Text>
        {/* + - */}
      </View>
      {/* LOG ROUNDS */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  }
})