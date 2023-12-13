import * as React from "react";
import { useState } from "react";
import { Pressable, StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Ustawienia3 = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");

  const handlePassword = () => {
    if (password2 == password3) {
      navigation.navigate("Ustawienia");
    } else {
      alert("Błedne hasło.");
    }
  };
  return (
    <View style={styles.ustawienia3}>
      <Text style={styles.zmieHaso}>Zmień hasło</Text>
      <Pressable
        style={styles.zamknij}
        onPress={() => navigation.navigate("Ustawienia")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/zamknij1.png")}
        />
      </Pressable>
      <Image
        style={styles.ustawienia3Child}
        contentFit="cover"
        source={require("../assets/ellipse-212.png")}
      />
      <Text style={styles.danka12}>@danka12</Text>
      <Text style={styles.danuta}>Danuta</Text>
      <Pressable
        style={styles.przyciskiWyboru}
        onPress={handlePassword}
      >
        <Text style={styles.zapiszZmiany}>Zapisz zmiany</Text>
        <Image
          style={styles.signOutSqureFillIcon}
          contentFit="cover"
          source={require("../assets/sign-out-squre-fill2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.przyciskiWyboru1}
        onPress={() => navigation.navigate("Ustawienia")}
      >
        <Text style={styles.anuluj}>Anuluj</Text>
      </Pressable>
      <View style={styles.panelLogowania}>
        <View style={styles.potwierdzNoweHasoParent}>
          <Text style={styles.potwierdzNoweHaso}>Potwierdz Nowe Hasło</Text>
          <View style={styles.frame}>
          <TextInput
              secureTextEntry={true}
              placeholder="Potwierdź nowe hasło"
              className="rectangle1"
              onChangeText={(text) => setPassword3(text)}
              style={styles.rectangle1} />
          </View>
        </View>
        <View style={styles.noweHasoParent}>
          <Text style={styles.noweHaso}>Nowe Hasło</Text>
          <View style={styles.frame1}>
          <TextInput
              secureTextEntry={true}
              placeholder="Wprowadz nowe hasło"
              className="rectangle1"
              onChangeText={(text) => setPassword2(text)}
              style={styles.rectangle1} />
          </View>
        </View>
        <View style={styles.hasoParent}>
          <Text style={styles.haso}>Hasło</Text>
          <View style={styles.frame2}>
          <TextInput
              secureTextEntry={true}
              placeholder="Wprowadz aktualne hasło"
              className="rectangle1"
              onChangeText={(text) => setPassword(text)}
              style={styles.rectangle1} />
          </View>
        </View>
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
  zmieHaso: {
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
    width: "100%",
    height: "100%",
  },
  zamknij: {
    position: "absolute",
    left: 24,
    top: 63,
    width: 24,
    height: 24,
  },
  ustawienia3Child: {
    position: "absolute",
    marginLeft: -39,
    top: 200,
    left: "50%",
    width: 77,
    height: 77,
  },
  danka12: {
    position: "absolute",
    marginLeft: -37,
    top: 321,
    left: "50%",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDimgray_100,
    textAlign: "left",
    width: 74,
    height: 20,
  },
  danuta: {
    position: "absolute",
    marginLeft: -36,
    top: 294,
    left: "50%",
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "left",
    width: 71,
    height: 20,
  },
  zapiszZmiany: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
    width: 125,
    height: 14,
  },
  signOutSqureFillIcon: {
    position: "relative",
    width: 22,
    height: 17,
    marginLeft: -110,
  },
  przyciskiWyboru: {
    position: "absolute",
    height: "3.76%",
    width: "35.31%",
    top: "81.79%",
    right: "8.58%",
    bottom: "14.45%",
    left: "56.11%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_12xs,
    paddingBottom: Padding.p_7xs,
  },
  anuluj: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
    width: 125,
    height: 14,
  },
  przyciskiWyboru1: {
    position: "absolute",
    height: "3.76%",
    width: "35.31%",
    top: "81.79%",
    right: "55.53%",
    bottom: "14.45%",
    left: "9.17%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: Padding.p_7xs,
  },
  potwierdzNoweHaso: {
    position: "absolute",
    top: 0,
    left: 24,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  rectangle: {
    flex: 1,
    position: "relative",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    height: 54,
  },
  frame: {
    position: "absolute",
    top: 19,
    left: 0,
    width: 300,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  potwierdzNoweHasoParent: {
    position: "absolute",
    top: 176,
    left: 0,
    width: 300,
    height: 73,
  },
  noweHaso: {
    position: "absolute",
    top: 0,
    left: 24,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  rectangle1: {
    flex: 1,
    position: "relative",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    height: 54,
  },
  frame1: {
    position: "absolute",
    top: 19,
    left: 0,
    width: 300,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  noweHasoParent: {
    position: "absolute",
    top: 82,
    left: 0,
    width: 300,
    height: 73,
  },
  haso: {
    position: "absolute",
    top: 0,
    left: 24,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  rectangle2: {
    flex: 1,
    position: "relative",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    height: 54,
  },
  frame2: {
    position: "absolute",
    top: 19,
    left: 0,
    width: 300,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  hasoParent: {
    position: "absolute",
    top: -4,
    left: 0,
    width: 300,
    height: 73,
  },
  panelLogowania: {
    position: "absolute",
    top: 351,
    left: 33,
    width: 280,
    height: 231,
  },
  ustawienia3: {
    position: "absolute",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 880,
    overflow: "hidden",
  },
});

export default Ustawienia3;
