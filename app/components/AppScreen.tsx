import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

interface AppScreenProps {
  children?: {};
  style?: any;
}

const AppScreen: React.FC<AppScreenProps> = ({
  children = 'default',
  style = 'default',
}) => {
  // function AppScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default AppScreen;
