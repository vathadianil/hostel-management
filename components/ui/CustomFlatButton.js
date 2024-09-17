import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const CustomFlatButton = ({ onPress, children }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default CustomFlatButton;

const styles = StyleSheet.create({
  buttonText: {
    textAlign: "center",
  },
});
