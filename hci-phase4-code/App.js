import * as React from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider as ThemeProvider } from '@draftbit/ui';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import AppNavigator from './AppNavigator';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import YummyTheme from './themes/YummyTheme.js';

export default class App extends React.PureComponent {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={cacheAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <SafeAreaProvider>
        <GlobalVariableProvider>
          <ThemeProvider theme={YummyTheme}>
            <AppNavigator />
          </ThemeProvider>
        </GlobalVariableProvider>
      </SafeAreaProvider>
    );
  }
}
