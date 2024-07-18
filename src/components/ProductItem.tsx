import { Image, Pressable, StyleSheet, Text } from 'react-native';

import Colors from '@/constants/Colors';
import { Product } from '@/types';
import { Link } from 'expo-router';

type ProductItemProps = {
  product: Product;
}

const ProductItem = ({product}: ProductItemProps) => {
  return <Link href={`/menu/${product.id}`} asChild>
    <Pressable key={product.id} style={styles.container}>
    <Image source={{uri: product.image}} style={styles.image} resizeMode='contain' />
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>{product.price}$</Text>
    </Pressable>
  </Link>
}

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    width: '50%'
  },
  image: {
    width: '100%',
    aspectRatio: 1
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
