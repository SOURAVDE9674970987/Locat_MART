import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const PRODUCTS = [
  { id: '1', name: 'Rice - 1kg', price: '₹60' },
  { id: '2', name: 'Wheat - 1kg', price: '₹45' },
  { id: '3', name: 'Milk - 1L', price: '₹54' },
  { id: '4', name: 'Sugar - 1kg', price: '₹42' }
];

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.price}</Text>

            <Button title="Add to Cart" onPress={() => alert('Added!')} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10
  },
  name: {
    fontWeight: 'bold'
  }
});
