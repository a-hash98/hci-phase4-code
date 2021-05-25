import React from 'react';
import { ButtonSolid, Link, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const NotificationsPgeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles.ScreenContainer_1V}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles.View_2j} />
      <View style={styles.ViewDp}>
        <Text style={[styles.TextRi, { color: theme.colors.strong }]}>
          {'Turn On Notifications'}
        </Text>

        <Text style={[styles.TextyI, { color: theme.colors.strong }]}>
          {'Stay up to date with the latest updates and alerts. '}
        </Text>
      </View>

      <View>
        <Link
          style={[styles.LinkEm, { color: theme.colors.light }]}
          title="no thanks"
        />
        <ButtonSolid
          style={[
            styles.ButtonSolidzM,
            { backgroundColor: theme.colors.primary, borderRadius: 64 },
          ]}
          title="ENABLE NOTIFICATIONS"
        >
          {`Sign Up`}
        </ButtonSolid>
        <Link
          onPress={() => navigation.navigate('AppSettingsScreen', {})}
          style={[styles.Linkuv, { color: theme.colors.light }]}
          title="BACK"
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  View_2j: {
    alignItems: 'baseline',
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
  },
  TextRi: {
    textAlign: 'center',
    lineHeight: 32,
    fontSize: 24,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextyI: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  ViewDp: {
    alignItems: 'center',
  },
  LinkEm: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 0,
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '600',
  },
  ButtonSolidzM: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 16,
    width: 210,
    left: 70,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Linkuv: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 0,
    textAlign: 'center',
    top: 30,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ScreenContainer_1V: {
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
    flexWrap: 'wrap',
  },
});

export default withTheme(NotificationsPgeScreen);
