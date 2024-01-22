import * as React from "react";
import { Text, StyleSheet, View, Pressable,SafeAreaView,ScrollView,StatusBar, } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import BottomNav from "../components/BottomNav";
import TopNav_2 from "../components/TopNav_2";

const KatalogPlanet = () => {
  const navigation = useNavigation();

  return (
    <>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.katalogPlanet1}>
      <Text style={styles.katalogPlanet}>Katalog planet</Text>
      <Image
        style={styles.maskiDlaTa}
        contentFit="cover"
        source={require("../assets/maski-dla-ta.png")}
      />
      <View style={styles.przyciskiWyboru}>
        <View style={styles.planety1}>
          <Text style={styles.planety}>Planety</Text>
        </View>
        <Pressable
          style={styles.gwiazdy1}
          onPress={() => navigation.navigate("KatalogGwiazd")}
        >
          <Pressable
            style={styles.przyciskWyboruGwiazdy}
            onPress={() => navigation.navigate("KatalogGwiazd")}
          />
          <Text style={styles.gwiazdy}>Gwiazdy</Text>
        </Pressable>
      </View>
      <View style={styles.kafelki}>
      <Pressable
          style={styles.fazaKsiyca}
          planet="merkury"
          onPress={() => navigation.navigate("Wenus", { planet: "Merkury" })}
        >
          <Image
            style={styles.giphy3Icon}
            contentFit="cover"
            source={require("../assets/giphy-31.png")}
          />
          <Text style={styles.ukadSoneczny3}>Układ słoneczny</Text>
          <Text style={styles.merkury}>Merkury</Text>
          <Text style={styles.mlnKmOd3}>58 mln km od Słońca</Text>
        </Pressable>
        <Pressable
          style={styles.fazaKsiyca3}
          planet="Wenus"
          onPress={() => navigation.navigate("Wenus", { planet: "Wenus" })}
        >
          <Text style={styles.ukadSoneczny}>Układ słoneczny</Text>
          <Text style={styles.wenus}>Wenus</Text>
          <Text style={styles.mlnKmOd}>108 mln km od Słońca</Text>
          <Image
            style={styles.giphy1Icon}
            contentFit="cover"
            source={require("../assets/giphy-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.fazaKsiyca2}
          planet="ziemia"
          onPress={() => navigation.navigate("Wenus", { planet: "Ziemia" })}
        >
          <Image
            style={styles.giphy4Icon}
            contentFit="cover"
            source={require("../assets/giphy-41.png")}
          />
          <Text style={styles.ukadSoneczny2}>Układ słoneczny</Text>
          <Text style={styles.ziemia}>Ziemia</Text>
          <Text style={styles.mlnKmOd2}>150 mln km od Słońca</Text>
        </Pressable>
                <Pressable
          style={styles.fazaKsiyca1}
          planet="Mars"
          onPress={() => navigation.navigate("Wenus", { planet: "Mars" })}
        >
          <Image
            style={styles.giphy2Icon}
            contentFit="cover"
            source={require("../assets/giphy-21.png")}
          />
          <Text style={styles.ukadSoneczny1}>Układ słoneczny</Text>
          <Text style={styles.mars}>Mars</Text>
          <Text style={styles.mlnKmOd1}>170 mln km od Słońca</Text>
        </Pressable>
        <Pressable
          style={styles.fazaKsiyca3}
          planet="jowisz"
          onPress={() => navigation.navigate("Wenus", { planet: "Jowisz" })}
        >
          <Image
            style={styles.giphy3Icon}
            contentFit="cover"
            source={require("../assets/giphy-31.png")}
          />
          <Text style={styles.ukadSoneczny3}>Układ słoneczny</Text>
          <Text style={styles.merkury}>Jowisz</Text>
          <Text style={styles.mlnKmOd3}>778 mln km od Słońca</Text>
        </Pressable>
        <Pressable
          style={styles.fazaKsiyca3}
          planet="saturn"
          onPress={() => navigation.navigate("Wenus", { planet: "Saturn" })}
        >
          <Image
            style={styles.giphy3Icon}
            contentFit="cover"
            source={require("../assets/giphy-31.png")}
          />
          <Text style={styles.ukadSoneczny3}>Układ słoneczny</Text>
          <Text style={styles.merkury}>Saturn</Text>
          <Text style={styles.mlnKmOd3}>1,4 mld km od Słońca</Text>
        </Pressable>
        <Pressable
          style={styles.fazaKsiyca3}
          planet="uran"
          onPress={() => navigation.navigate("Wenus", { planet: "Uran" })}
        >
          <Image
            style={styles.giphy3Icon}
            contentFit="cover"
            source={require("../assets/giphy-31.png")}
          />
          <Text style={styles.ukadSoneczny3}>Układ słoneczny</Text>
          <Text style={styles.merkury}>Uran</Text>
          <Text style={styles.mlnKmOd3}>2,9 mld km od Słońca</Text>
        </Pressable>
        <Pressable
          style={styles.fazaKsiyca3}
          planet="neptun"
          onPress={() => navigation.navigate("Wenus", { planet: "Neptun" })}
        >
          <Image
            style={styles.giphy3Icon}
            contentFit="cover"
            source={require("../assets/giphy-31.png")}
          />
          <Text style={styles.ukadSoneczny3}>Układ słoneczny</Text>
          <Text style={styles.merkury}>Neptun</Text>
          <Text style={styles.mlnKmOd3}>4,5 mld km od Słońca</Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    <BottomNav />
    <TopNav_2 />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  katalogPlanet: {
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
  planety: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
    width: 80,
    height: 15,
  },
  planety1: {
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
  przyciskWyboruGwiazdy: {
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
  gwiazdy: {
    position: "absolute",
    top: 7,
    left: 10,
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.colorDimgray_100,
    textAlign: "center",
    width: 80,
    height: 15,
    zIndex: 1,
  },
  gwiazdy1: {
    width: 100,
    height: 29,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
  przyciskiWyboru: {
    position: "absolute",
    top: 190,
    left: 80,
    width: 254,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ukadSoneczny: {
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
  wenus: {
    position: "absolute",
    top: "16.82%",
    left: "8%",
    fontSize: FontSize.size_xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "left",
  },
  mlnKmOd: {
    position: "absolute",
    top: "61.68%",
    left: "8%",
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: "#b69153",
    textAlign: "left",
  },
  giphy1Icon: {
    position: "absolute",
    height: "99.07%",
    width: "32%",
    top: "0.93%",
    right: "0%",
    bottom: "0%",
    left: "68%",
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
  giphy2Icon: {
    position: "absolute",
    height: "100%",
    width: "31%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "69%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ukadSoneczny1: {
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
  mars: {
    position: "absolute",
    top: "16.82%",
    left: "8%",
    fontSize: FontSize.size_xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: "#d16755",
    textAlign: "left",
  },
  mlnKmOd1: {
    position: "absolute",
    top: "61.68%",
    left: "8%",
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: "#8b5954",
    textAlign: "left",
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
  giphy4Icon: {
    position: "absolute",
    height: "100%",
    width: "29.67%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "70.33%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ukadSoneczny2: {
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
  ziemia: {
    position: "absolute",
    top: "16.82%",
    left: "8.33%",
    fontSize: FontSize.size_xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: "#67b7ca",
    textAlign: "left",
  },
  mlnKmOd2: {
    position: "absolute",
    top: "61.68%",
    left: "8.33%",
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: "#548dae",
    textAlign: "left",
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
  giphy3Icon: {
    position: "absolute",
    height: "100%",
    width: "30%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "70%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ukadSoneczny3: {
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
  merkury: {
    position: "absolute",
    top: "16.82%",
    left: "8.33%",
    fontSize: FontSize.size_xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.colorLightgray,
    textAlign: "left",
  },
  mlnKmOd3: {
    position: "absolute",
    top: "61.68%",
    left: "8.33%",
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkgray_200,
    textAlign: "left",
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
    marginLeft: -151,
    top: 250,
    left: "50%",
    width: 300,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: Padding.p_101xl,
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
  katalogPlanet1: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 1500,
  },
});

export default KatalogPlanet;
