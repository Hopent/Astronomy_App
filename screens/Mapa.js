import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import BottomNav from "../components/BottomNav";

const Mapa = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mapa2}>
      <ImageBackground
        style={styles.constellationsMapEqu1110112Icon}
        resizeMode="contain"
        source={require("../assets/constellationsmapequ11101121.png")}
      />
      <Text style={styles.mapa1}>Mapa</Text>
      <View style={styles.grnyPasekNawigacyjny1}>
        <Text style={styles.menu}>Menu</Text>
        <View style={styles.grnyPasekNawigacyjny}>
          <Text style={styles.menu1}>Menu</Text>
          <Pressable
            style={styles.ikonaPowiadomie}
            onPress={() => navigation.navigate("Powiadomienia")}>
            <Image
              style={styles.icon3}
              contentFit="cover"
              source={require("../assets/ikona-powiadomie.png")}
            />
          </Pressable>
          <Pressable
            style={styles.ikonaMenu}
            onPress={() => navigation.navigate("Menu")}>
            <Image
              style={styles.icon4}
              contentFit="cover"
              source={require("../assets/ikona-menu.png")}
            />
          </Pressable>
          <Pressable
            style={styles.ikonaWyszukiwarki}
            onPress={() => navigation.navigate("Quiz1")}>
            <Image
              style={styles.icon5}
              contentFit="cover"
              source={require("../assets/ikona-wyszukiwarki.png")}
            />
          </Pressable>
        </View>
      </View>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  constellationsMapEqu1110112Icon: {
    position: "absolute",
    top: -286,
    left: -1025,
    width: 2400,
    height: 1196,
  },
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
    left: "7.64%",
    top: "0%",
    right: "83.17%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaKatalogu: {
    position: "absolute",
    left: "33.6%",
    top: "0%",
    right: "57.21%",
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
  ikonkaGalerii: {
    position: "absolute",
    left: "86.13%",
    top: "0%",
    right: "4.67%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  ikonkaMapyIcon: {
    position: "absolute",
    height: "62.13%",
    width: "9.19%",
    top: "0%",
    right: "30.94%",
    bottom: "37.87%",
    left: "59.87%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dolnyPasekNawigacyjny: {
    position: "relative",
    width: 327,
    height: 47,
  },
  dolnyPasekNawigacyjny1: {
    position: "absolute",
    top: 468,
    left: -32,
    width: 414,
    height: 312,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_24xl,
    paddingVertical: Padding.p_14xl,
    backgroundColor: "transparent",
  },
  mapa1: {
    position: "absolute",
    marginLeft: -194,
    top: 123,
    left: "50%",
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    color: Color.text,
    textAlign: "center",
    width: 389,
  },
  maskaZCieniem: {
    position: "absolute",
    top: 315,
    left: 414,
    width: 414,
    height: 312,
    transform: [
      {
        rotate: "-179.62deg",
      },
    ],
    backgroundColor: "transparent",
  },
  menu: {
    position: "absolute",
    top: 66,
    left: 84,
    fontSize: FontSize.size_base,
    letterSpacing: 0.4,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "center",
  },
  menu1: {
    position: "absolute",
    top: "7.69%",
    left: "9.7%",
    fontSize: FontSize.size_base,
    letterSpacing: 0.4,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "center",
  },
  icon3: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonaPowiadomie: {
    position: "absolute",
    left: "91.97%",
    top: "3.85%",
    right: "0%",
    bottom: "3.85%",
    width: "8.03%",
    height: "92.31%",
  },
  icon4: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonaMenu: {
    position: "absolute",
    left: "0%",
    top: "0%",
    right: "91.97%",
    bottom: "7.69%",
    width: "8.03%",
    height: "92.31%",
  },
  icon5: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonaWyszukiwarki: {
    position: "absolute",
    left: "76.59%",
    top: "7.69%",
    right: "15.38%",
    bottom: "0%",
    width: "8.03%",
    height: "92.31%",
  },
  grnyPasekNawigacyjny: {
    position: "absolute",
    top: 64,
    left: 55,
    width: 299,
    height: 26,
  },
  grnyPasekNawigacyjny1: {
    position: "absolute",
    top: -3,
    left: -29,
    width: 416,
    height: 315,
  },
  mapa2: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
  },
});

export default Mapa;
