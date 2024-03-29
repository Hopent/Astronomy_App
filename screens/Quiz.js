import * as React from "react";
import {StyleSheet, View, Text, Pressable} from "react-native";
import {Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import TopNav_2 from "../components/TopNav_2";
import BottomNav from "../components/BottomNav";
    
const Quiz = () => {
const navigation = useNavigation();

  return (
    <View style={styles.quiz1}>
      <Image style={styles.maskiDlaTa} contentFit="cover" source={require("../assets/maski-dla-ta3.png")} />
      <Pressable style={styles.przyciskiWyboru} onPress={() => navigation.navigate("Quiz1")}>
        <Text style={styles.zagraj}>Zagraj</Text>
      </Pressable>
      <Text style={styles.naszQuizO}>Nasz quiz o kosmosie to doskonała okazja, aby sprawdzić swoją wiedzę na temat gwiazd, planet, galaktyk i innych fascynujących fenomenów kosmicznych. Czy znasz nazwy największych planet naszego Układu Słonecznego? Czy potrafisz rozpoznać gwiazdozbiory na nocnym niebie? Przygotuj się na pytania z zakresu astronomii, kosmicznych odkryć i fascynujących faktów związanych z nieskończoną przestrzenią.</Text>
      <View style={styles.kafelki}>
        <Text style={styles.opis}>Opis:</Text>
        <Text style={styles.pyta3Minuty}>10 pytań               3 minuty</Text>
        <Text style={styles.podstawowaWiedzaNa}>Podstawowa wiedza na temat kosmosu</Text>
      </View>
      <Text style={styles.quiz}>Quiz</Text>
      <TopNav_2 />
      <BottomNav />
      </View>);
};

const styles = StyleSheet.create({
  maskiDlaTa: {
    position: "absolute",
    height: "63.29%",
    width: "100%",
    top: "20.15%",
    right: "0%",
    bottom: "16.55%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.7
  },
  zagraj: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "center",
    width: 80,
    height: 20
  },
  przyciskiWyboru: {
    position: "absolute",
    height: "5.26%",
    marginLeft: -57,
    top: "80.26%",
    bottom: "14.49%",
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 2,
    width: 118,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_2xs
  },
  naszQuizO: {
    position: "absolute",
    marginLeft: -113,
    top: 385,
    left: "50%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    width: 230
  },
  opis: {
    position: "absolute",
    top: 147,
    left: 26,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.text,
    textAlign: "left",
    width: 249
  },
  pyta3Minuty: {
    position: "absolute",
    marginLeft: -87,
    top: 106,
    left: "50%",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.secondary,
    textAlign: "left",
    width: 212
  },
  podstawowaWiedzaNa: {
    position: "absolute",
    marginLeft: -121,
    top: 31,
    left: "50%",
    fontSize: 22,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "center",
    width: 241
  },
  kafelki: {
    position: "absolute",
    height: "52.05%",
    marginLeft: -140,
    top: "25.51%",
    bottom: "22.44%",
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 280
  },
  quiz: {
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
    height: 73
  },
  quiz1: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden"
  }
});

export default Quiz;
