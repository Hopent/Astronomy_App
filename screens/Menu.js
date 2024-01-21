import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Pressable, View, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import UserDataManager from '../components/UserDataManager';


const { width, height } = Dimensions.get("window");

const Menu = () => {
  const navigation = useNavigation();
  const [name, setName] = useState(null);
  const [login,setLogin] = useState(null);


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
    <View style={styles.menuContainer}>
      <Pressable
        style={styles.closeButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/zamknij.png")}
        />
      </Pressable>

      <Text style={styles.menuTitle}>Menu</Text>

      <View style={styles.profileContainer}>
        <Image
          style={styles.profilePic}
          source={require("../assets/ellipse-212.png")}
        />
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profileUsername}>@{login}</Text>
      </View>

      <View style={styles.menuItems}>
        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.menuIcon}
            source={require("../assets/ikonka-strony-gwnej4.png")} 
          />
          <Text style={styles.menuText}>Home</Text>
        </Pressable>

        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("KatalogPlanet")}
        >
          <Image
            style={styles.menuIcon}
            source={require("../assets/ikonka-katalogu3.png")}
          />
          <Text style={styles.menuText}>Katalog</Text>
        </Pressable>

        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("Mapa")}
        >
          <Image
            style={styles.menuIcon}
            source={require("../assets/ikonka-mapy2.png")} 
          />
          <Text style={styles.menuText}>Mapa</Text>
        </Pressable>

        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("Galeria")}
        >
          <Image
            style={styles.menuIcon}
            source={require("../assets/ikonka-galerii11.png")}
          />
          <Text style={styles.menuText}>Galeria</Text>
        </Pressable>

        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("UkadSoneczny")}
        >
          <Image
            style={styles.menuIcon}
            source={require("../assets/ukad.png")} 
          />
          <Text style={styles.menuText}>Układ słoneczny</Text>
        </Pressable>

        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("Kompas")}
        >
          <Image
            style={styles.menuIcon}
            source={require("../assets/Compass_alt.png")} 
          />
          <Text style={styles.menuText}>Kompas</Text>
        </Pressable>

        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("Ustawienia")}
        >
          <Image
            style={styles.menuIcon}
            source={require("../assets/Setting_fill.png")} 
          />
          <Text style={styles.menuText}>Ustawienia</Text>
        </Pressable>
    </View>

      <Pressable
        style={styles.logoutButton}
        onPress={() => navigation.navigate("EkranPowitalny")}
      >
          <Image
            style={styles.menuIcon}
            source={require("../assets/Sign_in.png")} 
          />
        <Text style={styles.logoutText}>Wyloguj się</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: Color.colorGray_500,
    alignItems: 'center',
    paddingVertical: 20,
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
  menuTitle: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.montserratExtraBold,
    color: Color.text,
    textAlign: "center",
    marginTop: "25%",
    marginBottom: "3%",
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePic: {
    width: 77,
    height: 77,
    borderRadius: 38.5, 
    marginBottom: "5%",
  },
  profileName: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
    marginBottom: "1%",
  },
  profileUsername: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDimgray_100,
    textAlign: "center",
  },
  menuItems: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    marginLeft: "7%",
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuIcon: {
    width: 30,
    height: 29,
    marginRight: 10,
  },
  menuText: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.text,
  },
  logoutButton: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 'auto',
    marginRight: "5%",
  },
  logoutText: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
  },
});

export default Menu;
