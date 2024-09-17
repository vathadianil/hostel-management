import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import CustomImage from "../components/ui/CustomImage";
import HostelImage from "../assets/images/hostel.png";
import { COLORS } from "../utils/styles/colors";
import AuthForm from "../components/Auth/AuthForm";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleAndImageContainer}>
        <CustomImage image={HostelImage} />
        <Text style={styles.title}>HostelHub</Text>
      </View>
      <View style={styles.authFormContainer}>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <AuthForm />
          </ScrollView>
        </KeyboardAvoidingView>
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
  titleAndImageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: COLORS.textColor,
    fontSize: 28,
    fontFamily: "semibold",
    lineHeight: 42,
  },
  authFormContainer: { flex: 1 },
});
