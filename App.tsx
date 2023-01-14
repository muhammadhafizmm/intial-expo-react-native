import React, { useCallback, useEffect } from 'react'
import { View, Text } from 'react-native';

import Container from './src/common/Container';
import { LandingPage } from './src/app/landingPage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font'
import { customFont } from './src/lib/ui/font';

import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

const App: React.FC<{}> = () => {
  const [isAppReady] = useFonts(customFont)

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await new Promise(resolve => setTimeout(resolve, 3000));
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Container>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Landing Page' component={LandingPage} />
        </Stack.Navigator>
      </Container>
    </NavigationContainer>

  );
}
export default App