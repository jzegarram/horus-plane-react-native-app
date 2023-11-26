
import { Dimensions, FlatList, Image, LogBox, Platform, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { FAB, Stack, Avatar, HStack, Box, Flex, VStack } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from 'react';
import FlightCard from '../components/CardF';
import {LocationSwapCard} from '../components/FormFake';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const recommendations = [
  {
    id: 1,
    product: {
      name: "Vestido Elegante de Noche",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    inStock: true,
    location: "Barcelona, España",
    price: 250,
    description:
      "Elegante vestido de noche en color negro, perfecto para eventos formales. Diseño moderno con detalles en encaje, disponible en varias tallas.",
    rating: 4.8,
    reviews: 320,
    preview:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 2,
    product: {
      name: "Camisa de Algodón",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    inStock: false,
    location: "Paris, Francia",
    price: 75,
    description:
      "Camisa casual de algodón, ligera y cómoda. Ideal para el uso diario. Disponible en colores neutros y en varias tallas.",
    rating: 4.5,
    reviews: 80,
    preview:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 3,
    product: {
      name: "Conjunto Urbano",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    inStock: true,
    location: "New York, USA",
    price: 120,
    description:
      "Pantalones elegantes de vestir, perfectos para la oficina o eventos formales. Diseño clásico en color gris, disponibles en varias tallas.",
    rating: 4.6,
    reviews: 189,
    preview:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 4,
    product: {
      name: "Blusa de Seda Floral",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    inStock: true,
    location: "Cusco, Peru",
    price: 95,
    description:
      "Blusa de seda con estampado floral, ideal para la primavera. Ligera y fresca, disponible en varias tallas.",
    rating: 4.7,
    reviews: 243,
    preview:
      "https://images.unsplash.com/photo-1593494441374-bad54249d0e8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

const flightData = [
  {
    id: '1',
    airline: 'S7 Airlines',
    date: '12 November 2023',
    fromCode: 'LON',
    toCode: 'PAR',
    fromPlace: 'London, GB',
    toPlace: 'Paris, France',
    departureTime: '10:00 AM',
    arrivalTime: '12:00 AM',
  },
  {
    id: '2',
    airline: 'Luftgans',
    date: '22 November 2023',
    fromCode: 'BER',
    toCode: 'LON',
    fromPlace: 'Berlin, DE',
    toPlace: 'London, GB',
    departureTime: '9:00 AM',
    arrivalTime: '10:00 AM',
  },
  // ... Añade más datos de vuelos según sea necesario
];

const THEME = {
  SIZES: {
    base: 16,
    font: 14,
    padding: 36,
    margin: 36,
    title: 24,
    radius: 12,
  },
  COLORS: {
    black: "#000",
    white: "#FFF",
    gray: "#DCE0E9",
    caption: "#BCCCD4",
    active: "#007BFA",
  },
};

const { width } = Dimensions.get("window");

const content = {
  user: {
    name: 'Jackie Mathews',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  section1: {
    title: "A dónde volaras hoy?",
    subtitle: 'Selecciona un punto de partida y destino',
  },
  section2: {
    title: 'Ultimos Viajes',
    subtitle: 'Ver todos',
  },
  section3: {
    title: 'Destacados',
    data: [
      {
        Title: 'Barcelona',
      },
      {
        Title: 'Paris',
      }
    ]
  }
}

const MessageBubble = ({ visible, message, scale }: any) => {
  if (!visible) return null;

  return (
    <View style={{...FABstyles.bubble, bottom: scale }}>
      <Text>{message}</Text>
    </View>
  );
};

const Recommendation = ({ index = 0, item = {}, isLastItem = false }: any) => {
  return (
    <View
      style={[
        styles.flex,
        styles.column,
        styles.shadow,
        styles.recommendation,
        index === 0 ? { marginLeft: THEME.SIZES.margin } : null,
        isLastItem ? { marginRight: THEME.SIZES.margin / 2 } : null,
      ]}>
      <View style={[styles.flex, styles.recommendationHeader]}>
        <Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
        {/* <View style={[styles.flex, styles.row, styles.recommendationOptions]}>
          <Text style={styles.recommendationTemp}>S/. {item.reviews}</Text>
          <FontAwesome
            color={THEME.COLORS.white}
            size={THEME.SIZES.font * 1.25}
            name={item.inStock ? "bookmark" : "bookmark-o"}
          />
        </View> */}
      </View>
    </View>
  );
};

const TopVuelos = ({ destinations = recommendations }) => {
  return (
    <View style={[styles.flex, styles.column]}>
      <View style={[styles.row, styles.recommendedHeader]}>
        <Text style={{ fontSize: THEME.SIZES.font * 1.4, fontWeight: "700" }}>Destacados</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={{ color: THEME.COLORS.caption }}>Más</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          data={destinations}
          scrollEventThrottle={16}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          style={[styles.shadow, { overflow: "visible" }]}
          renderItem={({ item, index }) => (
            <Recommendation
              item={item}
              index={index}
              isLastItem={index === destinations.length - 1}
            />
          )}
        />
      </View>
    </View>
  );
};

const Recommendations = ({ flights = flightData }) => {
  return (
    <View style={[stylesv2.flex, stylesv2.column]}>
      <View style={[stylesv2.row, stylesv2.recommendedHeader]}>
        <Text style={{ fontSize: THEME.SIZES.font * 1.4, fontWeight: "700" }}>Vuelos Recomendados</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={{ color: THEME.COLORS.caption }}>Ver todos</Text>
        </TouchableOpacity>
      </View>
      <View style={stylesv2.column}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          data={flights}
          scrollEventThrottle={16}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => `${item.id}`}
          style={[stylesv2.shadow, { overflow: "visible" }]}
          renderItem={({ item, index }: any) => (
            <FlightCard
              // Asegúrate de pasar todas las propiedades necesarias para FlightCard
              key={item.id}
              airline={item.airline}
              date={item.date}
              fromCode={item.fromCode}
              toCode={item.toCode}
              fromPlace={item.fromPlace}
              toPlace={item.toPlace}
              departureTime={item.departureTime}
              arrivalTime={item.arrivalTime}
              // Puedes añadir más propiedades si tu FlightCard las requiere
              isLastItem={index === flights.length - 1}
            />
          )}
        />
      </View>
    </View>
  );
};

export default function HomeScreen() {

  const router = useRouter();

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
}, [])

  const [isBubbleVisible, setBubbleVisible] = useState(false);

  const toggleBubble = () => {
    setBubbleVisible(true);
  };

  useEffect(() => {
    // Temporizador para mostrar el bubble después de 8 segundos
    const showTimer = setTimeout(() => {
      toggleBubble();
    }, 8000); // 8000 milisegundos para 8 segundos
  
    // Temporizador para ocultar el bubble después de 30 segundos
    // let hideTimer: any;
    // if (isBubbleVisible) {
    //   hideTimer = setTimeout(() => {
    //     setBubbleVisible(false);
    //   }, 30000); // 30000 milisegundos para 30 segundos
    // }
  
    // Limpieza de los temporizadores
    return () => {
      clearTimeout(showTimer);
      // clearTimeout(hideTimer);
    };
  }, [isBubbleVisible]);


  return (
    <View style={styles.container}>
      {/* <FlightCard
        airline="S7 Airlines"
        date="12 November 2023"
        fromCode="LON"
        toCode="PAR"
        fromPlace="London, GB"
        toPlace="Paris, France"
        departureTime="10:00 AM"
        arrivalTime="12:00 AM"
      /> */}
       <View style={{  width: "100%", paddingHorizontal: 20,  }}>
        <VStack>
          <HStack >
            <Avatar size={50} image={{ uri: content.user.avatar }} />
            <Flex center ml={5}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>Hola, {content.user.name}</Text>

            </Flex>
          </HStack>
        </VStack>

      </View>
      <View style={{ width: "100%", marginVertical: 20 }}>
        <VStack style={{ padding: 20}}>
            <Flex center>
              <Text style={{ fontSize: 30, fontWeight: "800" }}>{content.section1.title}</Text>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>{content.section1.subtitle}</Text>
            </Flex>
          </VStack>
        <LocationSwapCard /> 
      </View>
      <View style={{ height: 200 }}>
        <Recommendations />
      </View>
      <View style={{ height: 200 }}>
      <TopVuelos destinations={recommendations} />
      </View>
        <FAB
          style={FABstyles.fab}
          variant="standard"
          icon={props => <Icon name="robot-excited" {...props} />}
          // label="Consultar"
          color="primary"
          onPress={() => router.replace('/chatbot')}
        />
        <MessageBubble visible={isBubbleVisible} message="Hola, soy Horus" scale={130}/>
        <MessageBubble visible={isBubbleVisible} message="En qué te ayudo?" scale={80}/>
     </View>
  );
}

const stylesv4 = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  header: {
    backgroundColor: THEME.COLORS.white,
    paddingHorizontal: THEME.SIZES.padding,
    paddingTop: THEME.SIZES.padding * 1.33,
    paddingBottom: THEME.SIZES.padding * 0.66,
    justifyContent: "space-between",
    alignItems: "center",
  },
  destinations: {
    flex: 1,
    paddingBottom: 30,
    justifyContent: "space-between",
  },
  destination: {
    width: width - THEME.SIZES.padding * 2,
    height: width * 0.6,
    marginHorizontal: THEME.SIZES.margin,
    paddingHorizontal: THEME.SIZES.padding,
    paddingVertical: THEME.SIZES.padding * 0.66,
    borderRadius: THEME.SIZES.radius,
  },
  destinationInfo: {
    position: "absolute",
    borderRadius: THEME.SIZES.radius,
    paddingHorizontal: THEME.SIZES.padding,
    paddingVertical: THEME.SIZES.padding / 2,
    bottom: 20,
    left: (width - THEME.SIZES.padding * 4) / (Platform.OS === "ios" ? 3.2 : 3),
    backgroundColor: THEME.COLORS.white,
    width: width - THEME.SIZES.padding * 4,
  },
  recommendedHeader: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: THEME.SIZES.padding,
  },
  recommendation: {
    width: (width - THEME.SIZES.padding * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: THEME.COLORS.white,
    overflow: "hidden",
    borderRadius: THEME.SIZES.radius,
    marginVertical: THEME.SIZES.margin * 0.5,
  },
  recommendationHeader: {
    overflow: "hidden",
    borderTopRightRadius: THEME.SIZES.radius,
    borderTopLeftRadius: THEME.SIZES.radius,
  },
  recommendationOptions: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: THEME.SIZES.padding / 2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: THEME.SIZES.font * 1.25,
    color: THEME.COLORS.white,
  },
  recommendationImage: {
    width: (width - THEME.SIZES.padding * 2) / 2,
    height: (width - THEME.SIZES.padding * 2) / 2,
  },
  avatar: {
    width: THEME.SIZES.padding,
    height: THEME.SIZES.padding,
    borderRadius: THEME.SIZES.padding / 2,
    marginRight: 12,
  },
  rating: {
    fontSize: THEME.SIZES.font * 2,
    color: THEME.COLORS.white,
    fontWeight: "bold",
  },
  shadow: {
    shadowColor: THEME.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: THEME.COLORS.gray,
    borderColor: "transparent",
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: THEME.COLORS.active,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  ...stylesv4
});

const FABstyles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  bubble: {
    position: 'absolute',
    bottom: 80, // Ajusta la posición según necesites
    right: 25,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5
    // Otros estilos que necesites
  },
});


const stylesv2 = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  header: {
    backgroundColor: THEME.COLORS.white,
    paddingHorizontal: THEME.SIZES.padding,
    paddingTop: THEME.SIZES.padding * 1.33,
    paddingBottom: THEME.SIZES.padding * 0.66,
    justifyContent: "space-between",
    alignItems: "center",
  },
  destinations: {
    flex: 1,
    paddingBottom: 30,
    justifyContent: "space-between",
  },
  destination: {
    width: width - THEME.SIZES.padding * 2,
    height: width * 0.6,
    marginHorizontal: THEME.SIZES.margin,
    paddingHorizontal: THEME.SIZES.padding,
    paddingVertical: THEME.SIZES.padding * 0.66,
    borderRadius: THEME.SIZES.radius,
  },
  destinationInfo: {
    position: "absolute",
    borderRadius: THEME.SIZES.radius,
    paddingHorizontal: THEME.SIZES.padding,
    paddingVertical: THEME.SIZES.padding / 2,
    bottom: 20,
    left: (width - THEME.SIZES.padding * 4) / (Platform.OS === "ios" ? 3.2 : 3),
    backgroundColor: THEME.COLORS.white,
    width: width - THEME.SIZES.padding * 4,
  },
  recommendedHeader: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: THEME.SIZES.padding,
  },
  recommendation: {
    width: (width - THEME.SIZES.padding * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: THEME.COLORS.white,
    overflow: "hidden",
    borderRadius: THEME.SIZES.radius,
    marginVertical: THEME.SIZES.margin * 0.5,
  },
  recommendationHeader: {
    overflow: "hidden",
    borderTopRightRadius: THEME.SIZES.radius,
    borderTopLeftRadius: THEME.SIZES.radius,
  },
  recommendationOptions: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: THEME.SIZES.padding / 2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: THEME.SIZES.font * 1.25,
    color: THEME.COLORS.white,
  },
  recommendationImage: {
    width: (width - THEME.SIZES.padding * 2) / 2,
    height: (width - THEME.SIZES.padding * 2) / 2,
  },
  avatar: {
    width: THEME.SIZES.padding,
    height: THEME.SIZES.padding,
    borderRadius: THEME.SIZES.padding / 2,
    marginRight: 12,
  },
  rating: {
    fontSize: THEME.SIZES.font * 2,
    color: THEME.COLORS.white,
    fontWeight: "bold",
  },
  shadow: {
    shadowColor: THEME.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: THEME.COLORS.gray,
    borderColor: "transparent",
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: THEME.COLORS.active,
  },
});
