import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

//  App components
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
// import AppCategoryPickerItem from '../components/AppCategoryPickerItem';
import AppIcon from '../components/AppIcon';
// import AppPicker from '../components/AppPicker';
// import AppPickerItem from '../components/AppPickerItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
// import AppTextInput from '../components/AppTextInput';

//  App form Components
// import AppErrorMessage from '../components/forms/AppErrorMessage';
// import AppForm from '../components/forms/AppForm';
// import AppFormField from '../components/forms/AppFormField';
// import AppFormPicker from '../components/forms/AppFormPicker';
// import AppSubmitButton from '../components/forms/AppSubmitButton';

//  App lists Components
import AppListItem from '../components/lists/AppListItem';
import AppListItemDeleteAction from '../components/lists/AppListItemDeleteAction';
import AppListItemSeparator from '../components/lists/AppListItemSeparator';

//  App component Screens
import AccountScreen from './componentScreens/AccountScreen';
import ListingDetailsScreen from './componentScreens/ListingDetailsScreen';
// import ListingEditScreen from './componentScreens/ListingEditScreen';
import ListingsScreen from './componentScreens/ListingsScreen';
// import LoginScreen from './componentScreens/LoginScreen';
import MessagesScreen from './componentScreens/MessagesScreen';
// import RegisteerScreen from './componentScreens/RegisteerScreen';
import ViewImgageScreen from './componentScreens/ViewImageScreen';
import WelcomeScreen from './componentScreens/WelcomeScreen';

import defaultStyles from "../constants/styles";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>

      {/* <AppButton /> */}

      {/* <AppButton
        title='login'
        onPress={() => console.log('tapped login')}
      /> */}

      {/* <AppCard /> */}

      {/* <AppCard
        image={require('../assets/images/jacket.jpg')}
        title='Tab One Screen'
        subTitle='$ Tab One Screen'
      /> */}

      {/* <AppIcon /> */}

      {/* <AppIcon
        backgroundColor={defaultStyles.colors.danger}
        iconColor={defaultStyles.colors.lightGrey}
        name="email"
        size={40}
      /> */}

      {/* <AppScreen
        children={<AppListItemDeleteAction
          onPress={() => console.log("passing Element Type to AppScreen component")}
        />}
        style={styles}
      /> */}

      {/* <AppText /> */}

      {/* <AppListItem /> */}

      {/* <AppListItemDeleteAction
        onPress={() => console.log("tabOne delete Action")}
      /> */}

      {/* <AppListItemSeparator /> */}

      {/* <AccountScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <ListingsScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <ViewImgageScreen /> */}
      {/* <WelcomeScreen /> */}

      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
