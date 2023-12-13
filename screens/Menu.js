import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu2}>
      <Image
        style={styles.menuChild}
        contentFit="cover"
        source={require("../assets/ellipse-212.png")}
      />
      <Text style={styles.danka12}>@danka12</Text>
      <Text style={styles.danuta}>Danuta</Text>
      <Text style={styles.menu}>Menu</Text>
      <View style={styles.menu1}>
        <Pressable
          style={styles.frame}
          onPress={() => navigation.navigate("EkranPowitalny")}
        >
          <View style={styles.wyloguj}>
            <Text style={styles.wylogujSi}>Wyloguj się</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.frame1}
          onPress={() => navigation.navigate("Ustawienia")}
        >
          <Text style={styles.ustawienia}>Ustawienia</Text>
        </Pressable>
        <Pressable
          style={styles.frame2}
          onPress={() => navigation.navigate("Kompas")}
        >
          <View style={styles.kompas1}>
            <Text style={styles.kompas}>Kompas</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.frame3}
          onPress={() => navigation.navigate("UkadSoneczny")}
        >
          <View style={styles.ukad}>
            <Image
              style={styles.ukadIcon}
              contentFit="cover"
              source={require("../assets/ukad.png")}
            />
            <Text style={styles.ukadSoneczny}>Układ słoneczny</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.frame4}
          onPress={() => navigation.navigate("Galeria")}
        >
          <View style={styles.galeria1}>
            <Image
              style={styles.ikonkaGaleriiIcon}
              contentFit="cover"
              source={require("../assets/ikonka-galerii11.png")}
            />
            <Text style={styles.galeria}>Galeria</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.frame5}
          onPress={() => navigation.navigate("Mapa")}
        >
          <View style={styles.mapa1}>
            <Image
              style={styles.ikonkaMapyIcon}
              contentFit="cover"
              source={require("../assets/ikonka-mapy2.png")}
            />
            <Text style={styles.mapa}>Mapa</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.frame6}
          onPress={() => navigation.navigate("KatalogPlanet")}
        >
          <View style={styles.katalog1}>
            <Image
              style={styles.ikonkaKataloguIcon}
              contentFit="cover"
              source={require("../assets/ikonka-katalogu3.png")}
            />
            <Text style={styles.katalog}>Katalog</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.frame7}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.home1}>
            <Image
              style={styles.ikonkaStronyGwnej}
              contentFit="cover"
              source={require("../assets/ikonka-strony-gwnej4.png")}
            />
            <Text style={styles.home}>Home</Text>
          </View>
        </Pressable>
      </View>
      <Pressable
        style={styles.zamknij}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/zamknij.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
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
  icon1: {
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
  menuChild: {
    position: "absolute",
    marginLeft: -38,
    top: 189,
    left: "50%",
    width: 77,
    height: 77,
  },
  danka12: {
    position: "absolute",
    marginLeft: -38,
    top: 310,
    left: "50%",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDimgray_100,
    textAlign: "left",
    width: 76,
    height: 11,
  },
  danuta: {
    position: "absolute",
    marginLeft: -36,
    top: 283,
    left: "50%",
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "left",
    width: 71,
    height: 17,
  },
  menu: {
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
  wylogujSi: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
    width: 87,
    height: 14,
  },
  wyloguj: {
    width: 87,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame: {
    position: "absolute",
    top: 342,
    left: 0,
    width: 255,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  ustawienia: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.text,
    textAlign: "left",
    width: 107,
    height: 17,
  },
  frame1: {
    position: "absolute",
    top: 277,
    left: 61,
    width: 133,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  kompas: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.text,
    textAlign: "left",
    width: 107,
    height: 17,
  },
  kompas1: {
    width: 107,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame2: {
    position: "absolute",
    top: 230,
    left: 61,
    width: 133,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ukadIcon: {
    position: "relative",
    width: 33,
    height: 36,
  },
  ukadSoneczny: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.text,
    textAlign: "center",
    width: 183,
    height: 14,
    marginLeft: 1,
  },
  ukad: {
    width: 218,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 7,
  },
  frame3: {
    position: "absolute",
    top: 178,
    left: 0,
    width: 255,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ikonkaGaleriiIcon: {
    position: "relative",
    width: 33,
    height: 29,
  },
  galeria: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.text,
    textAlign: "left",
    width: 59,
    height: 14,
    marginLeft: 26,
  },
  galeria1: {
    width: 118,
    height: 29,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame4: {
    position: "absolute",
    top: 135,
    left: 2,
    width: 251,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ikonkaMapyIcon: {
    position: "relative",
    width: 30,
    height: 29,
  },
  mapa: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.text,
    textAlign: "left",
    width: 52,
    height: 14,
    marginLeft: 26,
  },
  mapa1: {
    width: 109,
    height: 29,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame5: {
    position: "absolute",
    top: 88,
    left: 3,
    width: 249,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ikonkaKataloguIcon: {
    position: "relative",
    width: 30,
    height: 29,
  },
  katalog: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.text,
    textAlign: "left",
    width: 76,
    height: 14,
    marginLeft: 26,
  },
  katalog1: {
    width: 133,
    height: 29,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame6: {
    position: "absolute",
    top: 45,
    left: 3,
    width: 249,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ikonkaStronyGwnej: {
    position: "relative",
    width: 30,
    height: 29,
  },
  home: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    color: Color.text,
    textAlign: "left",
    width: 53,
    height: 14,
    marginLeft: 28,
  },
  home1: {
    width: 111,
    height: 29,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame7: {
    position: "absolute",
    top: 0,
    left: 2,
    width: 251,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  menu1: {
    position: "absolute",
    top: 355,
    left: 34,
    width: 255,
    height: 356,
  },
  icon2: {
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
  menu2: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden",
  },
});

export default Menu;
