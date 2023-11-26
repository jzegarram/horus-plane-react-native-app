import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { aeropuertos } from '../constants/aeropuertos';

export const FlightDetails = ({ data }: any) => {
  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Text>{item.origen} - {item.destino}</Text>
      <Text>Duración: {item.duracion} min</Text>
      <Text>Precio: €{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camino Óptimo</Text>
      <FlatList
        data={data.camino_optimo.map((aeropuerto: any) => ({ key: aeropuerto }))}
        renderItem={({ item }) => <Text style={styles.item}>{item.key} {aeropuertos.find((ele:any) => ele.code === item.key)?.name} </Text>}
      />

      <Text style={styles.title}>Detalles del Vuelo</Text>
      <FlatList
        data={data.detalles}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text style={styles.title}>Totales</Text>
      <Text>Duración Total: {data.total_duration} minutos</Text>
      <Text>Precio Total: €{data.total_price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});

export default FlightDetails;
