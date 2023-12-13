import * as React from "react";
import { Pressable, StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Ustawienia2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ustawienia2}>
      <Text style={styles.edytujProfil}>Edytuj profil</Text>
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
        style={styles.ustawienia2Child}
        contentFit="cover"
        source={require("../assets/ellipse-213.png")}
      />
      <Text style={styles.danka12}>@danka12</Text>
      <Text style={styles.danuta}>Danuta</Text>
      <Image
        style={styles.backgroundIcon}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <Image
        style={styles.cameraPlusOutlineIcon}
        contentFit="cover"
        source={require("../assets/cameraplusoutline.png")}
      />
      <Pressable
        style={styles.przyciskiWyboru}
        onPress={() => navigation.navigate("Ustawienia")}
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
        <Image
          style={styles.signOutSqureFillIcon1}
          contentFit="cover"
          source={require("../assets/sign-out-squre-fill2.png")}
        />
      </Pressable>
      <View style={styles.panelLogowania}>
        <View style={styles.hasoParent}>
          <Text style={styles.haso}>Hasło</Text>
          <View style={styles.frame}>
            <TextInput style={styles.rectangle} />
          </View>
        </View>
        <View style={styles.nowaNazwaUytkownikaParent}>
          <Text style={styles.nowaNazwaUytkownika}>Nowa nazwa użytkownika</Text>
          <View style={styles.frame1}>
            <TextInput style={styles.rectangle1} />
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
  edytujProfil: {
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
  ustawienia2Child: {
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
    height: 11,
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
    height: 17,
  },
  backgroundIcon: {
    position: "absolute",
    height: "4.62%",
    width: "10%",
    top: "32.18%",
    right: "40%",
    bottom: "63.21%",
    left: "50%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cameraPlusOutlineIcon: {
    position: "absolute",
    height: "2.83%",
    width: "6.14%",
    top: "33.08%",
    right: "41.92%",
    bottom: "64.09%",
    left: "51.94%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  signOutSqureFillIcon1: {
    position: "relative",
    width: 22,
    height: 17,
    marginLeft: -109,
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
  hasoParent: {
    position: "absolute",
    top: 99,
    left: 0,
    width: 300,
    height: 73,
  },
  nowaNazwaUytkownika: {
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
  nowaNazwaUytkownikaParent: {
    position: "absolute",
    top: 0,
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
  ustawienia2: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden",
  },
});

export default Ustawienia2;
