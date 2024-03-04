import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Colors from '../constants/colors';

const StartGameScreen = ({onPickNumber}) => {

  const [enterdNumber, setEnterdNumber] = useState('');

  function numberInputHandler(value){
    setEnterdNumber(value);
  }

  function resetInputHandler(){
    setEnterdNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enterdNumber);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.',
      [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
      return;
    }
    console.log('Valid number: ' + chosenNumber);
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enterdNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal:  24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, //min boxShadow andriod only for ios we use shadowColor shadowOffset shadowOpacity shdowRadius
        shadowColor: 'black',
        shadowOffset: { width: 0, height:2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 12,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
      flexDirection: 'row'
    },
    buttonContainer: {
      flex: 1
    }
});