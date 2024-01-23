import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import UserDataManager from '../components/UserDataManager';
import { serverConfig } from '../config';

const { width, height } = Dimensions.get("window");

  const Ustawienia2 = () => {
    const navigation = useNavigation();
    const [name, setName] = useState(null);
    const [login, setLogin] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [profilePicUri, setProfilePicUri] = useState(require("../assets/ellipse-213.png"));
    const cameraRef = useRef(null);

  const fetchUser = async () => {
    try {
        const url = `${serverConfig.apiUrl}:${serverConfig.port}/users?login=${login}`;
        const response = await fetch(url);
        const data = await response.json();

        return data[0];
    } catch (error) {
        Alert.alert('Incorrect login', 'Incorrect login, please try again.');
        console.error('Error fetching routes', error);
    }
  };

  const handleSaveChanges = async () => {
    try {
      const userData = await fetchUser();
      if(userData.password === password){
        if(userData.login === login){
          userData.name = username;

          const updateUrl = `${serverConfig.apiUrl}:${serverConfig.port}/users/${userData.id}`;
          const updateResponse = await fetch(updateUrl, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
      
          if (updateResponse.ok) {
            UserDataManager.saveUserDataToCache(userData);
            console.log('User login updated successfully');
          } else {
            console.log('Error updating user login');
          }
          navigation.goBack();
        }
      }

    }catch (error) {
      console.error('Error handling collecting Data', error);
    }
  };

  const handleTakePicture = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Camera permission not granted');
      return;
    }
  
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        const destination = `${FileSystem.documentDirectory}profilePicture.jpg`;
  
        await FileSystem.moveAsync({
          from: photo.uri,
          to: destination,
        });
        setProfilePicUri({ uri: destination });
      } catch (error) {
        console.error('Error taking picture:', error);
        Alert.alert('Error', 'Could not take picture.');
      }
    } else {
      Alert.alert('Error', 'Camera not ready.');
    }
  };
  
  useEffect(() => {
    const readUserData = async () => {
      const userData = await UserDataManager.getUserData();
      if (userData) {
        setName(userData.name);
        setLogin(userData.login);
      } else {
        console.log('Unable to read user data from cache');
      }
    };

    readUserData();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : height * -0.5}
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
          <Text style={styles.header}>Edytuj profil</Text>

          <Image
              style={styles.cameraIcon}
              source={require("../assets/cameraplusoutline.png")}
            />
          <Image
            style={styles.profilePic2}
            source={require("../assets/Background.png")}
          />
          <TouchableOpacity
            style={styles.cameraIcon}
            onPress={handleTakePicture}
          >
            <Image
            style={styles.profilePic2}
            source={require("../assets/Background.png")}
          />
          </TouchableOpacity>

          <View style={styles.user}>
            <Image
              style={styles.profilePic}
              source={profilePicUri}
            />
            <View style={styles.textContainer}>
              <Text style={styles.username}>{name}</Text>
              <Text style={styles.userHandle}>@{login}</Text>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nazwa użytkownika</Text>
              <TextInput
                style={styles.input}
                placeholder="Wprowadź nową nazwę"
                placeholderTextColor="#777777"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Hasło</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Wprowadź swoje hasło"
                placeholderTextColor="#777777"
                value={password}
                onChangeText={setPassword}
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
              onPress={handleSaveChanges}
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
    right: width * 0.5,
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
    right: width * 0.517,
    top: height * 0.287,
    width: 24,
    height: 24,
    zIndex: 2,
  },
  inputContainer: {
    width: width*0.8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height*0.08,
    marginBottom: "5%",
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
  profilePicContainer: {
    width: 77, 
    height: 77, 
    position: 'relative',
  },
});

export default Ustawienia2;
