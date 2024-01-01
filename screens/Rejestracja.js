import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Pressable, Text, View, Image, TextInput, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, Linking } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get("window");

const Rejestracja = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  
  const handleRegister = () => {
    if (password == password2) {
      navigation.navigate("Logowanie");
    } else {
      alert("Hasła nie są takie same. Proszę wprowadzić poprawne hasło.");
    }
  };

  const handlePrivacyPolicyPress = () => {
    const privacyPolicyURL = "https://www.lipsum.com/"; 
    Linking.openURL(privacyPolicyURL);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : height*-0.24}
      style={{ flex: 1 }}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
        <View style={styles.frame1}>
          <Image
            style={styles.frameIcon1}
            contentFit="cover"
            source={require("../assets/frame1.png")}
          />  
        </View>
        <Pressable
          style={styles.closeButton}
          onPress={() => navigation.navigate("EkranPowitalny")}
        >
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require("../assets/zamknij.png")}
          />
        </Pressable>
        <Text style={styles.header}>Rejestracja</Text>
        <View style={styles.content}>
          <View style={styles.selectionButtons}>
            <Pressable
              style={[styles.button, styles.loginButton]}
              onPress={() => navigation.navigate("Logowanie")}
            >
              <Text style={[styles.buttonText, { color: "#5f5f5f" }]}>Zaloguj się</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.registerButton]}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>Rejestracja</Text>
            </Pressable>
          </View>
          <View style={styles.loginPanel}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Login</Text>
              <TextInput
                placeholder="Wprowadź swój login"
                placeholderTextColor="#777777"
                onChangeText={(text) => setLogin(text)}
                style={styles.input}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Hasło</Text>
              <TextInput
                secureTextEntry={true}
                placeholder="Wprowadź swoje hasło"
                placeholderTextColor="#777777"
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Potwierdź hasło</Text>
              <TextInput
                secureTextEntry={true}
                placeholder="Wprowadź ponownie swoje hasło"
                placeholderTextColor="#777777"
                onChangeText={(text) => setPassword2(text)}
                style={styles.input}
              />
            </View>
            <View style={styles.frame5}>
            <Text
            style={styles.klikajcWPoniszy}
            >{`Klikając w poniższy przycisk zgadzasz się z naszą `}</Text>
            <Text style={styles.politykPrywatnoci} onPress={handlePrivacyPolicyPress}>Polityką prywatności</Text>
            </View>
          </View>
          <Pressable
            style={styles.loginButtonLarge}
            onPress={handleRegister}
          >
            <Text style={styles.loginTextLarge}>Zarejestruj się</Text>
          </Pressable>
        </View>
        <View style={styles.frame4}>
          <Image
            style={styles.frameIcon2}
            contentFit="cover"
            source={require("../assets/Maska_z_cieniem.png")}
          />
        </View>
        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  politykPrywatnoci: {
    fontSize: FontSize.nav_size,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.secondary,
    textAlign: "center",
    marginBottom: height*0.03, 
    zIndex: 3,
  },
  klikajcWPoniszy: {
    fontSize: FontSize.nav_size,
    letterSpacing: 0.3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  container: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: width,
    overflow: "hidden",
    zIndex: 0,
  },
  frameIcon1: {
    position: 'absolute',
    top: "0%",
    width: width,
    height: height,
    alignItems: "center",
  },
  frame4: {
    width: width,
  },
  frame5: {
    marginTop: height*0.01,
  },
  frameIcon2: {
    position: 'absolute',
    bottom: "0%",
    width: width,
    height: height,
    alignItems: "center",
    transform: [{ translateY: height * 0.45 }]
  },
  closeButton: {
    position: 'absolute',
    top: height * 0.0769,
    left: width * 0.0861,
    width: width * 0.0667,
    height: height * 0.0308,
    zIndex: 2,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width,
    padding: 20,
    paddingTop: 20,
  },
  selectionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width*0.7, 
    marginTop: height*-0.13,
    marginBottom: height*0.05,
  },
  button: {
    borderRadius: Border.br_3xs,
    borderWidth: 2,
    borderColor: Color.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  loginButton: {
    backgroundColor: Color.colorGainsboro,
  },
  registerButton: {
    backgroundColor: Color.colorGainsboro,
  },
  buttonText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
  },
  header: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.montserratExtraBold,
    color: Color.text,
    textAlign: "center",
    marginTop: "30%",
    marginBottom: "10%",
  },
  loginPanel: {
    width: width*0.8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-5%',
    marginBottom: "5%",
    maxHeight: '20%',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 10,
    marginTop: "5%",
    zIndex: 1,
  },
  label: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    marginBottom: 5,
    marginLeft: 22,
  },
  input: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    color: Color.text,
    height: 54,
    width: '100%',
    paddingHorizontal: 25,
  },
  loginButtonLarge: {
    backgroundColor: Color.secondary,
    borderRadius: Border.br_base,
    padding: 16,
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    marginTop: "-10%",
    zIndex: 1,
  },
  loginTextLarge: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default Rejestracja;
