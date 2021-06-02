import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import colors from "../config/colors";
import defaultStyles from "../../constants/styles";
import { defineAnimation } from "react-native-reanimated";


interface AppListItemDeleteActionProps {
  onPress?: any;
}

const AppListItemDeleteAction: React.FC<AppListItemDeleteActionProps> = ({
  onPress = 'default',
}) => {
  // function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={defaultStyles.colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppListItemDeleteAction;
