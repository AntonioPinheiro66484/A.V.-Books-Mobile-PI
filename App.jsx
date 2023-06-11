import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/screens/TelaInicial';
import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3';
import Screen4 from './src/screens/Screen4';
import Screen5 from './src/screens/Screen5';
import Screen6 from './src/screens/Screen6';
import Screen7 from './src/screens/Screen7';
import Home from './src/screens/Home';
import Header from './src/components/Header';

const Stack = createStackNavigator();

function App() {
  return (
     <Header/>
  );
}

export default App;