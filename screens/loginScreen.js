import{View, Text, StyleSheet, Button} from "react-native";


  export default function loginScreen({navigation}) {
    return(
    <View  style = {styles.container}>
      <Text style = {styles.text}>login</Text>
      <Button 
      title = "Go to Home"
      onPress={()=> navigation.navigate("Home")}
      />
    </View>
    )
  };

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