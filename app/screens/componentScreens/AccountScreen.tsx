import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppListItem from "../../components/lists/AppListItem";
import AppListItemSeparatorComponent from "../../components/lists/AppListItemSeparator";

import defaultStyles from "../../constants/styles";
// import colors from "../config/colors";
import AppIcon from "../../components/AppIcon";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: defaultStyles.colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: defaultStyles.colors.secondary,
    },
  },
];

interface AccountScreenProps {
  title?: string;
  subTitle?: string;
  image?: {};
}

const AccountScreen: React.FC<AccountScreenProps> = ({
  // title = "Mosh Hamedani",
  // title = 'default',
  // subTitle = "programmingwithmosh@gmail.com",
  // subTitle = 'default',
  // image = { require("../assets/mosh.jpg") }
  // image,
}) => {
  // function AccountScreen(props) {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <AppListItem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../../assets/images/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={AppListItemSeparatorComponent}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <AppListItem
        title="Log Out"
        IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.lightGrey,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
