import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/home';
import Call from './src/call';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OnGoing" component={Call} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}