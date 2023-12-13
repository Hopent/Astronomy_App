import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import BottomNav from "../components/BottomNav";
import TopNav_2 from "../components/TopNav_2";

const Wenus = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wenus1}>
      <Text style={styles.wenus}>Wenus</Text>
      <Image
        style={styles.maskiDlaTa}
        contentFit="cover"
        source={require("../assets/maski-dla-ta2.png")}
      />
      <View style={styles.kafelki3}>
        <View style={styles.kafelki}>
          <Image
            style={styles.kafelekWenus}
            contentFit="cover"
            source={require("../assets/kafelek--wenus.png")}
          />
          <Text
            style={styles.nazywanaJestCzasem}
          >{`Nazywana jest czasem siostrzaną planetą Ziemi, gdyż oba te globy powstały w zasadzie z tej samej materii, mniej więcej w tym samym czasie i mają podobne rozmiary, masy i gęstości. Widziana z daleka często porównywana była do bogini olśniewającej urody nazywanej różnie 
w różnych czasach.`}</Text>
          <Text style={styles.wenusJestDrug}>{`Wenus jest
drugą planetą 
od słońca.`}</Text>
        </View>
        <View style={styles.kafelki1}>
          <Text style={styles.szczegoweDane}>Szczegółowe dane:</Text>
          <Text
            style={styles.charakterystykaFizycznaRed}
          >{`Charakterystyka fizyczna:
Średnica Wenus wynosi około 12 104 km, co czyni ją bardzo zbliżoną rozmiarami do Ziemi.
Masa Wenus to około 0,815 masy Ziemi.

Okres obrotu:
Wenus ma bardzo wolny okres obrotu własnego, który wynosi około 243 dni ziemskie.
Interesującą cechą jest to, że Wenus obraca się w kierunku przeciwnym do kierunku obiegu wokół Słońca, co oznacza, że na powierzchni planety dzień trwa dłużej niż rok.
`}</Text>
        </View>
        <View style={styles.kafelki2}>
          <Text style={styles.atmosferaAtmosferaWenus}>{`Atmosfera:
Atmosfera Wenus jest bardzo gęsta i składa się głównie z dwutlenku węgla (CO2).
Obecność gęstej atmosfery powoduje efekt cieplarniany, który sprawia, że temperatura na powierzchni Wenus jest wyjątkowo wysoka.

Temperatura na powierzchni:
Wenus jest najgorętszą planetą w Układzie Słonecznym.
Średnia temperatura na powierzchni planety wynosi około 467 stopni Celsiusza (872 stopnie Fahrenheita), co jest znacznie wyższe od temperatury wrzenia ołowiu.
`}</Text>
        </View>
      </View>
      <Pressable
        style={styles.przyciskiWyboru}
        onPress={() => navigation.navigate("KatalogPlanet")}
      >
        <Image
          style={styles.signOutSqureFillIcon}
          contentFit="cover"
          source={require("../assets/sign-out-squre-fill.png")}
        />
        <Text style={styles.powrt}>Powrót</Text>
      </Pressable>
      <BottomNav />
      <TopNav_2 />
    </View>
  );
};

const styles = StyleSheet.create({
  wenus: {
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
  maskiDlaTa: {
    position: "absolute",
    height: "67.68%",
    width: "194.69%",
    top: "15.26%",
    right: "-94.69%",
    bottom: "17.06%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.7,
  },
  kafelekWenus: {
    position: "absolute",
    height: "24.7%",
    width: "38.57%",
    top: "5.69%",
    right: "55.71%",
    bottom: "69.61%",
    left: "5.71%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  nazywanaJestCzasem: {
    position: "absolute",
    top: 140,
    left: 16,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    width: 249,
  },
  wenusJestDrug: {
    position: "absolute",
    top: 44,
    left: 138,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
    width: 122,
  },
  kafelki: {
    position: "absolute",
    height: "97.13%",
    marginLeft: -165.5,
    top: "0.48%",
    bottom: "2.39%",
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 280,
  },
  szczegoweDane: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
    width: 163,
  },
  charakterystykaFizycznaRed: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    width: 249,
    marginTop: 21,
  },
  kafelki1: {
    position: "absolute",
    height: "97.13%",
    marginLeft: 132.5,
    top: "0%",
    bottom: "2.87%",
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 280,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: 15,
    paddingTop: Padding.p_8xs,
    paddingRight: 16,
    paddingBottom: Padding.p_8xs,
  },
  atmosferaAtmosferaWenus: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    width: 249,
  },
  kafelki2: {
    position: "absolute",
    height: "97.13%",
    top: "0%",
    right: -546,
    bottom: "2.87%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 280,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: 29,
  },
  kafelki3: {
    position: "absolute",
    marginLeft: -166,
    top: 197,
    left: "50%",
    width: 331,
    height: 418,
  },
  signOutSqureFillIcon: {
    position: "relative",
    width: 17,
    height: 17,
  },
  powrt: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
    width: 80,
    height: 15,
    marginLeft: -9,
  },
  przyciskiWyboru: {
    position: "absolute",
    height: "3.76%",
    width: "27.78%",
    top: "81.63%",
    right: "14.72%",
    bottom: "14.62%",
    left: "57.5%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_7xs,
  },
  home: {
    position: "absolute",
    height: "31.91%",
    width: "24.42%",
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
    left: "28.72%",
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
    left: "54.97%",
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
    left: "7.62%",
    top: "0%",
    right: "83.2%",
    bottom: "37.87%",
    width: "9.18%",
    height: "62.13%",
  },
  ikonkaKataloguIcon: {
    position: "absolute",
    height: "62.13%",
    width: "9.18%",
    top: "0%",
    right: "57.23%",
    bottom: "37.87%",
    left: "33.6%",
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
    right: "4.7%",
    bottom: "37.87%",
    width: "9.18%",
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
    left: "59.85%",
    top: "0%",
    right: "30.98%",
    bottom: "37.87%",
    width: "9.18%",
    height: "62.13%",
  },
  dolnyPasekNawigacyjny: {
    alignSelf: "stretch",
    position: "relative",
    height: 47,
  },
  dolnyPasekNawigacyjny1: {
    position: "absolute",
    top: 667,
    left: -32,
    width: 414,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_24xl,
    paddingVertical: Padding.p_14xl,
    backgroundColor: "transparent",
  },
  menu: {
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
    top: 61,
    left: 26,
    width: 299,
    height: 26,
  },
  wenus1: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden",
  },
});

export default Wenus;
