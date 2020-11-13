import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tela from './src/Screens/Tela/Tela.js';
import HomeScreen from './src/Screens/HomeScreen.js';

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Tela aaaaaaaa"
        onPress={() => navigation.navigate('Tela')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Casa"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Casa" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
        <Stack.Screen name="Tela" component={Tela} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
