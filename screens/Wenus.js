import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Pressable,ScrollView } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import BottomNav from "../components/BottomNav";
import TopNav_2 from "../components/TopNav_2";

const Wenus = ({ route }) => {
  const { planet } = route.params || { planet: 'Wenus' };
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const planetIndexes = {
    'Wenus': 0,
    'Mars': 1,
  };
  useEffect(() => {
    setIndex(planetIndexes[planet]);
  }, [planet, planetIndexes]);

  const planetData = [
    {
      planet: 'Wenus',
      image: require('../assets/kafelek_wenus.png'),
      title: `Wenus jest drugą planetą  od słońca.`,
      first: `Nazywana jest czasem siostrzaną planetą Ziemi, gdyż oba te globy powstały w zasadzie z tej samej materii, mniej więcej w tym samym czasie i mają podobne rozmiary, masy i gęstości. Widziana z daleka często porównywana była do bogini olśniewającej urody nazywanej różnie w różnych czasach.`,
      
      second: `Charakterystyka fizyczna:
      Średnica Wenus wynosi około 12 104 km, co czyni ją bardzo zbliżoną rozmiarami do Ziemi.
      Masa Wenus to około 0,815 masy Ziemi.
      
      Okres obrotu:
      Wenus ma bardzo wolny okres obrotu własnego, który wynosi około 243 dni ziemskie.
      Interesującą cechą jest to, że Wenus obraca się w kierunku przeciwnym do kierunku obiegu wokół Słońca, co oznacza, że na powierzchni planety dzień trwa dłużej niż rok.`,
      
      third:`Atmosfera:
      Atmosfera Wenus jest bardzo gęsta i składa się głównie z dwutlenku węgla (CO2).
      Obecność gęstej atmosfery powoduje efekt cieplarniany, który sprawia, że temperatura na powierzchni Wenus jest wyjątkowo wysoka.

      Temperatura na powierzchni:
      Wenus jest najgorętszą planetą w Układzie Słonecznym.
      Średnia temperatura na powierzchni planety wynosi około 467 stopni Celsiusza (872 stopnie Fahrenheita), co jest znacznie wyższe od temperatury wrzenia ołowiu.`,
    },
    {
      planet: 'Mars',
      image: require('../assets/kafelek_mars.png'),
      title: 'Mars jest czwartą planetą od Słońca.',
      first: 'Mars jest czerwoną planetą z powodu swojej powierzchni zdominowanej przez tlenki żelaza, co nadaje mu czerwoną barwę.',
      second: `Charakterystyka fizyczna:
      Średnica Marsa wynosi około 6 792 km, co czyni go tylko nieznacznie większym od Księżyca.
      Masa Marsa to około 0,107 masy Ziemi.
      
      Okres obrotu:
      Mars ma podobny okres obrotu do Ziemi, wynoszący około 24,6 godzin.`,
      third: `Atmosfera:
      Atmosfera Marsa jest rzadka i składa się głównie z dwutlenku węgla (95%) oraz azotu (3%). Mars ma bardzo cienką warstwę atmosfery, co sprawia, że na jego powierzchni panują ekstremalne warunki.`,
    },
  ];

  return (
    <View style={styles.container}>
    <View style={styles.wenus1}>
      <Text style={styles.wenus}>{planet}</Text>
      <Image
        style={styles.maskiDlaTa}
        contentFit="cover"
        source={require("../assets/maski-dla-ta2.png")}
      />
      <View style={styles.box_container}>
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <View style={styles.kafelki}>
          <Image
            style={styles.kafelekWenus}
            contentFit="cover"
            source={planetData[index].image}
          />
          <Text style={styles.nazywanaJestCzasem}>{planetData[index].first}</Text>
          <Text style={styles.wenusJestDrug}>{planetData[index].title}</Text>
        </View>
        <View style={styles.kafelki1}>
          <Text style={styles.szczegoweDane}>Szczegółowe dane:</Text>
          <Text style={styles.charakterystykaFizycznaRed}>{planetData[index].second}
          </Text>
        </View>
        <View style={styles.kafelki2}>
          <Text style={styles.atmosferaAtmosferaWenus}>{planetData[index].third}
          </Text>
        </View>
        </ScrollView>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "260%",
  },
  wenus: {
    position: "absolute",
    flexDirection: 'row',
    top: 123,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    color: Color.text,
    textAlign: "center",
    width: 389,
    height: 73,
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
    position: "relative",
    height: "97.13%",
    left: "15%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    width: 280,
  },
  kafelki1: {
    position: "relative",
    height: "97.13%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    left: "30%",
    width: 280,
  },
  kafelki2: {
    position: "relative",
    height: "97.13%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    left: "50%",
    width: 280,
  },
  box_container: {
    position: "absolute",
    top: 197,
    width: "100%",
    height: 418,
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
  atmosferaAtmosferaWenus: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    width: 249,
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
