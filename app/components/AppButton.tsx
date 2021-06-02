import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import defaultStyles from "../constants/styles";

interface AppButtonProps {
  color?: string;
  onPress?: any;
  title?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  color = 'primary',
  onPress = () => console.log('default AppButton'),
  title = 'default AppButton',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button,
      { backgroundColor: defaultStyles.colors[color] }]}
      onPress={onPress}
    >
      <Text
        style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
    // backgroundColor: '#fc5c65',
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 10,
    padding: 15,
    width: "100%",
  },
  text: {
    color: defaultStyles.colors.white,
    // color: '#fff',
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});