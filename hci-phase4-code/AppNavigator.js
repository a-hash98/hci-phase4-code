import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/YummyTheme.js';

import AppSettingsScreen from './screens/AppSettingsScreen';
import ArticleExampleScreen from './screens/ArticleExampleScreen';
import ArticlePreferencesScreen from './screens/ArticlePreferencesScreen';
import ArticlesPgeScreen from './screens/ArticlesPgeScreen';
import ChatPgeScreen from './screens/ChatPgeScreen';
import CustomizePgeScreen from './screens/CustomizePgeScreen';
import DashboardPgeScreen from './screens/DashboardPgeScreen';
import DonatePgeScreen from './screens/DonatePgeScreen';
import NotificationsPgeScreen from './screens/NotificationsPgeScreen';
import PermissionsPgeScreen from './screens/PermissionsPgeScreen';
import ReportExampleScreen from './screens/ReportExampleScreen';
import SignupPgeScreen from './screens/SignupPgeScreen';
import SyncPgeScreen from './screens/SyncPgeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignupPgeScreen"
        screenOptions={{
          headerBackTitle: ' ',
        }}
      >
        <Stack.Screen
          name="AppSettingsScreen"
          component={AppSettingsScreen}
          options={{ headerShown: false, title: 'App Settings' }}
        />
        <Stack.Screen
          name="ArticleExampleScreen"
          component={ArticleExampleScreen}
          options={{ headerShown: false, title: 'Article Example' }}
        />
        <Stack.Screen
          name="SyncPgeScreen"
          component={SyncPgeScreen}
          options={{ headerShown: false, title: 'Sync Pge' }}
        />
        <Stack.Screen
          name="ChatPgeScreen"
          component={ChatPgeScreen}
          options={{ headerShown: false, title: 'Chat Pge' }}
        />
        <Stack.Screen
          name="NotificationsPgeScreen"
          component={NotificationsPgeScreen}
          options={{ headerShown: false, title: 'Notifications Pge' }}
        />
        <Stack.Screen
          name="CustomizePgeScreen"
          component={CustomizePgeScreen}
          options={{
            headerShown: false,
            headerTransparent: true,
            title: 'Customize Pge',
          }}
        />
        <Stack.Screen
          name="SignupPgeScreen"
          component={SignupPgeScreen}
          options={{ headerShown: false, title: 'Signup Pge' }}
        />
        <Stack.Screen
          name="ArticlePreferencesScreen"
          component={ArticlePreferencesScreen}
          options={{ headerShown: false, title: 'Article Preferences' }}
        />
        <Stack.Screen
          name="ArticlesPgeScreen"
          component={ArticlesPgeScreen}
          options={{ headerShown: false, title: 'Articles Pge' }}
        />
        <Stack.Screen
          name="DonatePgeScreen"
          component={DonatePgeScreen}
          options={{ headerShown: false, title: 'Donate Pge' }}
        />
        <Stack.Screen
          name="PermissionsPgeScreen"
          component={PermissionsPgeScreen}
          options={{ headerShown: false, title: 'Permissions Pge' }}
        />
        <Stack.Screen
          name="DashboardPgeScreen"
          component={DashboardPgeScreen}
          options={{ headerShown: false, title: 'Dashboard Pge' }}
        />
        <Stack.Screen
          name="ReportExampleScreen"
          component={ReportExampleScreen}
          options={{ headerShown: false, title: 'Report Example' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
