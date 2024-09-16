import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomFlatButton = ({ onPress, children }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default CustomFlatButton;

const styles = StyleSheet.create({});
