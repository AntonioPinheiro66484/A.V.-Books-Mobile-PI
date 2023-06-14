// src/screens/HomeScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button
        title="View Products"
        onPress={() => navigation.navigate('Product')}
      />
      <Button
        title="Search"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
}
