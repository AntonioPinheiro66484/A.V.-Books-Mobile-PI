// Screen6.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function Screen6({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 6</Text>
        <Button title="Proxima" onPress={() => navigation.navigate('Screen7')} />
        <Button title="Anterior" onPress={() => navigation.navigate('Screen5')} />
        <Button title="Principal" onPress={() => navigation.navigate('MainPage')} />
    </View>
  );
}

export default Screen6;
