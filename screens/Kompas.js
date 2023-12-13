import React, { useState,useEffect } from "react";
import { Image, ImageBackground, Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import Constants from 'expo-constants';
import { Magnetometer } from 'expo-sensors';
import TopNav_2 from "../components/TopNav_2";
import BottomNav from "../components/BottomNav";


const Kompas = () => {

  const [magnetometerData, setMagnetometerData] = useState({});
  const [rotation, setRotation] = useState(0);
  const inclination = 87.75; // Inclination in degrees (87° 45')

  const [heading, setHeading] = useState(0); // Initialize heading in the component's state
  
  const normalizeRotation = (value) => {
    let normalizedRotation = value;
    while (normalizedRotation < 0) {
      normalizedRotation += 360; // Dodaj 360 stopni, gdy wartość jest ujemna
    }
    return normalizedRotation % 360; // Zwróć znormalizowaną wartość rotacji w przedziale od 0 do 359 stopni
  };
  useEffect(() => {
    const subscribeToMagnetometer = async () => {
      await Magnetometer.setUpdateInterval(200);
      Magnetometer.addListener(handleMagnetometerChange);
    };

    const handleMagnetometerChange = (result) => {
      const { x, y } = result;

      let calculatedHeading = 0;

      if (x !== undefined && y !== undefined) {
        calculatedHeading = Math.atan2(y, x) * (180 / Math.PI);
        if (calculatedHeading < 0) {
          calculatedHeading += 360;
        }
      }

      const adjustedHeading = calculatedHeading - inclination;
      let newRotation = adjustedHeading;
      if (adjustedHeading >= 360) {
        newRotation -= 360;
      } else if (adjustedHeading < 0) {
        newRotation += 360;
      }

      setMagnetometerData(result);
      setRotation(newRotation);
      setHeading(calculatedHeading); // Update the heading in the state
    };

    subscribeToMagnetometer();

    return () => {
      Magnetometer.removeAllListeners();
    };
  }, [inclination]);


  return (
    <View style={styles.kompas1}>
      <Text style={styles.kompas}>Kompas</Text>
      <Text style={styles.heading}>{(normalizeRotation(heading-inclination)).toFixed(2)}°</Text>
        
              <View style={styles.container}>
              <ImageBackground
                source={require("../assets/compass_face.png")}
                style={{
                  height: 400,
                  width: 400,
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: [{ rotate: `${0}deg` }]
                }}
              >
                <Image
                  source={require("../assets/compass.png")}
                  style={{
                    height: 250,
                    width: 20,
                    left: -6,
                    bottom: -1,
                    transform: [{ rotate: `${rotation}deg` }],
                  }}
                />
              </ImageBackground>
            </View>  
      <TopNav_2 />
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    position: "absolute",
    top: 190, // Adjust this value as needed to position the heading text
    left: 0,
    right: 0,
    fontSize: 20,
    fontFamily: FontFamily.montserratBold,
    color: Color.text,
    textAlign: "center",
  },
  kompas: {
    position: "absolute",
    marginLeft: -195,
    top: 123,
    left: "50%",
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    color: Color.text,
    textAlign: "center",
    width: 389,
    height: 73,
  },
  kompas1: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden",
  },
  container: {
    position: "absolute",
    top: "25%",
    left: "2%",
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  dataContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  dataText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Kompas;
