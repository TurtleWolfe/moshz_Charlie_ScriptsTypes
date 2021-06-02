import React from "react";
import {
  Image,
  StyleSheet,
  View,
} from "react-native";

import AppText from "./AppText";
import defaultStyles from "../constants/styles";

interface AppCardProps {
  image?: string;
  subTitle?: string;
  title?: string;
}

const AppCard: React.FC<AppCardProps> = ({
  image = require('../assets/images/Turtlewolfe.png'),
  subTitle = 'default subTitle AppCard',
  title = 'default title AppCard',
}) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={image}
      />
      <View style={styles.detailsContainer}>
        <AppText
          style={styles.title}>
          {title}
        </AppText>
        <AppText
          style={styles.subTitle}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

export default AppCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    width: '100%',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    backgroundColor: defaultStyles.colors.lightGrey,
    height: 200,
    resizeMode: "cover",
    width: "100%",
    // width: 360,
  },
  subTitle: {
    color: defaultStyles.colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});