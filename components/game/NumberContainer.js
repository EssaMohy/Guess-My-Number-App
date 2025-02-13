import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const DeviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: DeviceWidth < 380 ? 12 : 23,
    margin: DeviceWidth < 380 ? 12 : 23,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: DeviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
