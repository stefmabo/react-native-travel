import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type RoundedIconButtonProps = {
  icon: string;
  onPress?: () => void;
  color?: string;
  className?: string;
  width?: number;
  height?: number;
  iconSize?: number;
};

const RoundedIconButton = ({
  icon,
  onPress,
  color = 'white',
  className,
  width = 50,
  height = 50,
  iconSize = 17,
}: RoundedIconButtonProps) => (
  <TouchableOpacity className={className} onPress={onPress}>
    <View className="flex justify-center items-center h-9 w-9 rounded-full text-orange">
      <View
        style={{ width, height }}
        className="absolute rounded-full bg-gray-200 opacity-60"
      />
      <Icon name={icon} color={color} size={iconSize} />
    </View>
  </TouchableOpacity>
);

export default RoundedIconButton;
