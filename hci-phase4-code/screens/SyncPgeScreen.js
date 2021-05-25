import React from 'react';
import * as CustomCode from '../components.js';
import {
  ButtonSolid,
  Icon,
  Link,
  RadioButtonGroup,
  ScreenContainer,
  TextField,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const SyncPgeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textFieldValue, setTextFieldValue] = React.useState('');
  const [radioButtonValue, setRadioButtonValue] = React.useState(undefined);
  const myFunctionName = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules
    TestComp();
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerdY}
      scrollable={false}
      hasSafeArea={true}
    >
      <View style={styles.View_0Z}>
        <Icon
          name="MaterialCommunityIcons/sync"
          color={theme.colors.secondary}
          size={120}
        />
        <Text style={[styles.TextJG, { color: theme.colors.secondary }]}>
          {'Sync'}
        </Text>

        <Text style={[styles.Textav, { color: theme.colors.strong }]}>
          {
            "with apps you already use, in order to integrate data about companies you've already invested in."
          }
        </Text>
        <TextField
          style={styles.TextFieldmz}
          placeholder="Enter app name"
          type="underline"
          value={textFieldValue}
          onChangeText={textFieldValue => setTextFieldValue(textFieldValue)}
        />
        <View style={styles.ViewdR}>
          <Text style={[styles.TextMt, { color: theme.colors.secondary }]}>
            {'Set sync schedule'}
          </Text>
        </View>

        <View style={styles.View_08}>
          <RadioButtonGroup
            style={styles.RadioButtonGroupT7}
            options={[
              { icon: '', label: 'Hourly' },
              { icon: '', label: 'Daily' },
              { icon: '', label: 'Weekly' },
              { icon: '', label: 'Custom' },
              { icon: '', label: 'Manual' },
            ]}
            direction="horizontal"
            activeColor={theme.colors.primary}
            inactiveColor={theme.colors.divider}
            contentColor={theme.colors.surface}
            unselectedContentColor={theme.colors.strong}
            borderColor={theme.colors.light}
            labelStyle={theme.typography.button}
            optionSpacing={0}
            borderRadius={2}
            iconSize={2}
            value={radioButtonValue}
            onSelect={radioButtonValue => setRadioButtonValue(radioButtonValue)}
          />
        </View>
      </View>

      <View style={styles.Viewc8}>
        <ButtonSolid
          style={[
            styles.ButtonSolidnL,
            { backgroundColor: theme.colors.primary },
          ]}
          title="START SYNCING"
        >
          {`Sign Up`}
        </ButtonSolid>
        <Link
          onPress={() => navigation.navigate('AppSettingsScreen', {})}
          style={[styles.Linkaj, { color: theme.colors.light }]}
          title="BACK"
        />
      </View>

      <View style={styles.ViewvW}>
        <ButtonSolid
          style={[
            styles.ButtonSolidwB,
            {
              backgroundColor: theme.colors.primary,
              borderColor: theme.colors.error,
            },
          ]}
          title="ADD"
        >
          {`Sign Up`}
        </ButtonSolid>
        <ButtonSolid
          style={[
            styles.ButtonSolidXg,
            { backgroundColor: theme.colors.primary },
          ]}
          title="ADD"
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextJG: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Textav: {
    fontSize: 14,
    lineHeight: 24,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextFieldmz: {
    width: 200,
    left: 25,
  },
  TextMt: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewdR: {
    alignItems: 'center',
    paddingTop: 30,
    top: 45,
  },
  RadioButtonGroupT7: {
    height: 25,
    marginTop: 7,
    marginBottom: 7,
    width: 355,
    bottom: -60,
  },
  View_08: {
    alignItems: 'center',
    paddingTop: 0,
    top: 45,
  },
  View_0Z: {
    alignItems: 'center',
    paddingBottom: 70,
  },
  ButtonSolidnL: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    textAlign: 'center',
    marginTop: 16,
    width: 175,
    paddingTop: 4,
    left: 85,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Linkaj: {
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
  Viewc8: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    bottom: 15,
  },
  ButtonSolidwB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 38,
    textAlign: 'center',
    width: 45,
    left: 225,
    bottom: 345,
    paddingTop: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ButtonSolidXg: {
    borderRadius: 56,
    textAlign: 'center',
    bottom: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewvW: {
    bottom: 430,
    left: 100,
  },
  ScreenContainerdY: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default withTheme(SyncPgeScreen);
