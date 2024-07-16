import {FlatList, View } from 'react-native';

import products from '../../../assets/data/products';
import { Product } from '@/types';
import ProductItem from '@/components/ProductItem';

export default function MenuScreen() {
  return (
      <FlatList 
      data={products} 
      renderItem={(item) => <ProductItem product={item.item}/>}
      numColumns={2}
      contentContainerStyle={{gap: 10, padding: 10}}
      columnWrapperStyle={{gap: 10}} />
  );
}
