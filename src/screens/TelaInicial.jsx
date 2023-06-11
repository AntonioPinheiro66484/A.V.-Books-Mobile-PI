// Screen1.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet  } from 'react-native';


function TelaInicial(){
  return (
    <View style={styles.container}>
      <Image
        source={require('../screens/assets/banner.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 1000,
    height: 200,
  },
});

export default TelaInicial;
