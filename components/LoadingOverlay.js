import { ActivityIndicator, StyleSheet, View } from "react-native";
import { COLORS } from "../utils/styles/colors";

const LoadingOverlay = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={"large"} color={COLORS.primary800} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
