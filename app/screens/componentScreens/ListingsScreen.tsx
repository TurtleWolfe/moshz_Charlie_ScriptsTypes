import React from "react";
import { FlatList, StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppCard from "../../components/AppCard";
import defaultStyles from "../../constants/styles";
// import colors from "../config/colors";

interface ListingsScreenProps {
  listings?: {}[];
  data?: {};
}

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../../assets/images/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 2000,
    image: require("../../assets/images/couch.jpg"),
  },
  {
    id: 3,
    title: "Red jacket for sale",
    price: 300,
    image: require("../../assets/images/jacket.jpg"),
  },
  {
    id: 4,
    title: "Red jacket for sale",
    price: 999,
    image: require("../../assets/images/jacket.jpg"),
  },
  {
    id: 5,
    title: "Couch in great condition",
    price: 5000,
    image: require("../../assets/images/couch.jpg"),
  },
  {
    id: 6,
    title: "Red jacket for sale",
    price: 600,
    image: require("../../assets/images/jacket.jpg"),
  },
  {
    id: 7,
    title: "Red jacket for sale",
    price: 700,
    image: require("../../assets/images/jacket.jpg"),
  },
  {
    id: 8,
    title: "Red jacket for sale",
    price: 800,
    image: require("../../assets/images/jacket.jpg"),
  },
  {
    id: 9,
    title: "Red jacket for sale",
    price: 900,
    image: require("../../assets/images/jacket.jpg"),
  },
  {
    id: 10,
    title: "Red jacket for sale",
    price: 10,
    image: require("../../assets/images/jacket.jpg"),
  },
];//import a list of ten

const ListingsScreen: React.FC<ListingsScreenProps> = ({
  data = { listings }
}) => {

  // function ListingsScreen(props) {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: defaultStyles.colors.lightGrey,
  },
});

export default ListingsScreen;
