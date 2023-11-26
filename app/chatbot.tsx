import { useEffect, useState } from "react";
import { View } from "../components/Themed";
import ChatBot from 'react-native-chatbot-expo';
import { LogBox, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { HStack, VStack } from "@react-native-material/core";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { aeropuertos, optimal } from "../constants/aeropuertos";
import FlightDetails from "../components/fdeatils";

export default function ChatbotScreen(){

    const [origin, setOrigin] = useState<null | string>(null);
    const [destiny, setDestiny] = useState<null | string>(null);
    const [criterio, setCriterio] = useState<null | number>(null);



      const getOptionsByAirports = (airports:any, trigger:any) => {
        return airports.map((airport:any) => {
            return { value: airport.code, label: `${airport.code} ${airport.name}`, trigger: trigger }
        })
    };
    
    const steps = [
        {
          id: '0',
          message: '¿En qué país deseas buscar vuelos?',
          trigger: '1',
        },
        {
          id: '1',
          user: true,
          trigger: '2',
        },
        {
          id: '2',
          message: '¡Bienvenido a nuestro servicio de reserva de vuelos!',
          trigger: '3',
        },
        {
          id: '3',
          message: 'Por favor, selecciona tu aeropuerto de salida:',
          trigger: '4',
        },
        {
          id: '4',
          options: getOptionsByAirports(aeropuertos, '5'), 
          trigger: '5',
        },
        {
          id: '5',
          message: 'Ahora, selecciona tu aeropuerto de destino:',
          trigger: '6',
        },
        {
          id: '6',
          options: getOptionsByAirports(aeropuertos, '7'), 
          asMessage: true,
          trigger: '7',
        },
        {
          id: '7',
          message: '¿Cómo te gustaría optimizar tu vuelo?',
          trigger: '8',
        },
        {
          id: '8',
          options: [
            { value: 'price', label: 'Precio', trigger: '12' },
            { value: 'duration', label: 'Duración', trigger: '13' },
            { value: 'escales', label: 'Número de Escalas', trigger: '14' },
          ],
        },
        // {
        //     id: '9',
        //     message: 'Estamos buscando las mejores opciones...',
        //     trigger: '12',
        // },
        {
            id: '12',
            component: (<FlightDetails data={optimal.price[0]} /> ),
            trigger: '15',
        },
        // {
        //     id: '10',
        //     message: 'Ahora, selecciona tu aeropuerto de destino:',
        //     trigger: '13',
        // },
        {
            id: '13',
            component:  (<FlightDetails data={optimal.duration[0]} /> ),
            trigger: '15',
        },
        // {
        //     id: '11',
        //     message: 'Ahora, selecciona tu aeropuerto de destino:',
        //     trigger: '14',
        // },
        {
            id: '14',
            component: (<FlightDetails data={optimal.escala[0]} /> ),
            trigger: '15',
        },
        {
          id: '15',
          message: 'Estamos buscando las mejores opciones...',
          trigger: '16',
        },
        {
            id: '16',
            options: [
              { value: '0', label: 'Volver a elegir Criterio', trigger: '7' },
              { value: '1', label: 'Volver a origen y destino', trigger: '3' },
              { value: '2', label: 'Comprar Vuelo elegido', trigger: '17' },
            ],
          },
        {
            id: '17',
            message: '¡Gracias por utilizar nuestro servicio, sera redirigido para que realice su comprar!',
            end: true,
        }
      ];
      
    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
        LogBox.ignoreAllLogs(true);
    }, [])

    return (
        <ChatBot steps={steps} />
    )
}