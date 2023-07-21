import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import cx from 'classnames';

type PrimaryButtonProps = {
  onPress: () => void;
  text: string;
  wrapperClassName?: string;
};

const PrimaryButton = ({
  onPress,
  text,
  wrapperClassName,
}: PrimaryButtonProps): JSX.Element => (
  <TouchableOpacity
    className={cx('bg-red-400 rounded-full', wrapperClassName)}
    onPress={onPress}>
    <View className="py-3">
      <Text className="text-center text-white text-2xl font-medium">
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

export default PrimaryButton;
