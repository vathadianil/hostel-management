import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";
import CustomFlatButton from "../ui/CustomFlatButton";
import { COLORS } from "../../utils/styles/colors";

const AuthForm = () => {
  const [isLogin, setIslogin] = useState(true);
  function switchAuthModeHandler() {
    setIslogin((prevState) => !prevState);
  }

  return (
    <View style={styles.container}>
      <CustomInput
        label={"Email"}
        placeholder={"Email"}
        style={styles.marginB24}
      />
      <CustomInput
        style={styles.marginB24}
        label={"Password"}
        placeholder={"Password"}
      />
      {!isLogin && (
        <CustomInput
          label={"Name"}
          placeholder={"Name"}
          style={styles.marginB24}
        />
      )}

      {!isLogin && (
        <CustomInput
          label={"Mobile"}
          placeholder={"Mobile"}
          style={styles.marginB24}
          keyboardType="number"
        />
      )}
      <CustomButton style={[styles.marginB24, styles.marginT24]}>
        {isLogin ? "Login" : "Signup"}
      </CustomButton>
      <View style={styles.marginB24}>
        {isLogin && (
          <CustomFlatButton onPress={switchAuthModeHandler}>
            <Text>
              <View>
                <Text style={styles.normalText}>Create a</Text>
              </View>
              <View style={styles.btnHighlightContainer}>
                <Text style={styles.btnHighlightText}>New Account</Text>
              </View>
            </Text>
          </CustomFlatButton>
        )}

        {!isLogin && (
          <CustomFlatButton onPress={switchAuthModeHandler}>
            <Text>
              <View style={styles.btnHighlightContainer}>
                <Text style={styles.btnHighlightText}>Log In</Text>
              </View>
              <View>
                <Text style={styles.normalText}>instead</Text>
              </View>
            </Text>
          </CustomFlatButton>
        )}
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: { flex: 1 },
  marginB24: {
    marginBottom: 24,
  },
  marginT24: {
    marginTop: 24,
  },

  btnHighlightContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary500,
  },
  btnHighlightText: {
    marginHorizontal: 6,
    textAlign: "center",
    fontFamily: "bold",
    color: COLORS.primary800,
  },
  normalText: {
    fontFamily: "regular",
  },
});
