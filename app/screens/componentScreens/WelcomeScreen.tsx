import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import defaultStyles from "../../constants/styles";
import AppButton from "../../components/AppButton";

interface WelcomeScreenProps { }

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ }) => {
  return (
    <ImageBackground
      blurRadius={3}
      source={require("../../assets/images/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo-red.png")}
          style={styles.logo}
        />
        <Text
          style={styles.tagline}>
          Sell What You Don't Need
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
        />
        <AppButton
          title="Register"
          color="secondary"
        // color={defaultStyles.colors.secondary}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  // loginButton: {
  //   width: "100%",
  //   height: 70,
  //   backgroundColor: defaultStyles.colors.primary,
  // },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  // registerButton: {
  //   width: "100%",
  //   height: 70,
  //   backgroundColor: defaultStyles.colors.secondary,
  // },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});