import{View, Text, StyleSheet, Button, TextInput, KeyboardAvoidingView} from "react-native";
import React from "react";

  const loginScreen = () => {
    return(
    <KeyboardAvoidingView  style = {styles.container} behavior="padding">
      
      <View style = {styles.inputcontainer}>
        <TextInput
          placeholder = "UCSB Email!"
          // value = {  }
          // onChangeText = {text => }
          style = {styles.input}
          />

          <TextInput
          placeholder = "Password"
          // value = {  }
          // onChangeText = {text => }
          style = {styles.input}
          secureTextEntry
          />

      </View>
      
      
      
      <Button 
      title = "Go to signin"
      onPress={()=> navigation.navigate("Signin")} //this fnc makes the button go to navigation with name login?
      />
    </KeyboardAvoidingView>
    )
  };
  export default loginScreen

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent:"center",
      alignItems: "center",
    },
    text:{
      fontSize:24,
      fontWeight: "bold",
    }

  })