import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const EkranPowitalny = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ekranPowitalny}>
      <View style={styles.frame1}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Image
          style={styles.frameIcon1}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <View style={styles.frame}>
        </View>
      </View>
      <View style={styles.frame3}>
        <View style={styles.frame2}>
          <View style={styles.napisy}>
            <Text style={styles.galacticAtlas}>Galactic Atlas</Text>
            <Text style={styles.odkryjZNami}>Odkryj z nami kosmos.</Text>
          </View>
        </View>
        <Pressable
          style={styles.przycisk}
          onPress={() => navigation.navigate("Logowanie")}
        >
          <View style={styles.rectangle} />
          <Text style={styles.zalogujSi}>Zaloguj się</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "absolute",
    top: 0,
    left: 225,
    width: 304,
    height: 370,
    overflow: "hidden",
  },
  frameIcon1: {
    position: "absolute",
    top: 38,
    left: 171,
    width: 702,
    height: 525,
    overflow: "hidden",
  },
  frame: {
    position: "absolute",
    top: 386,
    left: 139,
    width: 424,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  frame1: {
    position: "absolute",
    top: 82,
    left: -171,
    width: 702,
    height: 698,
    overflow: "hidden",
  },
  galacticAtlas: {
    position: "relative",
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    color: Color.text,
    textAlign: "center",
    width: 389,
    height: 73,
  },
  odkryjZNami: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    color: Color.secondary,
    textAlign: "center",
    width: 389,
    height: 37,
    marginTop: -22,
  },
  napisy: {
    width: 389,
    height: 88,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame2: {
    width: 390,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
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
  zalogujSi: {
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
    position: "relative",
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
    marginTop: 60,
  },
  frame3: {
    position: "absolute",
    top: 512,
    left: 15,
    width: 390,
    height: 202,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ekranPowitalny: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden",
  },
});

export default EkranPowitalny;
