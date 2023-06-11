// Screen3.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function Screen3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 3</Text>
        <Button title="Proxima" onPress={() => navigation.navigate('Screen4')} />
        <Button title="Anterior" onPress={() => navigation.navigate('Screen2')} />
        <Button title="Principal" onPress={() => navigation.navigate('MainPage')} />
    </View>
  );
}

export default Screen3;
