import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Text from '#src/common/Text';
import CategoriesCarousel from './CategoriesCarousel';
import FooterMenu from './FooterMenu';
import HomeTabs from './HomeTabs';
import PlacesSection from './PlacesSection';
import SearchBar from './SearchBar';

const Home = (): JSX.Element => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="mx-6 relative h-full">
        <View className="mt-4 flex-row justify-between items-center">
          <Text className="font-bold text-3xl">Let's Discover</Text>
        </View>
        <SearchBar />
        <View className="top-20 flex-row justify-between items-center">
          <Text className="text-lg font-bold ">Categories</Text>
          <View className="border-b-2 border-b-red-400 border-red">
            <Text className="text-red-400 font-bold">See All</Text>
          </View>
        </View>
        <CategoriesCarousel />
        <HomeTabs />
        <PlacesSection />
        <FooterMenu />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
