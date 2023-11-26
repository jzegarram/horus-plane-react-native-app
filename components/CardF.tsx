import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FlightCard = ({ airline, date, fromCode, toCode, fromPlace, toPlace, departureTime, arrivalTime }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.airlineText}>{airline}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.route}>
        <View style={styles.location}>
          <Text style={styles.codeText}>{fromCode}</Text>
          <Text style={styles.placeText}>{fromPlace}</Text>
          <Text style={styles.timeText}>{departureTime}</Text>
        </View>
        <MaterialCommunityIcons name="airplane-takeoff" size={24} color="black" />
        {/* <View style={{ alignSelf: 'center' }}>
          <Text style={{ textAlign: 'center' }}>12:00 AM</Text>
        </View>
        <MaterialCommunityIcons name="airplane-landing" size={24} color="black" /> */}
        <View style={styles.location}>
          <Text style={styles.codeText}>{toCode}</Text>
          <Text style={styles.placeText}>{toPlace}</Text>
          <Text style={styles.timeText}>{arrivalTime}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3, // for Android
    shadowOpacity: 0.1, // for iOS
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 0 },
    width: 300,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  airlineText: {
    fontWeight: 'bold',
  },
  dateText: {
    color: 'grey',
  },
  route: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    alignItems: 'center',
  },
  codeText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  placeText: {
    color: 'grey',
  },
  timeText: {
    color: 'black',
  },
});

export default FlightCard;
