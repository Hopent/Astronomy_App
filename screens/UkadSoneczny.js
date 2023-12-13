import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import BottomNav from "../components/BottomNav";
import TopNav_2 from "../components/TopNav_2";

const UkadSoneczny = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ukadSoneczny1}>
      <Text
        style={styles.nacinijNaPlanet}
      >{`Naciśnij na planetę, aby poznać więcej szczegółów.

Przeciągnij dwoma palcami, aby przybliżyć.`}</Text>
      <Text style={styles.ukadSoneczny}>Układ słoneczny</Text>
      <Text
        style={styles.nacinijNaPlanet1}
      >{`Naciśnij na planetę, aby poznać więcej szczegółów.

Przeciągnij dwoma palcami, aby przybliżyć.`}</Text>
     <TopNav_2 />
     <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  nacinijNaPlanet: {
    position: "absolute",
    marginLeft: -160,
    top: 611,
    left: "50%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "center",
  },
  ukadSoneczny: {
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
  nacinijNaPlanet1: {
    position: "absolute",
    marginLeft: -160,
    top: 611,
    left: "50%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "center",
  },
  ukadSoneczny1: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden",
  },
});

export default UkadSoneczny;
