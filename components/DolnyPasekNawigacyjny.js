import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const DolnyPasekNawigacyjny = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dolnyPasekNawigacyjny}>
      <View style={styles.property1default}>
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
        <Image
          style={styles.ikonkaKataloguIcon}
          contentFit="cover"
          source={require("../assets/ikonka-katalogu1.png")}
        />
        <Pressable
          style={styles.ikonkaGalerii}
          onPress={() => navigation.navigate("Galeria")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/ikonka-galerii1.png")}
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
      </View>
      <View style={styles.property1variant2}>
        <Text style={styles.home1}>Home</Text>
        <Text style={styles.katalog1}>Katalog</Text>
        <Text style={styles.galeria1}>Galeria</Text>
        <Text style={styles.mapa1}>Mapa</Text>
        <Image
          style={styles.ikonkaStronyGwnej1}
          contentFit="cover"
          source={require("../assets/dolny-pasek-nawigacyjnyvariant5.png")}
        />
        <Pressable
          style={styles.ikonkaKatalogu}
          onPress={() => navigation.navigate("KatalogPlanet")}
        >
          <Image
            style={styles.icon3}
            contentFit="cover"
            source={require("../assets/ikonka-katalogu2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaGalerii1}
          onPress={() => navigation.navigate("Galeria")}
        >
          <Image
            style={styles.icon4}
            contentFit="cover"
            source={require("../assets/ikonka-galerii1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaMapy1}
          onPress={() => navigation.navigate("Mapa")}
        >
          <Image
            style={styles.icon5}
            contentFit="cover"
            source={require("../assets/ikonka-mapy.png")}
          />
        </Pressable>
      </View>
      <View style={styles.property1variant3}>
        <Text style={styles.home2}>Home</Text>
        <Text style={styles.katalog2}>Katalog</Text>
        <Text style={styles.galeria2}>Galeria</Text>
        <Text style={styles.mapa2}>Mapa</Text>
        <Pressable
          style={styles.ikonkaStronyGwnej2}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon6}
            contentFit="cover"
            source={require("../assets/ikonka-strony-gwnej3.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaKatalogu1}
          onPress={() => navigation.navigate("KatalogPlanet")}
        >
          <Image
            style={styles.icon7}
            contentFit="cover"
            source={require("../assets/ikonka-katalogu2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaGalerii2}
          onPress={() => navigation.navigate("Galeria")}
        >
          <Image
            style={styles.icon8}
            contentFit="cover"
            source={require("../assets/ikonka-galerii1.png")}
          />
        </Pressable>
        <Image
          style={styles.ikonkaMapyIcon}
          contentFit="cover"
          source={require("../assets/ikonka-mapy1.png")}
        />
      </View>
      <View style={styles.property1variant4}>
        <Text style={styles.home3}>Home</Text>
        <Text style={styles.katalog3}>Katalog</Text>
        <Text style={styles.galeria3}>Galeria</Text>
        <Text style={styles.mapa3}>Mapa</Text>
        <Pressable
          style={styles.ikonkaStronyGwnej3}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon9}
            contentFit="cover"
            source={require("../assets/ikonka-strony-gwnej3.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaKatalogu2}
          onPress={() => navigation.navigate("KatalogPlanet")}
        >
          <Image
            style={styles.icon10}
            contentFit="cover"
            source={require("../assets/ikonka-katalogu2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaGalerii3}
          onPress={() => navigation.navigate("Galeria")}
        >
          <Image
            style={styles.icon11}
            contentFit="cover"
            source={require("../assets/ikonka-galerii.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaMapy2}
          onPress={() => navigation.navigate("Mapa")}
        >
          <Image
            style={styles.icon12}
            contentFit="cover"
            source={require("../assets/ikonka-mapy.png")}
          />
        </Pressable>
      </View>
      <View style={styles.property1variant5}>
        <Text style={styles.home4}>Home</Text>
        <Text style={styles.katalog4}>Katalog</Text>
        <Text style={styles.galeria4}>Galeria</Text>
        <Text style={styles.mapa4}>Mapa</Text>
        <Pressable
          style={styles.ikonkaStronyGwnej4}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon13}
            contentFit="cover"
            source={require("../assets/ikonka-strony-gwnej3.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaKatalogu3}
          onPress={() => navigation.navigate("KatalogPlanet")}
        >
          <Image
            style={styles.icon14}
            contentFit="cover"
            source={require("../assets/ikonka-katalogu2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaMapy3}
          onPress={() => navigation.navigate("Mapa")}
        >
          <Image
            style={styles.icon15}
            contentFit="cover"
            source={require("../assets/ikonka-mapy.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ikonkaGalerii4}
          onPress={() => navigation.navigate("Galeria")}
        >
          <Image
            style={styles.icon16}
            contentFit="cover"
            source={require("../assets/ikonka-galerii1.png")}
          />
        </Pressable>
      </View>
    </View>
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
    left: "7.64%",
    top: "0%",
    right: "83.17%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  ikonkaKataloguIcon: {
    position: "absolute",
    height: "62.13%",
    width: "9.19%",
    top: "0%",
    right: "57.21%",
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
  property1default: {
    position: "absolute",
    marginLeft: -163.7,
    top: 20,
    left: "50%",
    width: 327,
    height: 47,
  },
  home1: {
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
  katalog1: {
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
  galeria1: {
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
  mapa1: {
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
  ikonkaStronyGwnej1: {
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
  icon3: {
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
  icon4: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaGalerii1: {
    position: "absolute",
    left: "86.13%",
    top: "0%",
    right: "4.67%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  icon5: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaMapy1: {
    position: "absolute",
    left: "59.87%",
    top: "0%",
    right: "30.94%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  property1variant2: {
    position: "absolute",
    marginLeft: -163.7,
    top: 87,
    left: "50%",
    width: 327,
    height: 47,
  },
  home2: {
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
  katalog2: {
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
  galeria2: {
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
  mapa2: {
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
  icon6: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaStronyGwnej2: {
    position: "absolute",
    left: "7.64%",
    top: "0%",
    right: "83.17%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  icon7: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaKatalogu1: {
    position: "absolute",
    left: "33.6%",
    top: "0%",
    right: "57.21%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  icon8: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaGalerii2: {
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
  property1variant3: {
    position: "absolute",
    marginLeft: -163.7,
    top: 154,
    left: "50%",
    width: 327,
    height: 47,
  },
  home3: {
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
  katalog3: {
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
  galeria3: {
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
  mapa3: {
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
  icon9: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaStronyGwnej3: {
    position: "absolute",
    left: "7.64%",
    top: "0%",
    right: "83.17%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  icon10: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaKatalogu2: {
    position: "absolute",
    left: "33.6%",
    top: "0%",
    right: "57.21%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  icon11: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaGalerii3: {
    position: "absolute",
    left: "85.83%",
    top: "0%",
    right: "4.09%",
    bottom: "37.87%",
    width: "10.08%",
    height: "62.13%",
  },
  icon12: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaMapy2: {
    position: "absolute",
    left: "59.87%",
    top: "0%",
    right: "30.94%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  property1variant4: {
    position: "absolute",
    marginLeft: -163.7,
    top: 221,
    left: "50%",
    width: 327,
    height: 47,
  },
  home4: {
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
  katalog4: {
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
  galeria4: {
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
  mapa4: {
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
  icon13: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaStronyGwnej4: {
    position: "absolute",
    left: "7.64%",
    top: "0%",
    right: "83.17%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  icon14: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaKatalogu3: {
    position: "absolute",
    left: "33.6%",
    top: "0%",
    right: "57.21%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  icon15: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaMapy3: {
    position: "absolute",
    left: "59.87%",
    top: "0%",
    right: "30.94%",
    bottom: "37.87%",
    width: "9.19%",
    height: "62.13%",
  },
  icon16: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonkaGalerii4: {
    position: "absolute",
    left: "86.13%",
    top: "-2.13%",
    right: "4.67%",
    bottom: "40%",
    width: "9.19%",
    height: "62.13%",
  },
  property1variant5: {
    position: "absolute",
    marginLeft: -163.7,
    top: 288,
    left: "50%",
    width: 327,
    height: 47,
  },
  dolnyPasekNawigacyjny: {
    position: "relative",
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 367,
    height: 355,
    overflow: "hidden",
  },
});

export default DolnyPasekNawigacyjny;
