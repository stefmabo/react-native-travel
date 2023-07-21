import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import cx from 'classnames';
import Text from '#src/common/Text';
import { HOME_TABS } from '#src/constants';
import { HomeTabsType } from '#src/types';

const HomeTabs = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<HomeTabsType>(HOME_TABS[1]);
  return (
    <View className="flex-row top-32 justify-between items-center rounded-3xl bg-gray-200 px-5 h-14">
      {HOME_TABS.map(tab => (
        <TouchableOpacity
          key={tab}
          className="h-full"
          onPress={() => {
            setSelectedTab(tab);
          }}>
          <View className={cx('flex justify-center h-full')}>
            <View
              className={cx({
                'bg-white py-3 px-4 rounded-3xl text-red-400 shadow-md':
                  selectedTab === tab,
              })}>
              <Text
                className={cx({
                  ' text-red-400 font-bold': selectedTab === tab,
                  ' text-gray-400 font-bold': selectedTab !== tab,
                })}>
                {tab}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeTabs;
