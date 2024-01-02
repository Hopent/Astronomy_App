import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Pressable, Text, View, Image, TextInput, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get("window");

const Ustawienia3 = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");

  const handlePassword = () => {
    if (password2 == password3) {
      navigation.navigate("Ustawienia");
    } else {
      alert("Błedne hasło.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : height*-0.5}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Pressable
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={require("../assets/Zamknij.png")}
            />
          </Pressable>
          <Text style={styles.header}>Zmień hasło</Text>
          <View style={styles.user}>
            <Image
              style={styles.profilePic}
              source={require("../assets/ellipse-213.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.username}>Danuta</Text>
              <Text style={styles.userHandle}>@danka12</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
          <View style={styles.inputGroup}>
              <Text style={styles.label}>Obecne hasło</Text>
              <TextInput
                style={styles.input}
                placeholder="Wprowadź obecne hasło"
                placeholderTextColor="#777777"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nowe hasło</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Wprowadź nowe hasło"
                placeholderTextColor="#777777"
                value={password2}
                onChangeText={setPassword2}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Potwierdź hasło</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Wprowadź ponownie nowe hasło"
                placeholderTextColor="#777777"
                value={password3}
                onChangeText={setPassword3}
              />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>Anuluj</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.saveButton]}
              onPress={handlePassword}
            >
              <Text style={styles.buttonText}>Zapisz zmiany</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray_500,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: height * 0.05,
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
  header: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.montserratExtraBold,
    color: Color.text,
    textAlign: "center",
    marginTop: "15%",
    marginBottom: "7%",
  },
  profilePic: {
    width: 77,
    height: 77,
    borderRadius: 38.5, 
    marginBottom: "3%",
  },
  profilePic2: {
    width: 36,
    height: 36,
    borderRadius: 38.5, 
    position: 'absolute',
    right: width * 0.39,
    top: height * 0.28,
    zIndex: 1,
  },
  username: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
    marginBottom: "1%",
  },
  userHandle: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDimgray_100,
    textAlign: "center",
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column', 
    marginLeft: "7%", 
  },
  cameraIcon: {
    position: 'absolute',
    right: width * 0.405,
    top: height * 0.287,
    width: 24,
    height: 24,
    zIndex: 2,
  },
  inputContainer: {
    width: width*0.8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height*0.13,
    marginBottom: "15%",
    maxHeight: '20%',
  },
  inputGroup: {
    width: '100%',
    zIndex: 1,
  },
  input: {
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_xs,
    color: Color.text,
    height: 54,
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.montserratRegular,
    paddingHorizontal: 20,
    marginBottom: height * 0.02,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width*0.7, 
    marginTop: height * 0.05,
  },
  button: {
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    borderWidth: 2,
    borderColor: Color.colorDimgray_100,
    paddingVertical: 5,
    paddingHorizontal: 20,
    height: 30.3,
  },
  buttonText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
  },
  saveButton: {
    borderColor: Color.secondary,
    borderRadius: Border.br_3xs,
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    marginBottom: 5,
    marginLeft: 22,
  },
});

export default Ustawienia3;
