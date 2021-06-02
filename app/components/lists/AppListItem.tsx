import React, { ReactNode } from "react";
import {
  Image,
  StyleSheet,
  View,
} from "react-native";

import AppText from "../AppText";
import defaultStyles from "../../constants/styles";

interface AppListItemProps {
  image?: string;
  title?: string;
  subTitle?: string;
  IconComponent?: ReactNode;
}

const AppListItem: React.FC<AppListItemProps> = ({
  image = require("../../assets/images/Turtlewolfe.png"),
  title = 'default AppListItem title',
  subTitle = 'default AppListItem subTitle',
  // IconComponent
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={image}
      />
      <View>
        <AppText
          style={styles.title} >
          {title}
        </AppText>
        <AppText
          style={styles.subTitle} >
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

export default AppListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: '100%',
  },
  image: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 35,
    height: 70,
    marginRight: 10,
    width: 70,
  },
  title: {
    fontFamily: 'CharterBold',
    fontWeight: "600",
  },
  subTitle: {
    color: defaultStyles.colors.mediumGrey,
    fontFamily: 'CharterBoldItalic',
    fontWeight: "500",
  },
});