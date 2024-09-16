import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../../utils/styles/colors";

const CustomInput = ({
  onChangeValue,
  value,
  keyboardType = "text",
  label,
  placeholder,
  style,
}) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeValue}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  label: {
    color: COLORS.textColor,
    fontSize: 14,
    fontFamily: "light",
    lineHeight: 24,
    paddingHorizontal: 8,
  },
  input: {
    marginVertical: 8,
    width: 327,
    height: 50,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 24,
    backgroundColor: "#ffffff",
    color: "#292929",
    fontSize: 12,
    fontFamily: "regular",
    lineHeight: 19,
    outline: "none",
  },
});
