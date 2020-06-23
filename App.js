import React, {
  useContext,
  useEffect,
  useState,
}  from 'react';

import {
  View,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import { Provider } from 'react-redux'

import { Root } from 'native-base';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as Icon from '@expo/vector-icons';
import store from './store/store'

import Homescreen from './components/sections/Home';

console.disableYellowBox = true;

export default function App() {
  
  const [loading, setLoading] = useState(true);

  const loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./assets/splash.png'),
    ]),
    Font.loadAsync({
      ...Icon.Entypo.font,
      ...Icon.Feather.font,
      ...Icon.AntDesign.font,
      ...Icon.FontAwesome.font,
      ...Icon.FontAwesome5.font,
      ...Icon.Ionicons.font,
      ...Icon.SimpleLineIcons.font,
      ...Icon.Octicons.font,
      
      
    }),
  ]);

  const handleLoadingError = (error) => {
    console.warn(error);
    throw new Error(`${error}`);
  };

  const handleFinishLoading = () => {
    setLoading(true);
  };


  if (!loading) {
      return (
        <AppLoading
          startAsync={loadResourcesAsync}
          onError={handleLoadingError}
          onFinish={handleFinishLoading}
        />
      );
    }
  return (
    <>
      <Provider store={store}>
        <Root>
          <Homescreen/>
        </Root>
      </Provider>
    </>
  );
}
