import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '#screens/Home/Home';
import PlaceDetail from '#screens/PlaceDetail/PlaceDetail';
import Splash from '#screens/Splash/Splash';
import { APP_BACKGROUND_COLOR } from './constants';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const stackScreenCommonProps = {
  headerShown: false,
};

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          contentStyle: { backgroundColor: APP_BACKGROUND_COLOR },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={stackScreenCommonProps}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={stackScreenCommonProps}
        />
        <Stack.Screen
          name="PlaceDetail"
          component={PlaceDetail}
          options={stackScreenCommonProps}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
