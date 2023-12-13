import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Galeria1 = () => {
  return (
    <View style={styles.galeria}>
      <View style={styles.property1variant2}>
        <Image
          style={styles.zdjcieIcon}
          contentFit="cover"
          source={require("../assets/zdjcie1.png")}
        />
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
      <View style={styles.property1variant3}>
        <Image
          style={styles.zdjcieIcon1}
          contentFit="cover"
          source={require("../assets/zdjcie2.png")}
        />
        <View style={styles.newsy1}>
          <View style={styles.kafelek1} />
          <Text style={styles.naZdjciuMoemy1}>
            Na zdjęciu możemy podziwiać spiralną galaktykę znaną jako NGC 1232.
            Znajduje się w gwiazdozbiorze Erydanu, około 65 milionów lat
            świetlnych od naszej Ziemi. Jej wirujące ramiona składają się z
            setek miliardów gwiazd, a w centrum widoczne jest jasne jądro, gdzie
            gromadzą się gęste skupiska gwiazd.
          </Text>
          <Text style={styles.oZdjciu1}>O zdjęciu</Text>
          <Text style={styles.fotNasacom1}>Fot: NASA.com</Text>
          <Text style={styles.lis20231}>08 lis 2023</Text>
        </View>
      </View>
      <View style={styles.property1variant4}>
        <Image
          style={styles.zdjcieIcon2}
          contentFit="cover"
          source={require("../assets/zdjcie3.png")}
        />
        <View style={styles.newsy2}>
          <View style={styles.kafelek2} />
          <Text style={styles.naZdjciuMoemy2}>
            Na zdjęciu możemy podziwiać spiralną galaktykę znaną jako NGC 1232.
            Znajduje się w gwiazdozbiorze Erydanu, około 65 milionów lat
            świetlnych od naszej Ziemi. Jej wirujące ramiona składają się z
            setek miliardów gwiazd, a w centrum widoczne jest jasne jądro, gdzie
            gromadzą się gęste skupiska gwiazd.
          </Text>
          <Text style={styles.oZdjciu2}>O zdjęciu</Text>
          <Text style={styles.fotNasacom2}>Fot: NASA.com</Text>
          <Text style={styles.lis20232}>08 lis 2023</Text>
        </View>
      </View>
      <View style={styles.property1default}>
        <Image
          style={styles.zdjcieIcon3}
          contentFit="cover"
          source={require("../assets/zdjcie4.png")}
        />
        <View style={styles.newsy3}>
          <View style={styles.kafelek3} />
          <Text style={styles.naZdjciuMoemy3}>
            Na zdjęciu możemy podziwiać spiralną galaktykę znaną jako NGC 1232.
            Znajduje się w gwiazdozbiorze Erydanu, około 65 milionów lat
            świetlnych od naszej Ziemi. Jej wirujące ramiona składają się z
            setek miliardów gwiazd, a w centrum widoczne jest jasne jądro, gdzie
            gromadzą się gęste skupiska gwiazd.
          </Text>
          <Text style={styles.oZdjciu3}>O zdjęciu</Text>
          <Text style={styles.fotNasacom3}>Fot: NASA.com</Text>
          <Text style={styles.lis20233}>08 lis 2023</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  zdjcieIcon: {
    position: "absolute",
    height: "49.17%",
    width: "102.67%",
    top: "0%",
    right: "-1.33%",
    bottom: "50.83%",
    left: "-1.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    height: "64.73%",
    width: "81.33%",
    top: "35.27%",
    left: "9.67%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  oZdjciu: {
    position: "absolute",
    height: "8.61%",
    width: "67.67%",
    top: "19.69%",
    left: "16.33%",
    fontSize: FontSize.size_base,
    letterSpacing: 0.4,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "center",
  },
  fotNasacom: {
    position: "absolute",
    height: "6.56%",
    width: "31.67%",
    top: "6.48%",
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
  property1variant2: {
    position: "absolute",
    marginLeft: -149,
    top: 512,
    left: "50%",
    width: 300,
    height: 423,
  },
  zdjcieIcon1: {
    position: "absolute",
    height: "49.17%",
    width: "102.67%",
    top: "0%",
    right: "-1.33%",
    bottom: "50.83%",
    left: "-1.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  kafelek1: {
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
  naZdjciuMoemy1: {
    position: "absolute",
    height: "64.73%",
    width: "81.33%",
    top: "35.27%",
    left: "9.67%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  oZdjciu1: {
    position: "absolute",
    height: "8.61%",
    width: "67.67%",
    top: "19.69%",
    left: "16.33%",
    fontSize: FontSize.size_base,
    letterSpacing: 0.4,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "center",
  },
  fotNasacom1: {
    position: "absolute",
    height: "6.56%",
    width: "31.67%",
    top: "6.48%",
    left: "59.67%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  lis20231: {
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
  newsy1: {
    position: "absolute",
    height: "57.64%",
    width: "100%",
    top: "53.66%",
    right: "0%",
    bottom: "-11.3%",
    left: "0%",
  },
  property1variant3: {
    position: "absolute",
    marginLeft: -148,
    top: 997,
    left: "50%",
    width: 300,
    height: 423,
  },
  zdjcieIcon2: {
    position: "absolute",
    height: "49.17%",
    width: "102.67%",
    top: "0%",
    right: "-1.33%",
    bottom: "50.83%",
    left: "-1.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  kafelek2: {
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
  naZdjciuMoemy2: {
    position: "absolute",
    height: "64.73%",
    width: "81.33%",
    top: "35.27%",
    left: "9.67%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  oZdjciu2: {
    position: "absolute",
    height: "8.61%",
    width: "67.67%",
    top: "19.69%",
    left: "16.33%",
    fontSize: FontSize.size_base,
    letterSpacing: 0.4,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "center",
  },
  fotNasacom2: {
    position: "absolute",
    height: "6.56%",
    width: "31.67%",
    top: "6.48%",
    left: "59.67%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  lis20232: {
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
  newsy2: {
    position: "absolute",
    height: "57.64%",
    width: "100%",
    top: "53.66%",
    right: "0%",
    bottom: "-11.3%",
    left: "0%",
  },
  property1variant4: {
    position: "absolute",
    marginLeft: -148,
    top: 1482,
    left: "50%",
    width: 300,
    height: 423,
  },
  zdjcieIcon3: {
    position: "absolute",
    height: "49.17%",
    width: "102.67%",
    top: "0%",
    right: "-1.33%",
    bottom: "50.83%",
    left: "-1.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  kafelek3: {
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
  naZdjciuMoemy3: {
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
  oZdjciu3: {
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
  fotNasacom3: {
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
  lis20233: {
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
  newsy3: {
    position: "absolute",
    height: "57.64%",
    width: "100%",
    top: "53.66%",
    right: "0%",
    bottom: "-11.3%",
    left: "0%",
  },
  property1default: {
    position: "absolute",
    marginLeft: -150,
    top: 20,
    left: "50%",
    width: 300,
    height: 423,
  },
  galeria: {
    position: "relative",
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 340,
    height: 1989,
    overflow: "hidden",
  },
});

export default Galeria1;
