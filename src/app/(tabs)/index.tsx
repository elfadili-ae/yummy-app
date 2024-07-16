import { Image, StyleSheet, Text, View } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import Colors from '@/constants/Colors';
import products from '../../../assets/data/products';

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}$</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  image: {
    width: '100%',
    height: 100
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    color: Colors.light.tint
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
