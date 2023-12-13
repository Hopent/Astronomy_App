import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";


const TopNav_2 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.grnyPasekNawigacyjny}>
            <Text style={styles.menu}>Menu</Text>
            <Pressable
            style={styles.ikonaPowiadomie}
            onPress={() => navigation.navigate("Powiadomienia")}
            >
            <Image
                style={styles.icon3}
                contentFit="cover"
                source={require("../assets/ikona-powiadomie.png")}
            />
            </Pressable>
            <Pressable
            style={styles.ikonaMenu}
            onPress={() => navigation.navigate("Menu")}
            >
            <Image
                style={styles.icon4}
                contentFit="cover"
                source={require("../assets/ikona-menu.png")}
            />
            </Pressable>
            <Pressable
            style={styles.ikonaWyszukiwarki}
            onPress={() => navigation.navigate("Quiz1")}
            >
            <Image
                style={styles.icon5}
                contentFit="cover"
                source={require("../assets/ikona-wyszukiwarki.png")}
            />
            </Pressable>
        </View>
      );
};

const styles = StyleSheet.create({
    grnyPasekNawigacyjny: {
        position: "absolute",
        top: 61,
        left: 26,
        width: 299,
        height: 26,
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
    ikonaPowiadomie: {
        position: "absolute",
        top: "3.85%",
        right: "-25%",
        bottom: "3.85%",
        width: "8.03%",
        height: "92.31%",
    },
    icon3: {
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
    icon4: {
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    ikonaWyszukiwarki: {
        position: "absolute",
        top: "7.69%",
        right: "-10.38%",
        bottom: "0%",
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
});
export default TopNav_2;