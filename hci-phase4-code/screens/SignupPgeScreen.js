import React from 'react';
import {
  ButtonOutline,
  ButtonSolid,
  Link,
  Picker,
  ScreenContainer,
  TextField,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const SignupPgeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [emaiTextFieldValue, setEmaiTextFieldValue] = React.useState('');
  const [textFieldValue, setTextFieldValue] = React.useState('');
  const [passwordTextFieldValue, setPasswordTextFieldValue] = React.useState(
    ''
  );
  const [pickerValue, setPickerValue] = React.useState(undefined);

  return (
    <ScreenContainer
      style={styles.ScreenContainerAb}
      scrollable={true}
      hasSafeArea={true}
    >
      <View style={styles.ViewtN} />
      <View style={styles.ViewTx}>
        <Text style={[styles.TextEM, { color: theme.colors.secondary }]}>
          {'Conscientious Trading'}
        </Text>

        <Text style={[styles.TextIi, { color: theme.colors.secondary }]}>
          {'Welcome.'}
        </Text>
        <TextField
          style={styles.TextFieldhs}
          type="underline"
          keyboardType="email-address"
          leftIconMode="inset"
          value={emaiTextFieldValue}
          onChangeText={emaiTextFieldValue =>
            setEmaiTextFieldValue(emaiTextFieldValue)
          }
          error={false}
          placeholder="First"
        />
        <TextField
          style={styles.TextFieldOb}
          placeholder="Last"
          type="underline"
          value={textFieldValue}
          onChangeText={textFieldValue => setTextFieldValue(textFieldValue)}
        />
        <TextField
          style={styles.TextField_7r}
          type="underline"
          label="*********"
          keyboardType="default"
          leftIconMode="inset"
          secureTextEntry={true}
          value={passwordTextFieldValue}
          onChangeText={passwordTextFieldValue =>
            setPasswordTextFieldValue(passwordTextFieldValue)
          }
        />
        <Picker
          style={styles.Picker_11}
          placeholder="Select country"
          leftIconMode="inset"
          type="underline"
          value={pickerValue}
          onValueChange={pickerValue => setPickerValue(pickerValue)}
          options={[
            { value: 'United Kingdom', label: 'United Kingdom' },
            { value: 'United States', label: 'United States' },
            { value: 'Russia', label: 'Russia' },
            { value: 'Germany', label: 'Germany' },
            { value: 'France', label: 'France' },
            { value: 'Australia', label: 'Australia' },
          ]}
        />
        <TextField
          style={styles.TextFieldAn}
          placeholder="Area code"
          type="underline"
          value={textFieldValue}
          onChangeText={textFieldValue => setTextFieldValue(textFieldValue)}
        />
        <TextField
          style={styles.TextFieldqR}
          placeholder="Phone number"
          type="underline"
          value={textFieldValue}
          onChangeText={textFieldValue => setTextFieldValue(textFieldValue)}
        />
      </View>
      <ButtonSolid
        style={[
          styles.ButtonSolidox,
          { backgroundColor: theme.colors.primary },
        ]}
        title="Create Account"
      />
      <ButtonOutline style={styles.ButtonOutlineeA} title="Sign In" />
      <ButtonOutline
        style={styles.ButtonOutlinejR}
        title="Sign in with Google"
        icon="AntDesign/google"
      />
      <View>
        <Link
          style={[styles.Link_1h, { color: theme.colors.secondary }]}
          title="who we are"
        />
        <Link
          style={[styles.Linkdk, { color: theme.colors.secondary }]}
          title="what we do"
        />
        <ButtonSolid
          onPress={() => navigation.navigate('CustomizePgeScreen', {})}
          style={[
            styles.ButtonSolidVP,
            {
              backgroundColor: theme.colors.secondary,
              color: theme.colors.background,
            },
          ]}
          title="Quick Start"
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewtN: {
    justifyContent: 'space-around',
  },
  TextEM: {
    textAlign: 'center',
    fontSize: 30,
    paddingBottom: 40,
    paddingTop: 30,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextIi: {
    fontSize: 28,
    textAlign: 'center',
  },
  TextFieldhs: {
    width: 160,
  },
  TextFieldOb: {
    width: 160,
    bottom: 46,
    left: 175,
  },
  TextField_7r: {
    bottom: 40,
  },
  Picker_11: {
    bottom: 35,
  },
  TextFieldAn: {
    width: 90,
    bottom: 35,
  },
  TextFieldqR: {
    width: 250,
    bottom: 81,
    left: 95,
  },
  ViewTx: {
    justifyContent: 'space-evenly',
    top: 40,
  },
  ButtonSolidox: {
    borderRadius: 60,
    textAlign: 'center',
    width: 160,
    left: 85,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ButtonOutlineeA: {
    backgroundColor: 'transparent',
    borderRadius: 60,
    borderWidth: 1,
    textAlign: 'center',
    width: 140,
    top: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ButtonOutlinejR: {
    backgroundColor: 'transparent',
    borderRadius: 60,
    borderWidth: 1,
    textAlign: 'center',
    width: 190,
    left: 150,
    bottom: 22,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Link_1h: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    textDecorationLine: 'underline',
    fontSize: 23,
    top: 27,
    left: 190,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Linkdk: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    textDecorationLine: 'underline',
    fontSize: 23,
    left: 35,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ButtonSolidVP: {
    borderRadius: 32,
    textAlign: 'center',
    width: 160,
    left: 85,
    top: 30,
    height: 70,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ScreenContainerAb: {
    marginLeft: 16,
    marginTop: 16,
    marginRight: 16,
    marginBottom: 16,
    flexWrap: 'wrap',
  },
});

export default withTheme(SignupPgeScreen);
