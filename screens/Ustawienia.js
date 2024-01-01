import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  Switch,
  Linking,
  Dimensions
} from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const { width, height } = Dimensions.get("window");

const Ustawienia = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const navigation = useNavigation();

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.closeButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/zamknij.png")}
        />
      </Pressable>
      <Text style={styles.title}>Ustawienia</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ustawienia konta</Text>
        <Pressable
          style={styles.option}
          onPress={() => navigation.navigate("Ustawienia2")}
        >
          <Text style={styles.optionText}>Edytuj profil</Text>
          <Image
            style={styles.arrowIcon}
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Pressable
          style={styles.option}
          onPress={() => navigation.navigate("Ustawienia3")}
        >
          <Text style={styles.optionText}>Zmień hasło</Text>
          <Image
            style={styles.arrowIcon}
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View style={styles.switchOption}>
          <Text style={styles.optionText}>Powiadomienia</Text>
          <Switch
            trackColor={{ false: "#767577", true: Color.text }}
            thumbColor={isEnabled ? Color.secondary : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>O aplikacji</Text>
        <Pressable
          style={styles.option}
          onPress={() => Linking.openURL("https://www.lipsum.com/")}
        >
          <Text style={styles.optionText}>Więcej o nas...</Text>
          <Image
            style={styles.arrowIcon}
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Pressable
          style={styles.option}
          onPress={() => Linking.openURL("https://www.lipsum.com/")}
        >
          <Text style={styles.optionText}>Polityka prywatności</Text>
          <Image
            style={styles.arrowIcon}
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Pressable
        style={styles.option}
        onPress={() => Linking.openURL("https://www.lipsum.com/")}
      >
        <Text style={styles.optionText}>Regulamin</Text>
        <Image
          style={styles.arrowIcon}
          source={require("../assets/vector.png")}
        />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray_500,
  },
  closeButton: {
    position: 'absolute',
    top: height * 0.0769,
    left: width * 0.0861,
    width: width * 0.0667,
    height: height * 0.0308,
    zIndex: 2,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.montserratExtraBold,
    color: Color.text,
    textAlign: "center",
    marginTop: "30%",
    marginBottom: "15%",
  },
  section: {
    paddingHorizontal: "8%",
  },
  sectionTitle: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: "left",
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: "10%",
  },
  switchOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: "5%",
    marginBottom: "8%",
  },
  optionText: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
  },
  arrowIcon: {
    width: 7.5,
    height: 12,
    marginRight: 10,
  },
});

export default Ustawienia;
