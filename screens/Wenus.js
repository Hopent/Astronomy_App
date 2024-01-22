import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Pressable,ScrollView } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import BottomNav from "../components/BottomNav";
import TopNav_2 from "../components/TopNav_2";

const Wenus = ({ route }) => {
  const { planet } = route.params || { planet: 'Wenus' };
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const planetIndexes = {
    'Wenus': 0,
    'Mars': 1,
    'Ziemia': 2,
    'Merkury': 3,
    'Jowisz': 4,
    'Saturn': 5,
    'Uran': 6,
    'Neptun': 7,
    'Delta': 8,
    'Suhail': 9,
    'Syriusz': 10,
    'Akrtur': 11,
  };
  useEffect(() => {
    setIndex(planetIndexes[planet]);
  }, [planet, planetIndexes]);

  const planetData = [
    {
      planet: 'Wenus',
      image: require('../assets/kafelek_wenus.png'),
      title: `Wenus jest drugą planetą  od słońca.`,
      first: `Nazywana jest czasem siostrzaną planetą Ziemi, gdyż oba te globy powstały w zasadzie z tej samej materii, mniej więcej w tym samym czasie i mają podobne rozmiary, masy i gęstości. Widziana z daleka często porównywana była do bogini olśniewającej urody nazywanej różnie w różnych czasach.`,
      
      second: `Charakterystyka fizyczna:
      Średnica Wenus wynosi około 12 104 km, co czyni ją bardzo zbliżoną rozmiarami do Ziemi.
      Masa Wenus to około 0,815 masy Ziemi.
      
      Okres obrotu:
      Wenus ma bardzo wolny okres obrotu własnego, który wynosi około 243 dni ziemskie.
      Interesującą cechą jest to, że Wenus obraca się w kierunku przeciwnym do kierunku obiegu wokół Słońca, co oznacza, że na powierzchni planety dzień trwa dłużej niż rok.`,
      
      third:`Atmosfera:
      Atmosfera Wenus jest bardzo gęsta i składa się głównie z dwutlenku węgla (CO2).
      Obecność gęstej atmosfery powoduje efekt cieplarniany, który sprawia, że temperatura na powierzchni Wenus jest wyjątkowo wysoka.

      Temperatura na powierzchni:
      Wenus jest najgorętszą planetą w Układzie Słonecznym.
      Średnia temperatura na powierzchni planety wynosi około 467 stopni Celsiusza (872 stopnie Fahrenheita), co jest znacznie wyższe od temperatury wrzenia ołowiu.`,
    },
    {
      planet: 'Mars',
      image: require('../assets/kafelek_mars.png'),
      title: 'Mars jest czwartą planetą od Słońca.',
      first: 'Mars jest czerwoną planetą z powodu swojej powierzchni zdominowanej przez tlenki żelaza, co nadaje mu czerwoną barwę.',
      second: `Charakterystyka fizyczna:
      Średnica Marsa wynosi około 6 792 km, co czyni go tylko nieznacznie większym od Księżyca.
      Masa Marsa to około 0,107 masy Ziemi.
      
      Okres obrotu:
      Mars ma podobny okres obrotu do Ziemi, wynoszący około 24,6 godzin.`,
      third: `Atmosfera:
      Atmosfera Marsa jest rzadka i składa się głównie z dwutlenku węgla (95%) oraz azotu (3%). Mars ma bardzo cienką warstwę atmosfery, co sprawia, że na jego powierzchni panują ekstremalne warunki.`,
    },
    {
      planet: 'Ziemia',
      image: require('../assets/kafelek_mars.png'),
      title: 'Ziemia jest trzecią planetą od Słońca.',
      first: 'Ziemia jest jedyną znaną planetą, na której istnieje życie. Jest to wynik odpowiednich warunków atmosferycznych i geologicznych.',
      second: `Charakterystyka fizyczna:
      Średnica Ziemi wynosi około 12 742 km, co sprawia, że jest to jedna z większych planet naszego Układu Słonecznego.
      Masa Ziemi to około 5,972 × 10^24 kg.
      
      Okres obrotu:
      Ziemia obraca się wokół własnej osi, co zajmuje około 24 godziny, co skutkuje cyklem dnia i nocy.`,
      third: `Atmosfera:
      Atmosfera Ziemi jest złożona głównie z azotu (78%) i tlenu (21%). Ta gęsta warstwa gazów chroni życie na Ziemi, utrzymując stabilne warunki klimatyczne i umożliwiając istnienie wody w stanie ciekłym.`,
    },
    {
      planet: 'Merkury',
      image: require('../assets/kafelek_mars.png'),
      title: 'Merkury jest najbliższą planetą Słońca.',
      first: 'Merkury jest planetą skalistą, podobną do Marsa, Wenus i Ziemi. Jest również jedną z najgorętszych planet w naszym Układzie Słonecznym z powodu bliskości do Słońca.',
      second: `Charakterystyka fizyczna:
      Średnica Merkurego wynosi około 4 880 km, co sprawia, że jest to jedna z najmniejszych planet.
      Masa Merkurego to około 0,055 masy Ziemi.
      
      Okres obrotu:
      Merkury ma bardzo długi okres obrotu wokół własnej osi i potrzebuje około 58,6 dni ziemskich na jeden obrót.`,
      third: `Atmosfera:
      Merkury praktycznie nie ma atmosfery, co sprawia, że na jego powierzchni panują ekstremalne warunki, w tym duże różnice temperatur między dzień a nocą.`,
    },
    {
      planet: 'Jowisz',
      image: require('../assets/kafelek_mars.png'),
      title: 'Jowisz to największa planeta naszego Układu Słonecznego.',
      first: 'Jowisz jest gazową gigantką, złożoną głównie z wodoru i helu. Posiada intensywne pasy chmur oraz charakterystyczny Wielki Czerwony Plamy - ogromną burzę atmosferyczną.',
      second: `Charakterystyka fizyczna:
      Średnica Jowisza wynosi około 139 820 km, co sprawia, że jest to ponad dwukrotnie większa planeta niż każda inna w Układzie Słonecznym.
      Masa Jowisza to około 318 razy masa Ziemi.
      
      Okres obrotu:
      Jowisz obraca się bardzo szybko, wykonując obrót wokół własnej osi w czasie zaledwie 9,9 godzin ziemskich.`,
      third: `Atmosfera:
      Atmosfera Jowisza zawiera wiele warstw chmur i gazów, tworząc bogatą i dynamiczną strukturę. Jest jednym z fascynujących obiektów do obserwacji w naszym Układzie Słonecznym.`,
    },
    {
      planet: 'Saturn',
      image: require('../assets/kafelek_mars.png'),
      title: 'Saturn to jedna z najpiękniejszych planet ze względu na swoje widoczne pierścienie.',
      first: 'Saturn jest gazową gigantką, podobną do Jowisza, lecz jest znacznie mniejsza. Jego charakterystycznymi cechami są rozległe systemy pierścieni, złożone głównie z lodu i pyłu kosmicznego.',
      second: `Charakterystyka fizyczna:
      Średnica Saturna wynosi około 116 460 km, co czyni go jednym z większych gazowych olbrzymów.
      Masa Saturna to około 95 razy masa Ziemi.
      
      Okres obrotu:
      Saturn obraca się względem swojej osi stosunkowo szybko, potrzebując około 10,7 godzin ziemskich na jeden obrót.`,
      third: `Atmosfera:
      Atmosfera Saturna składa się głównie z wodoru i helu, podobnie jak w przypadku innych gazowych olbrzymów. Jednak to jego pierścienie stanowią jedną z najbardziej charakterystycznych cech tej planety.`,
    },
    {
      planet: 'Uran',
      image: require('../assets/kafelek_mars.png'),
      title: 'Uran to gazowy olbrzym o nietypowej orientacji osi obrotu.',
      first: 'Uran wyróżnia się nietypową orientacją osi obrotu, jest praktycznie leżący na boku w stosunku do swojej orbity. To jedna z zaledwie dwóch planet w naszym Układzie Słonecznym o takiej charakterystyce.',
      second: `Charakterystyka fizyczna:
      Średnica Urana wynosi około 50 724 km, co czyni go jednym z mniejszych gazowych olbrzymów.
      Masa Urana to około 14,5 razy masa Ziemi.
      
      Okres obrotu:
      Ze względu na nietypową orientację osi obrotu, Uran obraca się wokół własnej osi na bok, potrzebując około 17,2 godzin ziemskich na jeden obrót.`,
      third: `Atmosfera:
      Atmosfera Urana zawiera wodór, hel i małe ilości metanu. Planeta jest znana ze swojej niebiesko-zielonej barwy, nadanej przez obecność metanu w atmosferze.`,
    },
    {
      planet: 'Neptun',
      image: require('../assets/kafelek_mars.png'),
      title: 'Neptun to gazowy olbrzym, znany ze swoich burzliwych atmosferycznych zjawisk.',
      first: 'Neptun jest jednym z gazowych olbrzymów, podobnym do Urana. Charakteryzuje się intensywnymi burzami atmosferycznymi, w tym Wielkim Ciemnym Plamą, podobną do Wielkiego Czerwonego Plamy na Jowiszu.',
      second: `Charakterystyka fizyczna:
      Średnica Neptuna wynosi około 49 244 km, co czyni go jednym z mniejszych gazowych olbrzymów.
      Masa Neptuna to około 17,1 razy masa Ziemi.
      
      Okres obrotu:
      Neptun obraca się wokół własnej osi stosunkowo szybko, potrzebując około 16,1 godzin ziemskich na jeden obrót.`,
      third: `Atmosfera:
      Atmosfera Neptuna składa się głównie z wodoru, helu i metanu. Planeta jest znana ze swojego niebieskiego koloru, nadanego przez obecność metanu, który absorbując czerwone światło, nadaje planetom gazowym charakterystyczną barwę.`,
    },
    {
      planet: 'Delta Velorum',
      image: require('../assets/giphy-1.png'),
      title: 'Delta Velorum to gwiazda wielokrotna w gwiazdozbiorze Żagla.',
      first: 'Delta Velorum jest systemem gwiazdowym składającym się z co najmniej czterech gwiazd. Jest to gwiazda, która jest często obserwowana jako układ wielokrotny, co oznacza, że składa się z kilku gwiazd, z których każda może mieć swoje towarzyszki.',
      second: `Charakterystyka fizyczna:
      Szczegóły dotyczące fizycznych parametrów Delta Velorum są trudne do określenia ze względu na jej złożoną naturę układu wielokrotnego. Wspólnie stanowią one fascynujący obiekt badawczy dla astronomów.
      
      Okres obrotu:
      Okres obrotu dla poszczególnych składników układu może być różny, w zależności od ich mas i odległości między nimi.`,
      third: `Dystans:
      Delta Velorum znajduje się w odległości około 80 lat świetlnych od Ziemi. To stosunkowo bliska gwiazda w naszym sąsiedztwie galaktycznym, co umożliwia dokładne badania jej właściwości.`,
    },
    {
      planet: 'Suhail',
      image: require('../assets/giphy-2.png'),
      title: 'Suhail to jedna z najjaśniejszych gwiazd na nocnym niebie.',
      first: 'Suhail jest olbrzymią gwiazdą należącą do gwiazdozbioru Kila. Jest to jedna z najjaśniejszych gwiazd na niebie i jest dobrze widoczna na południowej półkuli Ziemi.',
      second: `Charakterystyka fizyczna:
      Suhail jest olbrzymią gwiazdą o masie kilkakrotnie większej niż masa Słońca. Jej jasność sprawia, że jest jednym z najbardziej rozpoznawalnych obiektów na nocnym niebie.
      
      Okres obrotu:
      Dokładny okres obrotu Suhaila może być trudny do określenia ze względu na jego odległość i specyfikę gwiazdy.`,
      third: `Dystans:
      Suhail znajduje się w odległości około 310 lat świetlnych od Ziemi. Pomimo tej dużej odległości, jej intensywna jasność sprawia, że jest łatwo zauważalna.`,
    },
    {
      planet: 'Syriusz',
      image: require('../assets/giphy-3.png'),
      title: 'Syriusz to najjaśniejsza gwiazda na nocnym niebie.',
      first: 'Syriusz jest jednym z najbardziej jasnych obiektów na niebie i jest widoczny na obu półkulach Ziemi. Jest to gwiazda podwójna, składająca się z Syriusza A i towarzyszącego mu Syriusza B.',
      second: `Charakterystyka fizyczna:
      Syriusz A jest białym karłem o masie nieco większej niż masa Słońca. Syriusz B to mniejsza gwiazda, składająca się głównie z pierwiastków cięższych niż wodór i hel.
      
      Okres obrotu:
      Ze względu na swoją odległość, dokładny okres obrotu Syriusza może być trudny do ustalenia.`,
      third: `Dystans:
      Syriusz znajduje się w odległości około 8,6 lat świetlnych od Ziemi. Jego bliskość i jasność czynią go jednym z najważniejszych obiektów na nocnym niebie.`,
    },
    {
      planet: 'Arcturus',
      image: require('../assets/giphy-4.png'),
      title: 'Arcturus to czerwony olbrzym.',
      first: 'Arcturus jest jedną z najjaśniejszych gwiazd widocznych z półkuli północnej i należy do gwiazdozbioru Wolarza. Jest to czerwony olbrzym, co oznacza, że jest w końcowym etapie ewolucji gwiazdowej.',
      second: `Charakterystyka fizyczna:
      Arcturus ma masę większą niż Słońce i jest około 25 razy jaśniejszy. Jest to jedna z największych i najjaśniejszych gwiazd w naszym sąsiedztwie galaktycznym.
      
      Okres obrotu:
      Arcturus obraca się stosunkowo wolno wokół własnej osi, co skutkuje dłuższym okresem obrotu.`,
      third: `Dystans:
      Arcturus znajduje się w odległości około 37 lat świetlnych od Ziemi. Jego jasność i czerwony kolor sprawiają, że jest łatwo zauważalny na nocnym niebie.`,
    },
  ];

  return (
    <View style={styles.container}>
    <View style={styles.wenus1}>
      <Text style={styles.wenus}>{planet}</Text>
      <Image
        style={styles.maskiDlaTa}
        contentFit="cover"
        source={require("../assets/maski-dla-ta2.png")}
      />
      <View style={styles.box_container}>
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <View style={styles.kafelki}>
          <Image
            style={styles.kafelekWenus}
            contentFit="cover"
            source={planetData[index].image}
          />
          <Text style={styles.nazywanaJestCzasem}>{planetData[index].first}</Text>
          <Text style={styles.wenusJestDrug}>{planetData[index].title}</Text>
        </View>
        <View style={styles.kafelki1}>
          <Text style={styles.szczegoweDane}>Szczegółowe dane:</Text>
          <Text style={styles.charakterystykaFizycznaRed}>{planetData[index].second}
          </Text>
        </View>
        <View style={styles.kafelki2}>
          <Text style={styles.atmosferaAtmosferaWenus}>{planetData[index].third}
          </Text>
        </View>
        </ScrollView>
      </View>
      <Pressable
        style={styles.przyciskiWyboru}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.signOutSqureFillIcon}
          contentFit="cover"
          source={require("../assets/sign-out-squre-fill.png")}
        />
        <Text style={styles.powrt}>Powrót</Text>
      </Pressable>
      <BottomNav />
      <TopNav_2 />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "260%",
  },
  wenus: {
    position: "absolute",
    flexDirection: 'row',
    top: 123,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    color: Color.text,
    textAlign: "center",
    width: 389,
    height: 73,
  },
  kafelekWenus: {
    position: "absolute",
    height: "24.7%",
    width: "38.57%",
    top: "5.69%",
    right: "55.71%",
    bottom: "69.61%",
    left: "5.71%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  nazywanaJestCzasem: {
    position: "absolute",
    top: 140,
    left: 16,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    width: 249,
  },
  wenusJestDrug: {
    position: "absolute",
    top: 44,
    left: 138,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
    width: 122,
  },
  kafelki: {
    position: "relative",
    height: "97.13%",
    left: "15%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    width: 280,
  },
  kafelki1: {
    position: "relative",
    height: "97.13%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    left: "30%",
    width: 280,
  },
  kafelki2: {
    position: "relative",
    height: "97.13%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dark,
    left: "50%",
    width: 280,
  },
  box_container: {
    position: "absolute",
    top: 197,
    width: "100%",
    height: 418,
  },
  szczegoweDane: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
    width: 163,
  },
  charakterystykaFizycznaRed: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    width: 249,
    marginTop: 21,
  },
  atmosferaAtmosferaWenus: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    width: 249,
  },
  signOutSqureFillIcon: {
    position: "relative",
    width: 17,
    height: 17,
  },
  powrt: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.nav,
    color: Color.text,
    textAlign: "center",
    width: 80,
    height: 15,
    marginLeft: -9,
  },
  przyciskiWyboru: {
    position: "absolute",
    height: "3.76%",
    width: "27.78%",
    top: "81.63%",
    right: "14.72%",
    bottom: "14.62%",
    left: "57.5%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_7xs,
  },
  wenus1: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden",
  },
});

export default Wenus;
