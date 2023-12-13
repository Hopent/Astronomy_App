const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import EkranPowitalny from "./screens/EkranPowitalny";
import Logowanie from "./screens/Logowanie";
import Rejestracja from "./screens/Rejestracja";
import Home from "./screens/Home";
import KatalogPlanet from "./screens/KatalogPlanet";
import KatalogGwiazd from "./screens/KatalogGwiazd";
import Mapa from "./screens/Mapa";
import Galeria from "./screens/Galeria";
import Powiadomienia from "./screens/Powiadomienia";
import Menu from "./screens/Menu";
import Wenus from "./screens/Wenus";
import Kompas from "./screens/Kompas";
import UkadSoneczny from "./screens/UkadSoneczny";
import Ustawienia3 from "./screens/Ustawienia3";
import Ustawienia2 from "./screens/Ustawienia2";
import Ustawienia from "./screens/Ustawienia";
import Quiz from "./screens/Quiz";
import Quiz1 from "./screens/Quiz1";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="EkranPowitalny"
              component={EkranPowitalny}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Logowanie"
              component={Logowanie}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rejestracja"
              component={Rejestracja}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KatalogPlanet"
              component={KatalogPlanet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KatalogGwiazd"
              component={KatalogGwiazd}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mapa"
              component={Mapa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Galeria"
              component={Galeria}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Powiadomienia"
              component={Powiadomienia}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wenus"
              component={Wenus}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Kompas"
              component={Kompas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UkadSoneczny"
              component={UkadSoneczny}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ustawienia3"
              component={Ustawienia3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ustawienia2"
              component={Ustawienia2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ustawienia"
              component={Ustawienia}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Quiz"
              component={Quiz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Quiz1"
              component={Quiz1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
