import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = (): JSX.Element => (
  <View className="h-14 top-10 flex-row items-center rounded-3xl bg-gray-200 px-5">
    <Icon name="search" size={25} color="grey" />
    <View className="pl-4">
      <TextInput
        placeholderTextColor="gray"
        className="flex-1"
        value="Fano's Island"
      />
    </View>
  </View>
);

export default SearchBar;
