import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../../constants/Colors";
import defaultStyles from "../../constants/styles";

interface ViewImageScreenProps {
  // alpha?: string;
  // beta?: string;
  // gamma?: string[];
  // delta?: number;
  // epsilon?: number[]
  // zeta?: boolean;
}

const ViewImageScreen: React.FC<ViewImageScreenProps> = ({
  // alpha,
  // beta,
  // gamma,
  // delta,
  // epsilon,
  // zeta,
}) => {
  // function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/images/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: defaultStyles.colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: defaultStyles.colors.black,
    flex: 1,
    width: "100%",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: defaultStyles.colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
