import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loginScreen from "./screens/loginScreen.js";
import homeScreen from "./screens/signUpScreen.js";


const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signin'>
        <Stack.Screen name="Login" component={loginScreen} options={{title: 'pen'}}/>
        <Stack.Screen name="Signin" component={homeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


