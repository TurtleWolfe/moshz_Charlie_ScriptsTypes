import React from "react";
import {
  Image,
  StyleSheet,
  View
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../constants/styles";

interface ViewImageScreenProps {
  // alpha?: string;
}

const ViewImageScreen: React.FC<ViewImageScreenProps> = ({
  // alpha,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close"
          color="white"
          size={35}
        />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/images/Turtlewolfe.png")}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: defaultStyles.colors.primary,
    // backgroundColor: "#fc5c65",
    // height: 50,
    left: 30,
    position: "absolute",
    top: 40,
    // width: 50,
  },
  container: {
    backgroundColor: defaultStyles.colors.black,
    // backgroundColor: "#000",
    flex: 1,
    width: "100%",
  },
  deleteIcon: {
    backgroundColor: defaultStyles.colors.secondary,
    // backgroundColor: "#4ecdc4",
    // height: 50,
    position: "absolute",
    right: 30,
    top: 40,
    // width: 50,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});