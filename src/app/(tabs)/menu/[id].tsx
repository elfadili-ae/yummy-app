import { Stack, useLocalSearchParams } from 'expo-router';
import {Text, View} from 'react-native';

const productDetails = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title: 'Details'}} />
        <Text>Product {id}</Text>
    </View>
  )
}

export default productDetails