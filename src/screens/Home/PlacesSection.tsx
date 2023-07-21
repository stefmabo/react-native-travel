import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ProgressiveImage from '#common/ProgressiveImage';
import RoundedIconButton from '#src/common/RoundedIconButton';
import Text from '#src/common/Text';
import { FILLED_HEART_COLOR, PLACE_IMAGES } from '#src/constants';
import { PlaceDetailNavigation } from '#src/types';

const PlacesSection = (): JSX.Element => {
  const [state, setState] = useState(PLACE_IMAGES);
  const navigation = useNavigation<PlaceDetailNavigation>();
  return (
    <View className="top-40 flex-row justify-around">
      {Object.entries(state).map(([key, place]) => {
        const { label, image, isFavorite } = place;
        return (
          <TouchableOpacity
            key={key}
            onPress={() => {
              navigation.navigate('PlaceDetail', { placeId: key });
            }}>
            <View className="flex relative" style={styles.image}>
              <ProgressiveImage
                resizeMode="cover"
                style={styles.image}
                className="rounded-3xl"
                wrapperClassName="rounded-3xl"
                source={image}
              />

              <View className="top-3 right-4 absolute">
                <RoundedIconButton
                  onPress={() => {
                    setState({
                      ...state,
                      [key]: { ...place, isFavorite: !isFavorite },
                    });
                  }}
                  width={35}
                  height={35}
                  iconSize={15}
                  icon="heart"
                  color={isFavorite ? FILLED_HEART_COLOR : 'white'}
                />
              </View>

              <LinearGradient
                className="absolute bottom-0 h-20 w-full z-10 rounded-b-3xl flex justify-end"
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.5, y: 0 }}
                colors={['black', 'rgba(255,255,255,0)']}>
                <Text className="mb-2 text-white font-bold py-2 px-3 leading-5">
                  {label}
                </Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = {
  image: {
    width: 150,
    height: 200,
  },
};

export default PlacesSection;
