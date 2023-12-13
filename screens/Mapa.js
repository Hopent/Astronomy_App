import * as React from "react";
import {ImageBackground,StyleSheet, Text,View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import BottomNav from "../components/BottomNav";
import TopNav_2 from "../components/TopNav_2";

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
      <TopNav_2 />
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
