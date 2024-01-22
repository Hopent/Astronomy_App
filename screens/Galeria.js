import React,{ useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import TopNav_2 from "../components/TopNav_2";
import BottomNav from "../components/BottomNav";

const Galeria = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(2);
  const navigation = useNavigation();
  const imageSources = {
    1: require('../assets/5_galeria.png'),
    2: require('../assets/6_galeria.png'),
  };
  const photoData = [
    {
      title: 'Mgławica Oriona',
      description: 'Zdjęcie przedstawia Wielką Mgławicę w Orionie, ukazując intensywne odcienie purpury i niebieskiego. W centrum widoczna jest młoda, gwiezdna formacja, otoczona chmurami pyłu i gazów.',
      date: '08 lis',
      author: 'John Smith',
    },
    {
      title: 'Droga Mleczna na tle gór',
      description: 'Na fotografii widać panoramiczny widok Drogi Mlecznej na tle górskiego krajobrazu. Złote pasma gwiazd oplatają masywne szczyty, tworząc spektakularny kontrast między niebem a ziemią.',
      date: '15 mar 2023',
      author: 'Anna Johnson',
    },
  ];


  const changeImage = (direction) => {
    setCurrentImageIndex(1);
    const totalImages = Object.keys(imageSources).length;

    let newIndex = currentImageIndex + direction;

    if (newIndex < 1) {
      newIndex = totalImages;
    } else if (newIndex > totalImages) {
      newIndex = 1;
    }

    setCurrentImageIndex(newIndex);
  };


  return (
    <View style={styles.galeria3}>
      <Text style={styles.galeria1}>Galeria</Text>
      <View style={styles.galeria2}>
        <View style={styles.graphic_box}>
          <Image
            style={styles.main_graphic}
            contentFit="cover"
            source={imageSources[currentImageIndex]}
          />
          <View style={styles.przyciskiWyboru}>
          <TouchableOpacity onPress={() => changeImage(1)}>
            <Image
              style={styles.left_button}
              contentFit="cover"
              source={require("../assets/left_arrow.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(-1)}>
            <Image
                style={styles.right_button}
                contentFit="cover"
                source={require("../assets/right_arrow.png")}
            />
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.newsy}>
          <View style={styles.kafelek} />
          <Text style={styles.PhotoInfo}>
            {photoData[currentImageIndex - 1].description} 
          </Text>
          <Text style={styles.title}>{photoData[currentImageIndex - 1].title}</Text>
          <Text style={styles.author}>Fot: {photoData[currentImageIndex - 1].author}</Text>
          <Text style={styles.date}>{photoData[currentImageIndex - 1].date}</Text>
        </View>
      </View>
      <TopNav_2 />
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  galeria1: {
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
  main_graphic: {
    position: "absolute",
    width: "100%", 
    height: "100%", 
    borderRadius: Border.br_3xs, 
    resizeMode: 'cover', 
  },
  right_button: {
    width: 50,
    height: 50,
    top: "35%",
    left: "380%",
    backgroundColor: 'transparent',
  },
  left_button: {
    width: 50,
    height: 50,
    left: 10,
    top: "35%",
    backgroundColor: 'transparent',
  },
  przyciskiWyboru: {
    position: "relative",
    height: "100%",
    width: "100%",
    flexDirection: 'row',
    backgroundColor: "transparent",
  },
  graphic_box: {
    position: "absolute",
    height: "47.28%", 
    width: "100%", 
    top: 0,
    right: 0,
    left: 0,
    borderRadius: Border.br_3xs, 
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
  },
  PhotoInfo: {
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
  title: {
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
  author: {
    position: "absolute",
    height: "6.56%",
    top: "6.56%",
    left: "52.67%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  date: {
    position: "absolute",
    height: "6.48%",
    width: "30.33%",
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
  galeria2: {
    position: "absolute",
    height: "54.23%",
    marginLeft: -150,
    top: "25.64%",
    bottom: "20.13%",
    left: "50%",
    width: 300,
  },
  galeria3: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
  },
});

export default Galeria;
