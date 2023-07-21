import React, { useRef } from 'react';
import {
  Animated,
  ImageProps,
  ImageStyle,
  StyleSheet,
  View,
} from 'react-native';
import { LOADING_IMAGE_COLOR } from '#src/constants';

type ProgressiveImageProps = {
  source: number;
  style: ImageStyle;
  wrapperClassName?: string;
} & ImageProps;

const ProgressiveImage = ({
  source,
  style,
  wrapperClassName,
  ...props
}: ProgressiveImageProps) => {
  const imageAnimated = useRef(new Animated.Value(0)).current;

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View className={wrapperClassName} style={[styles.container, style]}>
      <Animated.Image
        {...props}
        source={source}
        style={[{ opacity: imageAnimated }, style]}
        onLoad={onImageLoad}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LOADING_IMAGE_COLOR,
  },
});

export default ProgressiveImage;
