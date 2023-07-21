import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  PlaceDetail: { placeId: string };
};

export type Place = {
  image: number;
  label: string;
  isFavorite: boolean;
  description: string;
};

export type PlaceImages = {
  [key: string]: Place;
};

export type Images = {
  [key: string]: {
    image: number;
    label: string;
  };
};

export type PlaceDetailNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'PlaceDetail'
>;

export type PlaceDetailTabsType = 'description' | 'review';
export type HomeTabsType = 'All' | 'Popular' | 'Recommended' | 'More';
