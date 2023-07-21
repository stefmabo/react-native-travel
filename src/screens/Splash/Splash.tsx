import React from 'react';
import { Image, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import splashImage from '#assets/splash.png';
import PrimaryButton from '#common/PrimaryButton';
import Text from '#src/common/Text';
import { windowHeight, windowWidth } from '#src/constants';
import { RootStackParamList } from '#src/types';

type SplashProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
};

const Splash = ({ navigation }: SplashProps): JSX.Element => {
  return (
    <View className="w-full">
      <Image
        style={{ width: windowWidth, height: windowHeight }}
        source={splashImage}
        resizeMode="cover"
      />
      <View className="absolute bottom-10 px-6 w-full">
        <Text className="text-white text-4xl font-bold">
          Traveling made easy!
        </Text>
        <Text className="text-white text-2xl mt-4">
          Experience the world's best adventure around the world with us
        </Text>
        <PrimaryButton
          wrapperClassName="mx-auto mt-4 w-1/2"
          text={"Let's go!"}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
};

export default Splash;
