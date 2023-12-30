import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const EkranPowitalny = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ekranPowitalny}>
      <View style={styles.frame1}>
        <Image
          style={styles.frameIcon}
          resizeMode="contain"
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
          <View style={styles.rectangle}>
            <Text style={styles.zalogujSi}>Zaloguj się</Text>
          </View>
        </Pressable>
        
      </View>
      <View style={styles.frame4}>
        <Image
          style={styles.frameIcon2}
          contentFit="cover"
          source={require("../assets/Maska_z_cieniem.png")}
        />
        <View style={styles.frame}>
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  frameIcon: {
    width: width, 
    height: height * 0.5,  
    alignSelf: "center", 
    zIndex: 2, 
    overflow: "visible", 
    marginTop: height * 0.1,
  },

  frameIcon1: {
    position: 'absolute',
    top: "0%",
    width: width,
    height: height,
    alignItems: "center",
    zIndex: 1,
  },

  frameIcon2: {
    position: 'absolute',
    bottom: "0%",
    width: width,
    height: height,
    alignItems: "center",
  },

  frame: {
    width: width,
    height: height * 0.5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  frame1: {
    width: width,
    height: height * 0.6,
    //overflow: "hidden",
  },

  frame4: {
    width: width,
    height: height * 0.6,
    //overflow: "hidden",
  },

  galacticAtlas: {
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    color: Color.text,
    textAlign: "center",
    width: width,
    marginTop: "10%",
  },

  odkryjZNami: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    color: Color.secondary,
    textAlign: "center",
    width: width,
    marginTop: 5,
  },

  napisy: {
    width: width,
    marginTop: "8%",
    alignItems: "center",
    justifyContent: "center",
  },

  frame2: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },

  rectangle: {
    height: "100%",
    width: "100%",
    borderRadius: Border.br_base,
    backgroundColor: Color.secondary,
    shadowColor: "rgba(255, 203, 116, 0.2)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    padding: 16,
    alignItems: 'center', 
    justifyContent: 'center', 
    zIndex: 1,
  },

  zalogujSi: {
    fontSize: FontSize.size_base,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorGray_100,
    textAlign: "center",
    zIndex: 1,
  },

  przycisk: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: width * 0.5,
    height: 54,
    marginTop: "15%",
    zIndex: 1,
  },

  frame3: {
    width: width,
    height: height * 0.3,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 1,
  },

  ekranPowitalny: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: width,
    overflow: "hidden",
    zIndex: 0,
  },
});

export default EkranPowitalny;
