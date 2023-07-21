import React, { useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import ProgressiveImage from '#common/ProgressiveImage';
import Text from '#src/common/Text';
import { CATEGORY_IMAGES_ARRAY } from '#src/constants';

const CategoriesCarousel = (): JSX.Element => {
  const carouselRef = useRef<ICarouselInstance>(null);
  return (
    <View className="top-28">
      <Carousel
        width={90}
        ref={carouselRef}
        style={styles.carousel}
        data={CATEGORY_IMAGES_ARRAY}
        renderItem={({ item: category, animationValue }) => {
          const { label, image } = category;
          return (
            <TouchableOpacity
              key={label}
              onPress={() => {
                carouselRef.current?.scrollTo({
                  count: animationValue.value,
                  animated: true,
                });
              }}>
              <View className="rounded-3xl" style={styles.imageContainer}>
                <ProgressiveImage
                  style={styles.imageContainer}
                  className="rounded-3xl"
                  wrapperClassName="rounded-3xl"
                  source={image}
                />
                <Text className="top-2 text-center">{label}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = {
  carousel: {
    width: '100%',
    height: 100,
  },
  imageContainer: {
    height: 70,
    width: 70,
  },
};

export default CategoriesCarousel;
