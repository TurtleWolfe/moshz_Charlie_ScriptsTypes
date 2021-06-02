import React from "react";
import {
  Image,
  StyleSheet,
  View,
} from "react-native";

import AppText from "../../components/AppText";
import AppListItem from "../../components/lists/AppListItem";
import defaultStyles from "../../constants/styles";

interface ListingDetailsScreenProps {
  // alpha?: string;
}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({
  // alpha = 'default',
}) => {
  return (
    <View style={styles.view}>
      <Image
        source={require("../../assets/images/jacket.jpg")}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText
          style={styles.title}>
          Red jacket for sale
          </AppText>
        <AppText
          style={styles.price}>
          $100
          </AppText>
        <View style={styles.userContainer}>
          <AppListItem
            image={require("../../assets/images/Turtlewolfe.png")}
            title="TurtleWolfe"
            subTitle="5 Listings"
          // background={defaultStyles.colors.secondary}
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  price: {
    color: defaultStyles.colors.secondary,
    fontFamily: 'CharterBoldItalic',
    fontSize: 20,
    fontWeight: "600",
    // fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontFamily: 'CharterBold',
    fontSize: 24,
    fontWeight: "600",
    // fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  },
  view: {
    width: "100%",
  },
});