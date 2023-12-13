import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import BottomNav from "../components/BottomNav";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home1}>
      <View style={styles.panele}>
        <View style={styles.fazaKsiyca1}>
          <View style={styles.kafelek} />
          <Image
            style={styles.giphy3Icon}
            contentFit="cover"
            source={require("../assets/giphy-32.png")}
          />
          <Text style={styles.zanikajcy735Widocznoci}>{`Zanikający
            7.35% widoczności
            399247.71 km od Ziemi
            Wiek wynosi 27 dni
          `}</Text>
          <Text style={styles.fazaKsiyca}>Faza księżyca</Text>
        </View>
        <View style={styles.ranking}>
          <View style={styles.kafelek1} />
          <Pressable
            style={styles.przyciskWyboru}
            onPress={() => navigation.navigate("Quiz")}
          />
          <Text style={styles.przejdDoQuizu}>Przejdź do quizu</Text>
          <Image
            style={styles.signOutSqureFillIcon}
            contentFit="cover"
            source={require("../assets/sign-out-squre-fill1.png")}
          />
          <Text style={styles.punktw200Punktw}>{`220 punktów
          200 punktów
          180 punktów
          170 punktów
          165 punktów
          `}</Text>
          <Text style={styles.pokerGabriel12Maxas}>{`Poker
          Gabriel12
          maxas
          Monik
          Mieszko1`}</Text>
          <Text style={styles.rankingWQuizie}>Ranking w quizie</Text>
        </View>
      </View>
      <Text style={styles.witajUser}>Witaj, user</Text>

      <View style={styles.grnyPasekNawigacyjny}>
        <Text style={styles.menu}>Menu</Text>
        <Pressable
          style={styles.ikonaPowiadomie}
          onPress={() => navigation.navigate("Powiadomienia")}
        >
          <Image
            style={styles.icon3}
            contentFit="cover"
            source={require("../assets/ikona-powiadomie.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonaMenu}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={styles.icon4}
            contentFit="cover"
            source={require("../assets/ikona-menu.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonaWyszukiwarki}
          onPress={() => navigation.navigate("Quiz1")}
        >
          <Image
            style={styles.icon5}
            contentFit="cover"
            source={require("../assets/ikona-wyszukiwarki.png")}
          />
        </Pressable>
      </View>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  kafelek: {
    position: "absolute",
    height: "81.06%",
    marginLeft: -150,
    top: "18.94%",
    bottom: "0%",
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
    width: 300,
  },
  giphy3Icon: {
    position: "absolute",
    height: "81.06%",
    width: "32%",
    top: "18.94%",
    right: "0%",
    bottom: "0%",
    left: "68%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  zanikajcy735Widocznoci: {
    position: "absolute",
    top: "34.85%",
    left: "9%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  fazaKsiyca: {
    position: "absolute",
    height: "40.91%",
    marginLeft: -99,
    top: "0%",
    left: "50%",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.text,
    textAlign: "center",
    width: 198,
  },
  fazaKsiyca1: {
    position: "relative",
    width: 300,
    height: 132,
  },
  kafelek1: {
    position: "absolute",
    height: "86.17%",
    width: "100%",
    top: "13.83%",
    right: "0%",
    bottom: "0%",
    left: "0%",
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
  },
  przyciskWyboru: {
    position: "absolute",
    height: "15.43%",
    marginLeft: -84,
    top: "75.53%",
    bottom: "9.04%",
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 2,
    width: 162,
  },
  przejdDoQuizu: {
    position: "absolute",
    height: "7.98%",
    width: "43%",
    top: "79.26%",
    left: "30%",
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
  },
  signOutSqureFillIcon: {
    position: "absolute",
    height: "9.04%",
    width: "5.67%",
    top: "78.72%",
    right: "68.67%",
    bottom: "12.23%",
    left: "25.67%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  punktw200Punktw: {
    position: "absolute",
    top: "25.53%",
    left: "62.33%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "left",
  },
  pokerGabriel12Maxas: {
    position: "absolute",
    top: "25.53%",
    left: "9%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  rankingWQuizie: {
    position: "absolute",
    height: "28.72%",
    marginLeft: -142,
    top: "0%",
    left: "50%",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.text,
    textAlign: "center",
    width: 285,
  },
  ranking: {
    position: "relative",
    width: 300,
    height: 188,
    marginTop: 21,
  },
  panele: {
    position: "absolute",
    top: 195,
    left: 30,
    width: 300,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  witajUser: {
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
  maskaZCieniem: {
    position: "absolute",
    top: 13,
    left: 5,
    width: 414,
    height: 312,
    backgroundColor: "transparent",
  },
  maskaZCieniem1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 414,
    height: 312,
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
  home1: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
  },
});

export default Home;
