/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// imports: libraries + components
import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider, Center, Image} from 'native-base';

// imports
import MoneyliaLogo from './assets/allImages';

const App = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Image source={MoneyliaLogo as any} alt="MoneyliaLogo" />
      </Center>
    </NativeBaseProvider>
  );
};

// const styles = StyleSheet.create({});

export default App;
