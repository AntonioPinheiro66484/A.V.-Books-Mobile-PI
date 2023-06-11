import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Loja</Text>
      <Image 
        source={require('../../screens/assets/logo.png')}
        style={styles.images}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#6b0ee2',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height:50,
    flex:1,
    alignItems:'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  images:{
    flex:1,
  },
});

export default Header;

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const HorizontalHeader = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Meu Cabeçalho</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     transform: [{ rotate: '90deg' }],
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     height: '100%',
//     width: 60,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333333',
//     transform: [{ rotate: '-90deg' }],
//   },
// });

// export default HorizontalHeader;
