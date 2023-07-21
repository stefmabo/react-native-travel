import React from 'react';
import { View } from 'react-native';
import RoundedIconButton from '#src/common/RoundedIconButton';
import { FILLED_HEART_COLOR } from '#src/constants';

type NavigationButtonsProps = {
  handleGoBack: () => void;
  handleFavorite: () => void;
  isFavorite: boolean;
};

const NavigationButtons = ({
  handleGoBack,
  isFavorite,
  handleFavorite,
}: NavigationButtonsProps) => {
  return (
    <View className="absolute top-20 flex flex-row w-full z-20 justify-between px-8">
      <RoundedIconButton
        icon="arrow-back-outline"
        iconSize={25}
        onPress={handleGoBack}
      />
      <RoundedIconButton
        icon="heart"
        iconSize={20}
        onPress={handleFavorite}
        color={isFavorite ? FILLED_HEART_COLOR : 'white'}
      />
    </View>
  );
};

export default NavigationButtons;
