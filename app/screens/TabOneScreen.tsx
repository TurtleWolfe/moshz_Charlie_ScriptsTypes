import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import AppListItem from '../components/lists/AppListItem';
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import AppText from '../components/AppText';

import ListingDetailsScreen from './componentScreens/ListingDetailsScreen';
import ViewImgageScreen from './componentScreens/ViewImageScreen';
import WelcomeScreen from './componentScreens/WelcomeScreen';

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

      {/* <AppListItem /> */}
      {/* <AppText /> */}

      {/* <ListingDetailsScreen /> */}
      <ViewImgageScreen />
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
