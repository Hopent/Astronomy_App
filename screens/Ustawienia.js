import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  Switch,
  Linking,
} from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Ustawienia = () => {
  const [frameSwitchSwitchValueState, setFrameSwitchSwitchValueState] =
    useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.ustawienia1}>
      <Text style={styles.ustawienia}>Ustawienia</Text>
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
      <View style={styles.ustawieniaKontaParent}>
        <Text style={styles.ustawieniaKonta}>Ustawienia konta</Text>
        <Pressable
          style={styles.edytujProfilParent}
          onPress={() => navigation.navigate("Ustawienia2")}
        >
          <Text style={styles.edytujProfil}>Edytuj profil</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Pressable
          style={styles.zmieHasoParent}
          onPress={() => navigation.navigate("Ustawienia3")}
        >
          <Text style={styles.zmieHaso}>Zmień hasło</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-15.png")}
          />
        </Pressable>
        <View style={styles.powiadomieniaParent}>
          <Text style={styles.powiadomienia}>Powiadomienia</Text>
          <Switch
            style={styles.frameItem}
            value={frameSwitchSwitchValueState}
            onValueChange={setFrameSwitchSwitchValueState}
            thumbColor="#fff"
            trackColor={{ false: "#939393", true: "#ffcb74" }}
          />
        </View>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={styles.oAplikacjiParent}>
        <Text style={styles.oAplikacji}>O aplikacji</Text>
        <Pressable
          style={styles.regulaminParent}
          onPress={() => Linking.openURL("https://www.lipsum.com/")}
        >
          <Text style={styles.regulamin}>Regulamin......</Text>
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={styles.vectorIcon3}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.politykaPrywatnociParent}
          onPress={() => Linking.openURL("https://www.lipsum.com/")}
        >
          <Text style={styles.politykaPrywatnoci}>Polityka Firm</Text>
          <Image
            style={styles.vectorIcon4}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={styles.vectorIcon5}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.wicejONasParent}
          onPress={() => Linking.openURL("https://www.lipsum.com/")}
        >
          <Text style={styles.wicejONas}>Więcej o nas..</Text>
          <Image
            style={styles.vectorIcon6}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={styles.vectorIcon7}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
      </View>
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
  ustawienia: {
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
  ustawieniaKonta: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "left",
  },
  edytujProfil: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
  },
  vectorIcon: {
    position: "relative",
    width: 7,
    height: 12,
    marginLeft: 173,
  },
  edytujProfilParent: {
    position: "absolute",
    top: 54,
    left: 0,
    width: 281,
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  zmieHaso: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
  },
  frameChild: {
    position: "relative",
    width: 55,
    height: 24,
    marginLeft: 172,
  },
  zmieHasoParent: {
    position: "absolute",
    top: 109,
    left: 0,
    width: 329,
    height: 24,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  powiadomienia: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
  },
  frameItem: {
    position: "relative",
    borderRadius: 20,
    width: 56,
    height: 29,
    marginLeft: 120,
  },
  powiadomieniaParent: {
    position: "absolute",
    top: 156,
    left: 0,
    width: 305,
    height: 29,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon1: {
    position: "absolute",
    height: "12.7%",
    width: "7.29%",
    top: "87.3%",
    right: "0%",
    bottom: "0%",
    left: "92.71%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ustawieniaKontaParent: {
    position: "absolute",
    top: 208,
    left: 31,
    width: 329,
    height: 189,
  },
  oAplikacji: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "left",
  },
  regulamin: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
  },
  vectorIcon2: {
    position: "relative",
    width: 7,
    height: 12,
    marginLeft: 188,
  },
  vectorIcon3: {
    position: "relative",
    width: 24,
    height: 24,
    marginLeft: 188,
  },
  regulaminParent: {
    position: "absolute",
    top: 125,
    left: 0,
    width: 329,
    height: 24,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  politykaPrywatnoci: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
  },
  vectorIcon4: {
    position: "relative",
    width: 7,
    height: 12,
    marginLeft: 188,
  },
  vectorIcon5: {
    position: "relative",
    width: 24,
    height: 24,
    marginLeft: 188,
  },
  politykaPrywatnociParent: {
    position: "absolute",
    top: 89,
    left: 1,
    width: 329,
    height: 24,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  wicejONas: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
  },
  vectorIcon6: {
    position: "relative",
    width: 7,
    height: 12,
    marginLeft: 188,
  },
  vectorIcon7: {
    position: "relative",
    width: 24,
    height: 24,
    marginLeft: 188,
  },
  wicejONasParent: {
    position: "absolute",
    top: 53,
    left: 1,
    width: 329,
    height: 24,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  oAplikacjiParent: {
    position: "absolute",
    top: 433,
    left: 29,
    width: 330,
    height: 189,
  },
  ustawienia1: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden",
  },
});

export default Ustawienia;
