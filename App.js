import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loginScreen from "./screens/loginScreen.js";
import signUpScreen from "./screens/signUpScreen.js";


const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={loginScreen} options={{title: 'loginscreen :('}}/>
        <Stack.Screen name="SignUp" component={signUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


