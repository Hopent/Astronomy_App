import * as React from "react";
import { useState } from "react";
import { Image } from "react-native";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Logowanie = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (login == password) {
      navigation.navigate("Home");
    } else {
      alert("Zły login lub hasło.");
    }
  };
  return (
    <View style={styles.logowanie}>
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
      <View style={styles.frame2}>
        <View style={styles.przyciskiWyboru}>
          <View style={styles.zalogujSi1}>
            <Text style={styles.zalogujSi}>Zaloguj się</Text>
          </View>
          <Pressable
            style={styles.rejestracja1}
            onPress={() => navigation.navigate("Rejestracja")}
          >
            <Text style={styles.rejestracja}>Rejestracja</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.przycisk}
          onPress={handleLogin}

        >
          <View style={styles.rectangle} />
          <Text style={styles.zalogujSi2}>Zaloguj się</Text>
        </Pressable>
        <Text style={styles.zalogujSi3}>Zaloguj się</Text>
        <View style={styles.panelLogowania}>
          <View style={styles.loginParent}>
            <Text style={styles.haso}>Login</Text>
            <View style={styles.frame}>
              <TextInput
              placeholder="Wprowadz login"
              className="rectangle1"
              onChangeText={(text) => setLogin(text)}
              style={styles.rectangle1} />
            </View>
          </View>
          <View style={styles.hasoParent}>
            <Text style={styles.login}>Hasło</Text>
            <View style={styles.frame}>
              <TextInput
              secureTextEntry={true}
              placeholder="Wprowadz haslo"
              onChangeText={(text) => setPassword(text)}
              style={styles.rectangle1} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  zamknij: {
    left: "8.61%",
    top: "7.69%",
    right: "84.72%",
    bottom: "89.23%",
    width: "6.67%",
    height: "3.08%",
  },
  zalogujSi: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
    width: 80,
    height: 15,
  },
  zalogujSi1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 2,
    width: 100,
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
    color: Color.colorDimgray_100,
    textAlign: "center",
    width: 80,
    height: 15,
  },
  rejestracja1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 2,
    width: 100,
    height: 29,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: 0,
  },
  przyciskiWyboru: {
    position: "absolute",
    top: 112,
    left: 223,
    width: 254,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    left: "23.89%",
    fontSize: FontSize.size_base,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  przycisk: {
    position: "absolute",
    height: "8.17%",
    marginLeft: -90.45,
    top: "65.36%",
    bottom: "26.48%",
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
  },
  zalogujSi3: {
    position: "absolute",
    marginTop: -330.5,
    marginLeft: -195.45,
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
  rectangle1: {
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
  loginParent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 300,
    height: 73,
  },
  panelLogowania: {
    position: "absolute",
    top: 181,
    left: 200,
    width: 300,
    height: 201,
  },
  frame2: {
    position: "absolute",
    top: 119,
    left: -170,
    width: 701,
    height: 661,
    overflow: "hidden",
  },
  logowanie: {
    position: "absolute",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 880,
    overflow: "hidden",
  },
});

export default Logowanie;
