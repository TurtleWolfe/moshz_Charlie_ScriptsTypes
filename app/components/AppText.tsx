import React from "react";
import {
  // Platform,
  StyleSheet,
  Text,
} from "react-native";

import defaultStyles from "../constants/styles";

interface AppTextProps {
  children?: any;
  style?: object;
  otherProps?: any;
}

const AppText: React.FC<AppTextProps> = ({
  children = 'default AppText',
  style,
  ...otherProps
}) => {
  return (
    <Text
      style={[defaultStyles.text, style]}
      {...otherProps}
    >
      { children}
    </Text >
  )
}

export default AppText;
// const styles = StyleSheet.create({
//   text: {
//     fontSize: 18,
//     // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
//     fontFamily: "CharterRegular",
//   },
// });