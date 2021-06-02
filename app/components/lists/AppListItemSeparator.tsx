import React from "react";
import { StyleSheet, View } from "react-native";

// import colors from "../config/colors";
import defaultStyles from "../../constants/styles";

interface AppListItemSeparatorProps {

}

const AppListItemSeparator: React.FC<AppListItemSeparatorProps> = ({

}) => {
  // function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: defaultStyles.colors.darkGrey,
  },
});

export default AppListItemSeparator;
