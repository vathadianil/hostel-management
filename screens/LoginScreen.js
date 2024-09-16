import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../components/ui/CustomInput";
import CustomImage from "../components/ui/CustomImage";
import HostelImage from "../assets/images/hostel.png";
import CustomButton from "../components/ui/CustomButton";
import CustomFlatButton from "../components/ui/CustomFlatButton";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../utils/styles/colors";

const LoginScreen = ({ isLogin }) => {
  const navigation = useNavigation();
  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  return (
    <View style={styles.container}>
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
        <CustomFlatButton onPress={switchAuthModeHandler}>
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
        </CustomFlatButton>
      </View>
    </View>
  );
};

export default LoginScreen;

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
