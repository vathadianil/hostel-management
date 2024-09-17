import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useContext, useEffect, useState } from "react";
import AppContextProvider, { AppContext } from "./store/app-context";
import LoadingOverlay from "./components/ui/LoadingOverlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./components/navigation/AuthStack";

function Navigation() {
  const appCtx = useContext(AppContext);
  return (
    <NavigationContainer>
      <AuthStack />
      {/* {appCtx.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />} */}
    </NavigationContainer>
  );
}

function Root() {
  const appCtx = useContext(AppContext);
  const [isTokenFetching, setIsTokenFetching] = useState(true);
  useEffect(() => {
    async function fetchToken() {
      setIsTokenFetching(true);
      const storedData = await AsyncStorage.getItem("loginData");
      const loginData = await JSON.parse(storedData);

      if (loginData?.token) {
        appCtx.authenticate(loginData);
      }
      setIsTokenFetching(false);
    }
    fetchToken();
  }, []);
  if (isTokenFetching) {
    return <LoadingOverlay />;
  }
  return <Navigation />;
}

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    light: require("./assets/fonts/Montserrat-Light.ttf"),
    medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    bold: require("./assets/fonts/Montserrat-Bold.ttf"),
    extrabold: require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    thin: require("./assets/fonts/Montserrat-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="auto" />
      <AppContextProvider>
        <Root />
      </AppContextProvider>
    </>
  );
}
