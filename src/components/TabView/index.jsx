import React from "react";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";

const TabView = ({
  title,
  tabColor,
  removeHandler,
  containerStyle,
  titleStyle,
  buttonStyle,
  buttonTextStyle,
  buttonText,
}) => (
  <View
    style={[
      tw`h-full items-center pt-70`,
      { backgroundColor: tabColor },
      containerStyle,
    ]}
  >
    <Text style={titleStyle}>{title}</Text>
    <Pressable
      style={[tw`border p-5 py-2.5 mt-5`, buttonStyle]}
      onPress={removeHandler}
    >
      <Text style={buttonTextStyle}>{buttonText}</Text>
    </Pressable>
  </View>
);

export default TabView;
