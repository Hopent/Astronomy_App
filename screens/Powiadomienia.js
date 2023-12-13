import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Powiadomienia = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.powiadomienia1}>
      <View style={styles.content}>
        <Text style={styles.logowanieZNieznanego}>
          Logowanie z nieznanego urządzenia
        </Text>
        <Image
          style={styles.contentChild}
          contentFit="cover"
          source={require("../assets/ellipse-445.png")}
        />
        <Text style={styles.logowanieZakoczonePowodzeni}>
          Logowanie zakończone powodzeniem
        </Text>
        <Image
          style={styles.contentItem}
          contentFit="cover"
          source={require("../assets/ellipse-446.png")}
        />
        <Image
          style={styles.contentInner}
          contentFit="cover"
          source={require("../assets/ellipse-446.png")}
        />
        <Text style={styles.ktoPrbujeZalogowa}>
          Ktoś próbuje zalogować się do Twojego konta z...
        </Text>
        <Text style={styles.udaoCiSi}>
          Udało Ci się poprawnie zalogować do konta z u...
        </Text>
        <Text style={styles.logowanieZakoczonePowodzeni1}>
          Logowanie zakończone powodzeniem
        </Text>
        <Text style={styles.udaoCiSi1}>
          Udało Ci się poprawnie zalogować do konta z u...
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector-14.png")}
        />
        <Image
          style={styles.contentChild1}
          contentFit="cover"
          source={require("../assets/vector-15.png")}
        />
        <Image
          style={styles.contentChild2}
          contentFit="cover"
          source={require("../assets/vector-16.png")}
        />
        <View style={styles.filter} />
      </View>
      <Text style={styles.powiadomienia}>Powiadomienia</Text>
      <View style={styles.dolnyPasekNawigacyjny}>
        <Text style={styles.home}>Home</Text>
        <Text style={styles.katalog}>Katalog</Text>
        <Text style={styles.galeria}>Galeria</Text>
        <Text style={styles.mapa}>Mapa</Text>
        <Pressable
          style={styles.ikonkaStronyGwnej}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/ikonka-strony-gwnej3.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaKatalogu}
          onPress={() => navigation.navigate("KatalogPlanet")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/ikonka-katalogu2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaMapy}
          onPress={() => navigation.navigate("Mapa")}
        >
          <Image
            style={styles.icon2}
            contentFit="cover"
            source={require("../assets/ikonka-mapy.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaGalerii}
          onPress={() => navigation.navigate("Galeria")}
        >
          <Image
            style={styles.icon3}
            contentFit="cover"
            source={require("../assets/ikonka-galerii1.png")}
          />
        </Pressable>
      </View>
      <View style={styles.grnyPasekNawigacyjny}>
        <Pressable
          style={styles.ikonaPowiadomie}
          onPress={() => navigation.navigate("Powiadomienia")}
        >
          <Image
            style={styles.icon4}
            contentFit="cover"
            source={require("../assets/ikona-powiadomie.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonaWyszukiwarki}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Image
            style={styles.icon5}
            contentFit="cover"
            source={require("../assets/ikona-wyszukiwarki.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.zamknij}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon6}
          contentFit="cover"
          source={require("../assets/zamknij.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logowanieZNieznanego: {
    position: "absolute",
    top: 216,
    left: 39,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  contentChild: {
    position: "absolute",
    top: 221,
    left: 300,
    width: 13,
    height: 13,
  },
  logowanieZakoczonePowodzeni: {
    position: "absolute",
    top: 300,
    left: 39,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  contentItem: {
    position: "absolute",
    top: 305,
    left: 300,
    width: 13,
    height: 13,
  },
  contentInner: {
    position: "absolute",
    top: 389,
    left: 300,
    width: 13,
    height: 13,
  },
  ktoPrbujeZalogowa: {
    position: "absolute",
    top: 244,
    left: 39,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    lineHeight: 24,
    fontFamily: FontFamily.montserratRegular,
    color: Color.text,
    textAlign: "left",
  },
  udaoCiSi: {
    position: "absolute",
    top: 328,
    left: 39,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    lineHeight: 24,
    fontFamily: FontFamily.montserratRegular,
    color: Color.text,
    textAlign: "left",
  },
  logowanieZakoczonePowodzeni1: {
    position: "absolute",
    top: 384,
    left: 40,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  udaoCiSi1: {
    position: "absolute",
    top: 412,
    left: 40,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    lineHeight: 24,
    fontFamily: FontFamily.montserratRegular,
    color: Color.text,
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    top: 284,
    left: 15,
    width: 360,
    height: 1,
    opacity: 0.02,
  },
  contentChild1: {
    position: "absolute",
    marginLeft: -187.5,
    top: 368,
    left: "50%",
    width: 360,
    height: 1,
    opacity: 0.02,
  },
  contentChild2: {
    position: "absolute",
    marginLeft: -187.5,
    top: 452,
    left: "50%",
    width: 360,
    height: 2,
    opacity: 0.02,
  },
  filter: {
    position: "absolute",
    height: "4.86%",
    width: "5.43%",
    top: "0%",
    right: "0%",
    bottom: "95.14%",
    left: "94.57%",
  },
  content: {
    position: "absolute",
    top: -17,
    left: -15,
    width: 405,
    height: 453,
  },
  powiadomienia: {
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
  ikonkaMapy: {
    position: "absolute",
    left: "59.87%",
    top: "0%",
    right: "30.94%",
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
  ikonkaGalerii: {
    position: "absolute",
    left: "86.13%",
    top: "-2.13%",
    right: "4.67%",
    bottom: "40%",
    width: "9.19%",
    height: "62.13%",
  },
  dolnyPasekNawigacyjny: {
    position: "absolute",
    marginLeft: -169,
    top: 700,
    left: "50%",
    width: 327,
    height: 47,
  },
  icon4: {
    width: "100%",
    height: "100%",
  },
  ikonaPowiadomie: {
    position: "absolute",
    left: 46,
    top: 0,
    width: 24,
    height: 24,
  },
  icon5: {
    width: "100%",
    height: "100%",
  },
  ikonaWyszukiwarki: {
    position: "absolute",
    left: 0,
    top: 1,
    width: 24,
    height: 24,
  },
  grnyPasekNawigacyjny: {
    position: "absolute",
    top: 62,
    left: 255,
    width: 70,
    height: 25,
  },
  icon6: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  zamknij: {
    position: "absolute",
    left: "6.67%",
    top: "8.08%",
    right: "86.67%",
    bottom: "88.85%",
    width: "6.67%",
    height: "3.08%",
  },
  powiadomienia1: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden",
  },
});

export default Powiadomienia;
