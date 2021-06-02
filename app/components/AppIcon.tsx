import React from 'react'
import { View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";


import defaultStyles from "../constants/styles";
// import colors from '../../constants/Colors'


interface AppIconProps {
  backgroundColor?: string;
  iconColor?: string;
  name?: string;
  size?: number;
}

const AppIcon: React.FC<AppIconProps> = ({
  backgroundColor = defaultStyles.colors.danger,
  iconColor = defaultStyles.colors.lightGrey,
  name = "email",
  size = 40,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        size={size * 0.6}
      // backgroundColor={backgroundColor}
      />
    </View>
  )
}

export default AppIcon

// const styles = StyleSheet.create({ })
