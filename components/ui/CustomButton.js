import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../utils/styles/colors";

const CustomButton = ({ style, mode, disabled, icon, children, onPress }) => {
  return (
    <View
      style={[
        styles.container,
        style,
        mode === "flat" && styles.flat,
        disabled && { backgroundColor: COLORS.shadowColor },
      ]}
    >
      <Pressable
        onPress={() => {
          if (disabled) return;
          onPress();
        }}
        android_ripple={!disabled && { color: COLORS.shadowColor }}
        style={({ pressed }) => !disabled && pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          {icon && (
            <Ionicons
              style={styles.icon}
              name={icon}
              color={color || "#fff"}
              size={size || 16}
            />
          )}
          <Text
            style={[
              styles.buttonText,
              mode === "flat" && styles.flatText,
              disabled && { color: COLORS.gray },
            ]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: COLORS.primary800,
    elevation: 3,
    shadowColor: Platform.OS === "ios" && COLORS.shadowColor,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  pressed: {
    opacity: 0.25,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: { marginRight: 6 },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: "regular",
  },
  flatText: {
    color: COLORS.primary500,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: COLORS.shadowColor,
    borderRadius: 4,
  },
});
