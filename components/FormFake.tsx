import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, TextInput, IconButton, ListItem, Flex } from '@react-native-material/core';
import { VStack, Box, Divider } from "@react-native-material/core";
import { Text } from './Themed';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
{/* <MaterialCommunityIcons name="airplane-takeoff" size={24} color="black" /> */}
{/* <MaterialCommunityIcons name="airplane-landing" size={24} color="black" /> */}
const COLORS = {
    WHITE: "#FFF",
    BLACK: "#000",
    PRIMARY: "#6200EE",
    BLUE: "#4856B7",
    GREY: "#AFAFAF",
    GOOGLE: "#DC4E41",
    FACEBOOK: "#3A5896"
  };
  
  const SIZES = {
    BASE: 6,
    FONT: 12,
    TITLE: 24,
    SUBTITLE: 11,
    LABEL: 12,
    PADDING: 12
  };
export const LocationSwapCard = () => {
  return (
    //@ts-ignore
    <VStack style={{paddingHorizontal: 20}} spacing={2} divider={true}>
        <Box  style={{ }}>
        <TextInput
            label="Salida"
            leading={props => <Icon name="airplane-takeoff" {...props} />}
            />
        </Box> 
        {/* <Flex center>
            <Box style={{ borderRadius: 50 ,width: 30, display: "flex", marginVertical: 3, backgroundColor: "black"}}>
                 <Icon name="arrow-up-down-bold-outline" size={30} color={"white"}/>
            </Box> 
        </Flex>  */}
        <Box style={{ }}>
            <TextInput
                label="Llegada"
                leading={props => <Icon name="airplane-landing" {...props} />}
            />  
        </Box> 
        <TouchableOpacity
            // disabled={!isValid}
            style={{
                alignItems: "center",
                borderRadius: SIZES.BASE * 2,
                height: SIZES.BASE * 8,
                justifyContent: "center",
                padding: SIZES.PADDING,
                backgroundColor: COLORS.PRIMARY,
                marginVertical: SIZES.BASE * 3
            }}
            //   onPress={() => router.replace('/(tabs)')}
            >

                <Text
                style={{
                    fontWeight: "500",
                    letterSpacing: 0.5,
                    color: "white",
                    backgroundColor: "transparent"
                }}
                >
                Buscar Vuelo
                </Text>
            </TouchableOpacity>
    </VStack>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
  swapButton: {
    position: 'absolute',
    right: 16,
    top: 60, // Adjust this value to center the button between the two list items
  },
});
