import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryButton from '#common/PrimaryButton';
import ProgressiveImage from '#common/ProgressiveImage';
import Text from '#src/common/Text';
import { PLACE_IMAGES, windowHeight, windowWidth } from '#src/constants';
import {
  PlaceDetailNavigation,
  PlaceDetailTabsType,
  RootStackParamList,
} from '#src/types';
import NavigationButtons from './NavigationButtons';
import PlaceDetailTabs from './PlaceDetailTabs';

type Props = {
  route: RouteProp<RootStackParamList, 'PlaceDetail'>;
  navigation: PlaceDetailNavigation;
};

const PlaceDetail = ({ route, navigation }: Props): JSX.Element => {
  const { placeId = 'osaka_castle' } = route?.params || {};
  const { image, isFavorite, label, description } = PLACE_IMAGES[placeId] || {};

  const [tab, setTab] = useState<PlaceDetailTabsType>('description');

  return (
    <>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        className="absolute top-0 h-64 w-full z-10"
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={['black', 'rgba(255,255,255,0)']}
      />
      <NavigationButtons
        handleGoBack={() => navigation.goBack()}
        handleFavorite={() => {}}
        isFavorite={isFavorite}
      />
      <View style={styles.view}>
        <ProgressiveImage
          style={{ width: windowWidth, height: windowHeight / 1.7 }}
          source={image}
          resizeMode="cover"
          className="rounded-b-3xl"
        />
        <View className="mt-5 mx-6">
          <Text className="text-3xl text-gray-800 font-bold">{label}</Text>
          <PlaceDetailTabs
            onChangeTab={selectedTab => {
              setTab(selectedTab);
            }}
            tab={tab}
          />
          <View className="mt-5">
            <Text className="text-gray-500 font-bold leading-6">
              {description}
            </Text>
          </View>
        </View>
      </View>

      <View className="z-10  bottom-14 absolute w-full">
        <PrimaryButton
          wrapperClassName="w-40 mx-auto"
          text="Book"
          onPress={() => {}}
        />
      </View>

      <LinearGradient
        className="absolute bottom-0 h-52 w-full"
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        colors={['#ffffff', 'rgba(255,255,255,0)']}
      />
    </>
  );
};

const styles = {
  view: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.1,
    shadowRadius: 13.97,
  },
};

export default PlaceDetail;
