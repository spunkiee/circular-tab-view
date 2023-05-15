import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";

// Components
import TabView from "../TabView";
import Tab from "../Tab";

import { formRandomColor } from "../../helpers";

const initialTabsData = [
  {
    id: 0,
    title: "Tab 0",
    tabColor: formRandomColor(),
  },
  {
    id: 1,
    title: "Tab 1",
    tabColor: formRandomColor(),
  },
];

const CircularTabView = ({
  tabContainerStyle,
  buttonStyle,
  buttonTitleStyle,
  buttonText,
  tabsContainerStyle,
  tabStyle,
  tabViewStyle,
}) => {
  const [currentItem, setCurrentItem] = useState(initialTabsData[0]);
  const [tabsData, setTabsData] = useState(initialTabsData);
  const [counter, setCounter] = useState(1);

  const onAddNewTabClick = () => {
    setTabsData([
      ...tabsData,
      {
        title: `Tab ${counter + 1}`,
        id: counter + 1,
        tabColor: formRandomColor(),
      },
    ]);
    setCurrentItem({
      title: `Tab ${counter + 1}`,
      id: counter + 1,
      tabColor: formRandomColor(),
    });
    setCounter((prev) => prev + 1);
  };

  const removeHandler = (id) => {
    if (tabsData.length === 1) return;
    if (currentItem.id === tabsData[0].id) setCurrentItem(tabsData[1]);

    if (currentItem.id !== tabsData[0].id)
      for (let i = 0; i < tabsData.length; i++)
        if (tabsData[i].id === id) setCurrentItem(tabsData[i - 1]);

    setTabsData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={tabContainerStyle}>
      <View style={[tw`w-full items-center`, buttonStyle]}>
        <Pressable
          style={tw`px-10 py-2.5 border mt-12.5 w-50`}
          onPress={onAddNewTabClick}
        >
          <Text style={[tw`text-center`, buttonTitleStyle]}>{buttonText}</Text>
        </Pressable>
      </View>
      <View style={[tw`flex-row mt-5 ml-5`, tabsContainerStyle]}>
        {tabsData?.map((tab) => (
          <View key={tab.id} style={[tw`mr-2.5`, tabStyle]}>
            <Tab tab={tab} onClick={(tab) => setCurrentItem(tab)} />
          </View>
        ))}
      </View>
      <View style={[tw`mt-2.5`, tabViewStyle]}>
        <TabView
          title={currentItem.title}
          tabColor={currentItem.tabColor}
          removeHandler={() => removeHandler(currentItem.id)}
          buttonText="Remove Tab"
        />
      </View>
    </View>
  );
};

export default CircularTabView;
