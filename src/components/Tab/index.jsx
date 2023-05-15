import { Pressable, Text } from "react-native";
import tw from "twrnc";

const Tab = ({ tab, onClick, tabStyle, textStyle }) => {
  return (
    <Pressable
      style={[tw`py-2 px-2.5 border`, tabStyle]}
      onPress={() => onClick(tab)}
    >
      <Text style={textStyle}>{tab.title}</Text>
    </Pressable>
  );
};

export default Tab;
