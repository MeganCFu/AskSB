import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

export const InputButton = (props) => {
  const [number, onChangeNumber] = React.useState('');
const styles = StyleSheet.create({
  input: {
    width: 300, // Set your desired width
    height: 40, // Set your desired height
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  
}); 

  return (
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder = "hi"
        keyboardType="email-address"
        />
  );
};


export default InputButton;