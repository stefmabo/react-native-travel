import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { PlaceDetailTabsType } from '#src/types';

type PlaceDetailTabsProps = {
  tab: PlaceDetailTabsType;
  onChangeTab: (selectedTab: PlaceDetailTabsType) => void;
};

const PlaceDetailTabs = ({ tab, onChangeTab }: PlaceDetailTabsProps) => {
  return (
    <View className="mt-3 flex-row gap-x-6">
      <TouchableOpacity
        className="relative flex items-center"
        onPress={() => onChangeTab('description')}>
        <Text className="text-lg text-gray-500 font-medium ">Description</Text>
        {tab === 'description' && <TabLine />}
      </TouchableOpacity>
      <TouchableOpacity
        className="relative flex items-center"
        onPress={() => onChangeTab('review')}>
        <Text className="text-lg text-gray-500 font-medium">Review</Text>
        {tab === 'review' && <TabLine />}
      </TouchableOpacity>
    </View>
  );
};

const TabLine = () => <View style={styles.tabLine} className="bg-red-400" />;

const styles = {
  tabLine: {
    height: 3,
    width: '70%',
    bottom: -5,
  },
};

export default PlaceDetailTabs;
