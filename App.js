import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import CustomImage from "./components/CustomImage";
import HostelImage from "./assets/images/hostel.png";
import { useCallback } from "react";
import { COLORS } from "./utils/styles/colors";
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import CustomFlatButton from "./components/CustomFlatButton";

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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomImage image={HostelImage} />
      <Text style={styles.title}>HostelHub</Text>
      <CustomInput
        label={"Email"}
        placeholder={"Email"}
        style={{ marginBottom: 24 }}
      />
      <CustomInput label={"Password"} placeholder={"Password"} />
      <CustomButton style={styles.btnContainer}>Login</CustomButton>
      <View style={styles.flatBtnContainer}>
        {/* <CustomFlatButton onPress={switchAuthModeHandler}>
          {isLogin ? (
            <Text>
              <View>
                <Text style={styles.normalText}>Create a</Text>
              </View>
              <View style={styles.btnHighlightContainer}>
                <Text style={styles.btnHighlightText}>New Account</Text>
              </View>
            </Text>
          ) : (
            <Text>
              <View style={styles.btnHighlightContainer}>
                <Text style={styles.btnHighlightText}>Log In</Text>
              </View>
              <View>
                <Text style={styles.normalText}>instead</Text>
              </View>
            </Text>
          )}
        </CustomFlatButton> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.textColor,
    fontSize: 28,
    fontFamily: "semibold",
    lineHeight: 42,
  },
  btnContainer: {
    marginTop: 40,
  },
});
