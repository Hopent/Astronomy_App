import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import BottomNav from "../components/BottomNav";
import TopNav_2 from "../components/TopNav_2";

const Galeria = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.galeria3}>
      <Text style={styles.galeria1}>Galeria</Text>
      <View style={styles.galeria2}>
        <View style={styles.zdjcie}>
          <Image
            style={styles.gwneIcon}
            contentFit="cover"
            source={require("../assets/gwne.png")}
          />
          <View style={styles.przyciskiWyboru}>
            <Pressable style={styles.gwiazdy} onPress={() => {}}>
              <Image
                style={styles.icon3}
                contentFit="cover"
                source={require("../assets/gwiazdy.png")}
              />
            </Pressable>
            <Image
              style={styles.planetyIcon}
              contentFit="cover"
              source={require("../assets/planety.png")}
            />
          </View>
        </View>
        <View style={styles.newsy}>
          <View style={styles.kafelek} />
          <Text style={styles.naZdjciuMoemy}>
            Na zdjęciu możemy podziwiać spiralną galaktykę znaną jako NGC 1232.
            Znajduje się w gwiazdozbiorze Erydanu, około 65 milionów lat
            świetlnych od naszej Ziemi. Jej wirujące ramiona składają się z
            setek miliardów gwiazd, a w centrum widoczne jest jasne jądro, gdzie
            gromadzą się gęste skupiska gwiazd.
          </Text>
          <Text style={styles.oZdjciu}>O zdjęciu</Text>
          <Text style={styles.fotNasacom}>Fot: NASA.com</Text>
          <Text style={styles.lis2023}>08 lis 2023</Text>
        </View>
      </View>
      <TopNav_2 />
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  galeria1: {
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
  gwneIcon: {
    position: "absolute",
    height: "104%",
    width: "102.67%",
    top: "0%",
    right: "-1.33%",
    bottom: "-4%",
    left: "-1.33%",
    borderRadius: Border.br_3xs,
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
  gwiazdy: {
    position: "absolute",
    left: "85.13%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    width: "14.87%",
    height: "100%",
  },
  planetyIcon: {
    position: "absolute",
    height: "100%",
    width: "14.87%",
    top: "0%",
    right: "85.13%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  przyciskiWyboru: {
    position: "absolute",
    height: "20%",
    width: "89.67%",
    top: "39%",
    right: "5.33%",
    bottom: "41%",
    left: "5%",
  },
  zdjcie: {
    position: "absolute",
    height: "47.28%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "52.72%",
    left: "0%",
  },
  kafelek: {
    position: "absolute",
    height: "97.62%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "2.38%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  naZdjciuMoemy: {
    position: "absolute",
    marginLeft: -121,
    top: 86,
    left: "50%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    width: 244,
    height: 158,
  },
  oZdjciu: {
    position: "absolute",
    height: "8.61%",
    marginLeft: -101,
    top: "19.69%",
    left: "50%",
    fontSize: FontSize.size_base,
    letterSpacing: 0.4,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "center",
    width: 203,
  },
  fotNasacom: {
    position: "absolute",
    height: "6.56%",
    width: "31.67%",
    top: "6.56%",
    left: "59.67%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  lis2023: {
    position: "absolute",
    height: "6.48%",
    width: "22.33%",
    top: "6.48%",
    left: "9%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  newsy: {
    position: "absolute",
    height: "57.64%",
    width: "100%",
    top: "53.66%",
    right: "0%",
    bottom: "-11.3%",
    left: "0%",
  },
  galeria2: {
    position: "absolute",
    height: "54.23%",
    marginLeft: -150,
    top: "25.64%",
    bottom: "20.13%",
    left: "50%",
    width: 300,
  },
  menu: {
    position: "absolute",
    top: "7.69%",
    left: "9.7%",
    fontSize: FontSize.size_base,
    letterSpacing: 0.4,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "center",
  },
  icon4: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonaPowiadomie: {
    position: "absolute",
    left: "91.97%",
    top: "3.85%",
    right: "0%",
    bottom: "3.85%",
    width: "8.03%",
    height: "92.31%",
  },
  icon5: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonaMenu: {
    position: "absolute",
    left: "0%",
    top: "0%",
    right: "91.97%",
    bottom: "7.69%",
    width: "8.03%",
    height: "92.31%",
  },
  icon6: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ikonaWyszukiwarki: {
    position: "absolute",
    left: "76.59%",
    top: "7.69%",
    right: "15.38%",
    bottom: "0%",
    width: "8.03%",
    height: "92.31%",
  },
  grnyPasekNawigacyjny: {
    position: "absolute",
    top: 61,
    left: 26,
    width: 299,
    height: 26,
  },
  galeria3: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden",
  },
});

export default Galeria;
