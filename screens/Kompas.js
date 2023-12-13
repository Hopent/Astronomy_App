import React, { useState,useEffect } from "react";
import { Image, ImageBackground, Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import Constants from 'expo-constants';
import { Magnetometer } from 'expo-sensors';
import TopNav_2 from "../components/TopNav_2";
import BottomNav from "../components/BottomNav";


const Kompas = () => {
  const navigation = useNavigation();

  const [magnetometerData, setMagnetometerData] = useState({});
  const [rotation, setRotation] = useState(0);
  const inclination = 87.75; // Inclination in degrees (87° 45')

  useEffect(() => {
    const subscribeToMagnetometer = async () => {
      await Magnetometer.setUpdateInterval(200); // Set the update interval for the magnetometer sensor
      Magnetometer.addListener(handleMagnetometerChange);
    };

    const handleMagnetometerChange = (result) => {
      const { x, y } = result;

      let heading = 0;

      if (x !== undefined && y !== undefined) {
        // Calculate the heading or direction based on the x and y magnetometer data
        heading = Math.atan2(y, x) * (180 / Math.PI);
        if (heading < 0) {
          heading += 360; // Convert negative angles to positive angles (0 to 360 degrees)
        }
      }

      const adjustedHeading = heading - inclination; // Adjust heading by inclination

      let newRotation = adjustedHeading;
      if (adjustedHeading >= 360) {
        newRotation -= 360; // Normalize the rotation to be within 0-359 degrees
      } else if (adjustedHeading < 0) {
        newRotation += 360; // Normalize negative angles
      }

      setMagnetometerData(result);
      setRotation(newRotation);
    };

    subscribeToMagnetometer();

    return () => {
      Magnetometer.removeAllListeners();
    };
  }, [inclination]);


  return (
    <View style={styles.kompas1}>
      <Text style={styles.kompas}>Kompas</Text>
        
              <View style={styles.container}>
              <ImageBackground
                source={require("../assets/compassFace.jpg")}
                style={{
                  height: 320,
                  width: 320,
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: [{ rotate: `${0}deg` }]
                }}
              >
                <Image
                  source={require("../assets/compass.jpg")}
                  style={{
                    height: 200,
                    width: 10,
                    transform: [{ rotate: `${rotation}deg` }],
                  }}
                />
              </ImageBackground>
              <View style={styles.dataContainer}>
                <Text style={styles.dataText}>
                  Magnetometer Data:
                </Text>
                <Text>
                  {JSON.stringify(magnetometerData)}
                </Text>
                <Text>
                  {rotation}
                </Text>
              </View>
            </View>
        
      <TopNav_2 />
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
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
