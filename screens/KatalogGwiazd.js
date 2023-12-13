import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import TopNav_2 from "../components/TopNav_2";
import BottomNav from "../components/BottomNav";

const KatalogGwiazd = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.katalogGwiazd1}>
      <Text style={styles.katalogGwiazd}>Katalog gwiazd</Text>
      <Image
        style={styles.maskiDlaTa}
        contentFit="cover"
        source={require("../assets/maski-dla-ta1.png")}
      />
      <View style={styles.przyciskiWyboru}>
        <Pressable
          style={styles.planety1}
          onPress={() => navigation.navigate("KatalogPlanet")}
        >
          <Pressable
            style={styles.przyciskWyboruPlanety}
            onPress={() => navigation.navigate("KatalogPlanet")}
          />
          <Text style={styles.planety}>Planety</Text>
        </Pressable>
        <View style={styles.gwiazdy1}>
          <Text style={styles.gwiazdy}>Gwiazdy</Text>
        </View>
      </View>
      <View style={styles.kafelki}>
        <Pressable
          style={styles.fazaKsiyca}
          planet="delta"
          onPress={() => navigation.navigate("Wenus")}
        >
          <Text style={styles.gwiazdozbirAgla}>Gwiazdozbiór Żagla</Text>
          <Text style={styles.deltaVelorum}>Delta Velorum</Text>
          <Text style={styles.lyOdSoca}>81 ly od Słońca</Text>
          <Image
            style={styles.giphy1Icon}
            contentFit="cover"
            source={require("../assets/giphy-1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.fazaKsiyca1}
          planet="suhail"
          onPress={() => navigation.navigate("Wenus")}
        >
          <Text style={styles.gwiazdozbirAgla1}>Gwiazdozbiór Żagla</Text>
          <Text style={styles.suhail}>Suhail</Text>
          <Text style={styles.lyOdSoca1}>454 ly od Słońca</Text>
          <Image
            style={styles.giphy2Icon}
            contentFit="cover"
            source={require("../assets/giphy-2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.fazaKsiyca2}
          planet="syriusz"
          onPress={() => navigation.navigate("Wenus")}
        >
          <Text style={styles.gwiazdozbirPsa}>Gwiazdozbiór Psa</Text>
          <Text style={styles.syriusz}>Syriusz</Text>
          <Text style={styles.lyOdSoca2}>8,6 ly od Słońca</Text>
          <Image
            style={styles.giphy3Icon}
            contentFit="cover"
            source={require("../assets/giphy-3.png")}
          />
        </Pressable>
        <Pressable
          style={styles.fazaKsiyca3}
          planet="akrtur"
          onPress={() => navigation.navigate("Wenus")}
        >
          <Text style={styles.gwiazdozbirWolarza}>Gwiazdozbiór Wolarza</Text>
          <Text style={styles.akrtur}>Akrtur</Text>
          <Text style={styles.lyOdOd}>37 ly od od Słońca</Text>
          <Image
            style={styles.giphy4Icon}
            contentFit="cover"
            source={require("../assets/giphy-4.png")}
          />
        </Pressable>
      </View>
      <BottomNav />
      <TopNav_2 />
    </View>
  );
};

const styles = StyleSheet.create({
  katalogGwiazd: {
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
  maskiDlaTa: {
    position: "absolute",
    height: "67.68%",
    width: "194.69%",
    top: "15.37%",
    right: "-94.69%",
    bottom: "16.95%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.7,
  },
  przyciskWyboruPlanety: {
    position: "relative",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 2,
    width: 100,
    height: 29,
    zIndex: 0,
  },
  planety: {
    position: "absolute",
    height: "49.83%",
    width: "80%",
    top: "24.91%",
    left: "10%",
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: "#4f5f5f",
    textAlign: "center",
    zIndex: 1,
  },
  planety1: {
    width: 100,
    height: 29,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
  gwiazdy: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
    width: 80,
    height: 15,
  },
  gwiazdy1: {
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
    top: 190,
    left: 53,
    width: 254,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  gwiazdozbirAgla: {
    position: "absolute",
    top: "42.99%",
    left: "8%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  deltaVelorum: {
    position: "absolute",
    top: "16.82%",
    left: "8%",
    fontSize: FontSize.size_xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: "#2f88d9",
    textAlign: "left",
  },
  lyOdSoca: {
    position: "absolute",
    top: "61.68%",
    left: "8%",
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: "#2f65aa",
    textAlign: "left",
  },
  giphy1Icon: {
    position: "absolute",
    height: "79.44%",
    width: "27.67%",
    top: "0%",
    right: "4.67%",
    bottom: "20.56%",
    left: "67.67%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  fazaKsiyca: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 107,
  },
  gwiazdozbirAgla1: {
    position: "absolute",
    top: "42.99%",
    left: "8%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  suhail: {
    position: "absolute",
    top: "17.76%",
    left: "8%",
    fontSize: FontSize.size_xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: "#cd754e",
    textAlign: "left",
  },
  lyOdSoca1: {
    position: "absolute",
    top: "61.68%",
    left: "8%",
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: "#93492f",
    textAlign: "left",
  },
  giphy2Icon: {
    position: "absolute",
    height: "100.93%",
    width: "32.67%",
    top: "-0.93%",
    right: "0%",
    bottom: "0%",
    left: "67.33%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  fazaKsiyca1: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 107,
    marginTop: 22,
  },
  gwiazdozbirPsa: {
    position: "absolute",
    top: "42.99%",
    left: "8.33%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  syriusz: {
    position: "absolute",
    top: "16.82%",
    left: "8.67%",
    fontSize: FontSize.size_xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: "#4f70cd",
    textAlign: "left",
  },
  lyOdSoca2: {
    position: "absolute",
    top: "61.68%",
    left: "8.33%",
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: "#364584",
    textAlign: "left",
  },
  giphy3Icon: {
    position: "absolute",
    height: "100.93%",
    width: "32.67%",
    top: "-0.93%",
    right: "0.33%",
    bottom: "0%",
    left: "67%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  fazaKsiyca2: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 107,
    marginTop: 22,
  },
  gwiazdozbirWolarza: {
    position: "absolute",
    width: "47.17%",
    top: "42.99%",
    left: "8.3%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  akrtur: {
    position: "absolute",
    width: "23.93%",
    top: "16.82%",
    left: "8.63%",
    fontSize: FontSize.size_xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.colorLightgray,
    textAlign: "left",
  },
  lyOdOd: {
    position: "absolute",
    width: "45.5%",
    top: "61.68%",
    left: "8.3%",
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkgray_200,
    textAlign: "left",
  },
  giphy4Icon: {
    position: "absolute",
    height: "100.93%",
    width: "32.57%",
    top: "-0.93%",
    right: "-0.33%",
    bottom: "0%",
    left: "67.77%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  fazaKsiyca3: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 107,
    marginTop: 22,
  },
  kafelki: {
    position: "absolute",
    marginLeft: -150.5,
    top: 250,
    left: "50%",
    width: 300,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingBottom: Padding.p_101xl,
  },
  maskaZCieniem: {
    position: "absolute",
    marginLeft: -205,
    top: 97,
    left: "50%",
    width: 414,
    height: 312,
    backgroundColor: "transparent",
  },
  maskaZCieniem1: {
    position: "absolute",
    marginLeft: -205,
    top: 97,
    left: "50%",
    width: 414,
    height: 312,
    backgroundColor: "transparent",
  },
  maskaZCieniem2: {
    position: "absolute",
    marginLeft: -205,
    top: 97,
    left: "50%",
    width: 414,
    height: 312,
    backgroundColor: "transparent",
  },
  maskaZCieniem3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 414,
    height: 312,
    backgroundColor: "transparent",
  },
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
  dolnyPasekNawigacyjny: {
    position: "absolute",
    height: "11.49%",
    width: "78.33%",
    top: "56.72%",
    right: "11.39%",
    bottom: "31.78%",
    left: "10.29%",
  },
  dolnyPasekNawigacyjny1: {
    position: "absolute",
    top: 468,
    left: -32,
    width: 418,
    height: 409,
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
  icon3: {
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
  icon4: {
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
  icon5: {
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
  katalogGwiazd1: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
  },
});

export default KatalogGwiazd;
