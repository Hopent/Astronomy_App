import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";


const BottomNav = () => {
    const navigation = useNavigation();
    return (
        <>
        <View style={styles.dolnyPasekNawigacyjny1}>
        <View style={styles.dolnyPasekNawigacyjny}>
          <Text style={styles.home}>Home</Text>
          <Text style={styles.katalog}>Katalog</Text>
          <Text style={styles.galeria}>Galeria</Text>
          <Text style={styles.mapa}>Mapa</Text>
          <Pressable
            style={styles.icon2}
            onPress={() => navigation.navigate("Home")}>
                    <Image
                    style={styles.ikonkaStronyGwnej}
                    contentFit="cover"
                    source={require("../assets/home.png")}
                    />
          </Pressable>



          <Pressable
            style={styles.ikonkaKatalog}
            onPress={() => navigation.navigate("KatalogPlanet")}>
                    <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require("../assets/katalog.png")}
                    />
          </Pressable>




          <Pressable
            style={styles.ikonkaGalerii}
            onPress={() => navigation.navigate("Galeria")}>
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/galeria.png")}
            />
          </Pressable>



          <Pressable
            style={styles.ikonkaMapy}
            onPress={() => navigation.navigate("Mapa")}>
            <Image
              style={styles.icon2}relative
              contentFit="cover"
              source={require("../assets/mapa.png")}
            />
          </Pressable>
        </View>
      </View>
        </>
    );
};

const styles = StyleSheet.create({
    home: {
        position: "absolute",
        height: "31.91%",
        width: "24.43%",
        top: "68.09%",
        left: "0%",
        fontSize: FontSize.nav_size,
        fontWeight: "700",
        fontFamily: FontFamily.nav,
        color: Color.text,
        textAlign: "center",
    }, 
    katalog: {
        position: "absolute",
        height: "30.85%",
        width: "18.75%",
        top: "68.09%",
        left: "28.71%",
        fontSize: FontSize.nav_size,
        fontWeight: "700",
        fontFamily: FontFamily.nav,
        color: Color.text,
        textAlign: "center",
    },
    galeria: {
        position: "absolute",
        height: "30.85%",
        width: "18.75%",
        top: "68.09%",
        left: "81.25%",
        fontSize: FontSize.nav_size,
        fontWeight: "700",
        fontFamily: FontFamily.nav,
        color: Color.text,
        textAlign: "center",
    },
    mapa: {
        position: "absolute",
        height: "30.85%",
        width: "18.75%",
        top: "68.09%",
        left: "54.98%",
        fontSize: FontSize.nav_size,
        fontWeight: "700",
        fontFamily: FontFamily.nav,
        color: Color.text,
        textAlign: "center",
    },
    icon: {
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    ikonkaStronyGwnej: {
        position: "absolute",
        height: "62.13%",
        width: "9.19%",
        top: "0%",
        right: "83.17%",
        bottom: "37.87%",
        left: "7.64%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
      },
    ikonkaKatalog: {
        position: "absolute",
        left: "33.6%",
        top: "0%",
        right: "57.21%",
        bottom: "37.87%",
        width: "9.19%",
        height: "62.13%",
    },
    icon3: {
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    icon1: {
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    ikonkaGalerii: {
        position: "absolute",
        left: "86.13%",
        top: "0%",
        right: "4.67%",
        bottom: "37.87%",
        width: "9.19%",
        height: "62.13%",
    },
    icon2: {
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    ikonkaMapy: {
        position: "absolute",
        left: "59.87%",
        top: "0%",
        right: "30.94%",
        bottom: "37.87%",
        width: "9.19%",
        height: "62.13%",
    },
    dolnyPasekNawigacyjny: {
        position: "absolute",
        height: "11.49%",
        width: "78.33%",
        top: "63.72%",
        right: "11.39%",
        bottom: "31.78%",
        left: "15.29%",
    },
    dolnyPasekNawigacyjny1: {
        position: "absolute",
        top: 468,
        left: -32,
        width: 418,
        height: 409,
    },
    });


export default BottomNav;