
import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native-web';
import Header from '../components/Header'
function AVBooks({ navigation }) {
  return (
  <SafeAreaView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header/>
      <Text>Pagina Principal</Text>

      <Button title="Tela Inicial" onPress={() => navigation.navigate ('TelaInicial')} />
      <Button title="Home" onPress={()=> navigation.navigate('Home')}/>
      <Button title="Tela2" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Tela3" onPress={() => navigation.navigate('Screen3')} />
      <Button title="Tela4" onPress={() => navigation.navigate('Screen4')} />
      <Button title="Tela5" onPress={() => navigation.navigate('Screen5')} />
      <Button title="Tela6" onPress={() => navigation.navigate('Screen6')} />
      <Button title="Tela7" onPress={() => navigation.navigate('Screen7')} />
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


});

export default AVBooks;
