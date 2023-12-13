import * as React from "react";
    import {StyleSheet, View, Text, Pressable} from "react-native";
import {Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import TopNav_2 from "../components/TopNav_2";
import BottomNav from "../components/BottomNav";
    
const Quiz1 = () => {
const navigation = useNavigation();

  return (
    <View style={styles.quiz1}>
      <Image style={styles.maskiDlaTa} contentFit="cover" source={require("../assets/maski-dla-ta4.png")} />
      <View style={styles.kafelki}>
        <Text style={styles.pytanie810}>Pytanie 8/10</Text>
        <Text style={styles.jakNazywaSi}>Jak nazywa się najjaśniejsza gwiazda na nocnym niebie?</Text>
      </View>
      <Pressable style={styles.przyciskiWyboru}>
        <Text style={styles.nastpnePytanie}>Następne pytanie</Text>
      </Pressable>
      <View style={styles.odpowiedzi}>
        <Pressable style={styles.odpowiedz1}>
          <Text style={styles.betelgeza}>Betelgeza</Text>
        </Pressable>
        <Pressable style={styles.odpowiedz2}>
          <Text style={styles.syriusz}>Syriusz</Text>
        </Pressable>
        <Pressable style={styles.odpowiedz3}>
          <Text style={styles.wega}>Wega</Text>
        </Pressable>
      </View>
      <View style={styles.czas}>
        <Image style={styles.czasChild} contentFit="cover" source={require("../assets/ellipse-5.png")} />
        <Image style={styles.czasItem} contentFit="cover" source={require("../assets/ellipse-6.png")} />
        <Image style={styles.czasInner} contentFit="cover" source={require("../assets/ellipse-7.png")} />
        <Text style={styles.text}>23</Text>
      </View>
      <View style={styles.liczbaOdpowiedzi}>
        <Text style={styles.text1}>04</Text>
        <Text style={styles.text2}>03</Text>
        <View style={styles.liczbaOdpowiedziChild} />
        <View style={styles.liczbaOdpowiedziItem} />
      </View>
      
      <TopNav_2 />
      <BottomNav />
    </View>);
};

const styles = StyleSheet.create({
  maskaZCieniem: {
    position: "absolute",
    top: 503,
    left: -30,
    width: 414,
    height: 312,
    backgroundColor: "transparent"
  },
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
  maskaZCieniem1: {
    position: "absolute",
    top: 503,
    left: -30,
    width: 414,
    height: 312,
    backgroundColor: "transparent"
  },
  pytanie810: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.secondary,
    textAlign: "left",
    width: 101,
    height: 24
  },
  jakNazywaSi: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
    width: 233,
    height: 47,
    marginTop: 9
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
    width: 280,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 24,
    paddingTop: 76,
    paddingRight: 23,
    paddingBottom: 76
  },
  nastpnePytanie: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "center",
    width: 155,
    height: 15
  },
  przyciskiWyboru: {
    position: "absolute",
    height: "5.64%",
    width: "57.78%",
    top: "80.26%",
    right: "21.11%",
    bottom: "14.1%",
    left: "21.11%",
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: Padding.p_2xs
  },
  betelgeza: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray_600,
    textAlign: "center"
  },
  odpowiedz1: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDimgray_100,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 2,
    width: 244,
    height: 52,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs
  },
  syriusz: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray_600,
    textAlign: "center"
  },
  odpowiedz2: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDimgray_100,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 2,
    width: 244,
    height: 52,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    marginTop: 24
  },
  wega: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray_600,
    textAlign: "center"
  },
  odpowiedz3: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDimgray_100,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 2,
    width: 244,
    height: 52,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 13,
    marginTop: 24
  },
  odpowiedzi: {
    position: "absolute",
    top: 379,
    left: 60,
    width: 241,
    height: 192,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingRight: Padding.p_12xs
  },
  czasChild: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 67,
    height: 67
  },
  czasItem: {
    position: "absolute",
    top: 5,
    left: 5,
    width: 57,
    height: 57
  },
  czasInner: {
    position: "absolute",
    top: 9,
    left: 9,
    width: 49,
    height: 49
  },
  text: {
    position: "absolute",
    marginLeft: -12.5,
    top: 20,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "left"
  },
  czas: {
    position: "absolute",
    top: 186,
    left: 147,
    width: 67,
    height: 67
  },
  text1: {
    position: "absolute",
    top: 0,
    left: 229,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.colorFirebrick,
    textAlign: "left"
  },
  text2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.primary,
    textAlign: "left"
  },
  liczbaOdpowiedziChild: {
    position: "absolute",
    top: 5,
    left: 29,
    borderRadius: Border.br_mini,
    backgroundColor: Color.primary,
    width: 30,
    height: 8
  },
  liczbaOdpowiedziItem: {
    position: "absolute",
    top: 5,
    left: 181,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorFirebrick,
    width: 36,
    height: 8
  },
  liczbaOdpowiedzi: {
    position: "absolute",
    top: 218,
    left: 58,
    width: 249,
    height: 17
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
    textAlign: "center"
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
    textAlign: "center"
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
    textAlign: "center"
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
    textAlign: "center"
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%"
  },
  ikonkaStronyGwnej: {
    position: "absolute",
    left: "7.64%",
    top: "0%",
    right: "83.17%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%"
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%"
  },
  ikonkaKatalogu: {
    position: "absolute",
    left: "33.6%",
    top: "0%",
    right: "57.21%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%"
  },
  icon2: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%"
  },
  ikonkaMapy: {
    position: "absolute",
    left: "59.87%",
    top: "0%",
    right: "30.94%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%"
  },
  icon3: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%"
  },
  ikonkaGalerii: {
    position: "absolute",
    left: "86.13%",
    top: "-2.13%",
    right: "4.67%",
    bottom: "40%",
    width: "9.19%",
    height: "62.13%"
  },
  dolnyPasekNawigacyjny: {
    position: "absolute",
    marginLeft: -169,
    top: 700,
    left: "50%",
    width: 327,
    height: 47
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

export default Quiz1;
