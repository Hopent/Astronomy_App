import * as React from "react";
import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Rejestracja = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rejestracja3}>
      <Text style={styles.politykPrywatnoci}>Polityką prywatności</Text>
      <Text
        style={styles.klikajcWPoniszy}
      >{`Klikając w poniższy przycisk zgadzasz się z naszą `}</Text>
      <View style={styles.przyciskiWyboru}>
        <Pressable
          style={styles.zalogujSi1}
          onPress={() => navigation.navigate("Logowanie")}
        >
          <Text style={styles.zalogujSi}>Zaloguj się</Text>
        </Pressable>
        <View style={styles.rejestracja1}>
          <Text style={styles.rejestracja}>Rejestracja</Text>
        </View>
      </View>
      <Text style={styles.rejestracja2}>Rejestracja</Text>
      <Pressable
        style={styles.przycisk}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.rectangle} />
        <Text style={styles.zalogujSi2}>Zarejestruj się</Text>
      </Pressable>
      <View style={styles.panelLogowania}>
        <View style={styles.loginParent}>
          <Text style={styles.login}>Login</Text>
          <TextInput style={styles.rectangle1} />
        </View>
        <View style={styles.hasoParent}>
          <Text style={styles.haso}>Hasło</Text>
          <TextInput style={styles.rectangle2} />
        </View>
        <View style={styles.potwierdHasoParent}>
          <Text style={styles.potwierdHaso}>Potwierdź hasło</Text>
          <TextInput style={styles.rectangle3} />
        </View>
      </View>
      <Pressable
        style={styles.zamknij}
        onPress={() => navigation.navigate("EkranPowitalny")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/zamknij.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  politykPrywatnoci: {
    position: "absolute",
    marginLeft: -66,
    top: "78.59%",
    left: "50%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.secondary,
    textAlign: "left",
  },
  klikajcWPoniszy: {
    position: "absolute",
    top: "76.67%",
    left: 27,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  zalogujSi: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.colorDimgray_100,
    textAlign: "center",
    width: 80,
    height: 15,
  },
  zalogujSi1: {
    flex: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 2,
    height: 29,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rejestracja: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
    width: 80,
    height: 15,
  },
  rejestracja1: {
    flex: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 2,
    height: 29,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: 0,
    marginLeft: 54,
  },
  przyciskiWyboru: {
    position: "absolute",
    top: 231,
    left: 53,
    width: 254,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rejestracja2: {
    position: "absolute",
    marginTop: -271,
    marginLeft: -195,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    color: Color.text,
    textAlign: "center",
    width: 389,
    height: 73,
  },
  dolnyPasekNawigacyjny: {
    position: "absolute",
    top: 468,
    left: -32,
    width: 414,
    height: 312,
    backgroundColor: "transparent",
  },
  rectangle: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_base,
    backgroundColor: Color.secondary,
    shadowColor: "rgba(255, 203, 116, 0.2)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
  },
  zalogujSi2: {
    position: "absolute",
    top: "29.63%",
    left: "16.11%",
    fontSize: FontSize.size_base,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  przycisk: {
    position: "absolute",
    marginLeft: -90,
    top: 650,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 180,
    height: 54,
  },
  login: {
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
    position: "absolute",
    height: "73.97%",
    top: "26.03%",
    bottom: "0%",
    left: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    width: 300,
  },
  loginParent: {
    alignSelf: "stretch",
    position: "relative",
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
    position: "absolute",
    height: "73.97%",
    top: "26.03%",
    bottom: "0%",
    left: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    width: 300,
  },
  hasoParent: {
    alignSelf: "stretch",
    position: "relative",
    height: 73,
    marginTop: 26,
  },
  potwierdHaso: {
    position: "absolute",
    top: 0,
    left: 24,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  rectangle3: {
    position: "absolute",
    height: "73.97%",
    top: "26.03%",
    bottom: "0%",
    left: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    width: 300,
  },
  potwierdHasoParent: {
    alignSelf: "stretch",
    position: "relative",
    height: 73,
    marginTop: 26,
  },
  panelLogowania: {
    position: "absolute",
    top: 300,
    left: 30,
    width: 300,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  zamknij: {
    position: "absolute",
    left: 31,
    top: 60,
    width: 24,
    height: 24,
  },
  rejestracja3: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden",
  },
});

export default Rejestracja;
