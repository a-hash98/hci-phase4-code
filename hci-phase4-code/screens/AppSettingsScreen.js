import React from 'react';
import {
  ButtonSolid,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const AppSettingsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles.ScreenContainerbJ}
      scrollable={true}
      hasSafeArea={true}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewV4}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View>
          <View style={styles.Viewuw}>
            <Text style={[styles.TextvK, { color: theme.colors.secondary }]}>
              {'Settings & Permissions'}
            </Text>
          </View>

          <View style={styles.ViewYS}>
            <Divider
              style={styles.DividerLx}
              height={1}
              color={theme.colors.divider}
            />
            <Touchable
              onPress={() =>
                navigation.navigate('NotificationPreferencesScreen', {})
              }
            >
              <View style={styles.Viewtj}>
                <View style={styles.VieweL}>
                  <View style={styles.ViewMf}>
                    <Icon
                      style={styles.Iconrp}
                      size={34}
                      color={theme.colors.strong}
                      name="FontAwesome/user-circle"
                    />
                  </View>

                  <View>
                    <Text
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.strong },
                      ]}
                      allowFontScaling={true}
                      ellipsizeMode="tail"
                      textBreakStrategy="highQuality"
                    >
                      {'Profile'}
                    </Text>
                  </View>
                </View>
                <Icon
                  style={styles.IconIj}
                  name="Ionicons/ios-arrow-forward"
                  color={theme.colors.strong}
                  size={24}
                />
              </View>
            </Touchable>
            <Divider
              style={styles.DividerrX}
              height={1}
              color={theme.colors.divider}
            />
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('NotificationPreferencesScreen', {});
                  navigation.navigate('NotificationsPgeScreen', {});
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.Viewr6}>
                <View style={styles.ViewWt}>
                  <View style={styles.Viewej}>
                    <Icon
                      style={styles.Icon_4e}
                      size={34}
                      color={theme.colors.strong}
                      name="MaterialIcons/notifications"
                    />
                  </View>

                  <View>
                    <Text
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.strong },
                      ]}
                      allowFontScaling={true}
                      ellipsizeMode="tail"
                      textBreakStrategy="highQuality"
                    >
                      {`Notifications`}
                    </Text>
                  </View>
                </View>
                <Icon
                  style={styles.IcondF}
                  name="Ionicons/ios-arrow-forward"
                  color={theme.colors.strong}
                  size={24}
                />
              </View>
            </Touchable>
            <Divider
              style={styles.DivideriF}
              height={1}
              color={theme.colors.divider}
            />
            <Touchable>
              <View style={styles.ViewZj}>
                <View style={styles.Viewva}>
                  <View style={styles.ViewEz}>
                    <Icon
                      style={styles.IconiF}
                      color={theme.colors.strong}
                      name="Entypo/wallet"
                      size={34}
                    />
                  </View>

                  <View>
                    <Text
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.strong },
                      ]}
                      ellipsizeMode="tail"
                      allowFontScaling={true}
                      textBreakStrategy="highQuality"
                    >
                      {'Wallet'}
                    </Text>
                  </View>
                </View>
                <Icon
                  style={styles.IconVU}
                  size={24}
                  color={theme.colors.strong}
                  name="Ionicons/ios-arrow-forward"
                />
              </View>
            </Touchable>
            <Divider
              style={styles.Dividerya}
              color={theme.colors.divider}
              height={1}
            />
            <Touchable>
              <View style={styles.ViewVy}>
                <View style={styles.Viewmj}>
                  <View style={styles.View_3N}>
                    <Icon
                      style={styles.IconKN}
                      color={theme.colors.strong}
                      name="Ionicons/ios-cash"
                      size={34}
                    />
                  </View>

                  <View>
                    <Text
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.strong },
                      ]}
                      ellipsizeMode="tail"
                      textBreakStrategy="highQuality"
                      allowFontScaling={true}
                    >
                      {'Subscription Plan'}
                    </Text>
                  </View>
                </View>
                <Icon
                  style={styles.IconC4}
                  color={theme.colors.strong}
                  name="Ionicons/ios-arrow-forward"
                  size={24}
                />
              </View>
            </Touchable>
            <Divider
              style={styles.Dividerkj}
              color={theme.colors.divider}
              height={1}
            />
            <Touchable
              onPress={() => navigation.navigate('PermissionsPgeScreen', {})}
            >
              <View style={styles.ViewYL}>
                <View style={styles.ViewmL}>
                  <View style={styles.ViewLb}>
                    <Icon
                      style={styles.IconNp}
                      name="MaterialCommunityIcons/information"
                      color={theme.colors.strong}
                      size={34}
                    />
                  </View>

                  <View>
                    <Text
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.strong },
                      ]}
                      textBreakStrategy="highQuality"
                      ellipsizeMode="tail"
                      allowFontScaling={true}
                    >
                      {'Privacy & Permissions'}
                    </Text>
                  </View>
                </View>
                <Icon
                  style={styles.IconuD}
                  name="Ionicons/ios-arrow-forward"
                  color={theme.colors.strong}
                  size={24}
                />
              </View>
            </Touchable>
            <Divider
              style={styles.DividerQ5}
              color={theme.colors.divider}
              height={1}
            />
            <Touchable onPress={() => navigation.navigate('ChatPgeScreen', {})}>
              <View style={styles.View_9j}>
                <View style={styles.ViewWB}>
                  <View style={styles.Viewql}>
                    <Icon
                      style={styles.Iconpl}
                      name="AntDesign/wechat"
                      color={theme.colors.strong}
                      size={34}
                    />
                  </View>

                  <View>
                    <Text
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.strong },
                      ]}
                      textBreakStrategy="highQuality"
                      ellipsizeMode="tail"
                      allowFontScaling={true}
                    >
                      {'Chat'}
                    </Text>
                  </View>
                </View>
                <Icon
                  style={styles.IconFb}
                  name="Ionicons/ios-arrow-forward"
                  color={theme.colors.strong}
                  size={24}
                />
              </View>
            </Touchable>

            <Touchable onPress={() => navigation.navigate('SyncPgeScreen', {})}>
              <View style={styles.ViewCA}>
                <View style={styles.ViewO8}>
                  <View style={styles.ViewaJ}>
                    <Icon
                      style={styles.IconEg}
                      name="MaterialCommunityIcons/sync"
                      color={theme.colors.strong}
                      size={34}
                    />
                  </View>

                  <View>
                    <Text
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.strong },
                      ]}
                      textBreakStrategy="highQuality"
                      ellipsizeMode="tail"
                      allowFontScaling={true}
                    >
                      {'Sync'}
                    </Text>
                  </View>
                </View>
                <Icon
                  style={styles.IconCT}
                  name="Ionicons/ios-arrow-forward"
                  color={theme.colors.strong}
                  size={24}
                />
              </View>
            </Touchable>
          </View>
        </View>

        <View style={[styles.View_4b, { borderRadius: 0 }]}>
          <ButtonSolid
            onPress={() => navigation.navigate('SignupPgeScreen', {})}
            style={[
              styles.ButtonSolid_6C,
              { backgroundColor: theme.colors.primary },
            ]}
            title="Sign Out"
          />
          <ButtonSolid
            onPress={() => navigation.navigate('DashboardPgeScreen', {})}
            style={[
              styles.ButtonSolid_4Q,
              { backgroundColor: theme.colors.primary },
            ]}
            title="Dashboard"
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextvK: {
    textAlign: 'left',
    marginBottom: 6,
    fontSize: 25,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewuw: {
    paddingBottom: 24,
    paddingTop: 44,
    paddingLeft: 32,
    paddingRight: 32,
    alignItems: 'center',
  },
  DividerLx: {
    height: 1,
  },
  Iconrp: {
    height: 40,
    width: 40,
    maxWidth: 40,
    maxHeight: 40,
  },
  ViewMf: {
    width: 34,
    height: 34,
    marginRight: 14,
    maxWidth: 34,
    maxHeight: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  VieweL: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
  },
  IconIj: {
    height: 24,
    width: 24,
  },
  Viewtj: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  DividerrX: {
    height: 1,
  },
  Icon_4e: {
    height: 40,
    width: 40,
    maxWidth: 40,
    maxHeight: 40,
  },
  Viewej: {
    width: 34,
    height: 34,
    marginRight: 14,
    maxWidth: 34,
    maxHeight: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewWt: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
  },
  IcondF: {
    height: 24,
    width: 24,
  },
  Viewr6: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  DivideriF: {
    height: 1,
  },
  IconiF: {
    width: 40,
    maxWidth: 40,
    maxHeight: 40,
    height: 40,
  },
  ViewEz: {
    maxHeight: 34,
    maxWidth: 34,
    width: 34,
    height: 34,
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Viewva: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
  },
  IconVU: {
    width: 24,
    height: 24,
  },
  ViewZj: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  Dividerya: {
    height: 1,
  },
  IconKN: {
    height: 40,
    maxHeight: 40,
    width: 40,
    maxWidth: 40,
  },
  View_3N: {
    marginRight: 14,
    maxHeight: 34,
    maxWidth: 34,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Viewmj: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    maxWidth: '80%',
  },
  IconC4: {
    width: 24,
    height: 24,
  },
  ViewVy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  Dividerkj: {
    height: 1,
  },
  IconNp: {
    maxHeight: 40,
    width: 40,
    maxWidth: 40,
    height: 40,
  },
  ViewLb: {
    height: 34,
    marginRight: 14,
    maxHeight: 34,
    maxWidth: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewmL: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
  },
  IconuD: {
    height: 24,
    width: 24,
  },
  ViewYL: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  DividerQ5: {
    height: 1,
  },
  Iconpl: {
    maxHeight: 40,
    width: 40,
    maxWidth: 40,
    height: 40,
  },
  Viewql: {
    height: 34,
    marginRight: 14,
    maxHeight: 34,
    maxWidth: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewWB: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
  },
  IconFb: {
    height: 24,
    width: 24,
  },
  View_9j: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  IconEg: {
    maxHeight: 40,
    width: 40,
    maxWidth: 40,
    height: 40,
  },
  ViewaJ: {
    height: 34,
    marginRight: 14,
    maxHeight: 34,
    maxWidth: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewO8: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
  },
  IconCT: {
    height: 24,
    width: 24,
  },
  ViewCA: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  ViewYS: {
    paddingLeft: 32,
    paddingBottom: 14,
    paddingTop: 14,
    paddingRight: 32,
  },
  ButtonSolid_6C: {
    borderRadius: 8,
    textAlign: 'center',
    paddingBottom: 2,
    bottom: 58,
    right: 70,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ButtonSolid_4Q: {
    borderRadius: 8,
    textAlign: 'center',
    paddingBottom: 2,
    bottom: 100,
    left: 70,
    fontFamily: 'System',
    fontWeight: '700',
  },
  View_4b: {
    marginTop: 44,
    paddingTop: 14,
    paddingBottom: 34,
    paddingRight: 32,
    paddingLeft: 32,
    alignItems: 'center',
  },
  ScrollViewV4: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  ScreenContainerbJ: {
    flexWrap: 'wrap',
  },
});

export default withTheme(AppSettingsScreen);
