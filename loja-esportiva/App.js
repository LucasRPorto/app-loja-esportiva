import React from 'react';
import { StatusBar, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const products = [
    {
      id: 1,
      name: 'Basquete',
      price: 'R$ 199,99',
      image: require('./assets/basquete.png'),
    },
    {
      id: 2,
      name: 'Boliche',
      price: 'R$ 49,99',
      image: require('./assets/boliche.png'),
    },
    {
      id: 3,
      name: 'Futebol',
      price: 'R$ 29,99',
      image: require('./assets/futebol.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <LinearGradient
      colors={['#09793a', '#00d4ff']}
      style={styles.container}
    >
      <Image
        source={require('./assets/logo.png')}
        style={styles.banner}
      />
      <Text style={styles.title}>Artigos Esportivos</Text>
      <Text style={styles.description}>Ganhe 10% de desconto com o cupom APPLUCAS</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    width: '60%',
    height: 250,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
  },
  productContainer: {
    alignItems: 'center',
    margin: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
  },
  productPrice: {
    fontSize: 14,
    color: '#fff',
    marginTop: 3,
  },
  description: {
    marginTop: 30,
    fontSize: 16,
    color: '#fff',
  },
});
