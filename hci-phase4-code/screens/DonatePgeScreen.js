import React from 'react';
import * as CustomCode from '../components.js';
import {
  ButtonSolid,
  Divider,
  Icon,
  Link,
  Picker,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const DonatePgeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [pickerValue, setPickerValue] = React.useState(undefined);
  const myFunctionName = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules
    myTextComponent();
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerJe}
      hasSafeArea={true}
      scrollable={true}
    >
      <View style={styles.ViewqT}>
        <View style={styles.ViewXA}>
          <Link
            onPress={() => navigation.navigate('DashboardPgeScreen', {})}
            style={[styles.LinkMl, { color: theme.colors.secondary }]}
            title="Dashboard"
          />
          <Icon
            style={styles.Icondp}
            name="Entypo/chevron-right"
            color={theme.colors.strong}
            size={20}
          />
          <Link
            style={[styles.LinkXa, { color: theme.colors.secondary }]}
            title="Donate"
          />
        </View>

        <Text style={[styles.TextH7, { color: theme.colors.secondary }]}>
          {'Donate or gift your earnings'}
        </Text>
        <Divider
          style={styles.DividerIG}
          color={theme.colors.divider}
          height={1}
        />
        <Text style={[styles.Textb6, { color: theme.colors.strong }]}>
          {'Amount:'}
        </Text>
        <Picker
          style={styles.PickerOi}
          placeholder="$"
          leftIconMode="inset"
          type="underline"
          value={pickerValue}
          onValueChange={pickerValue => setPickerValue(pickerValue)}
          options={[
            { value: '$5', label: '$5' },
            { value: '$10', label: '$10' },
            { value: '$20', label: '$20' },
            { value: '$30', label: '$30' },
            { value: '$40', label: '$40' },
            { value: '$50', label: '$50' },
            { value: '$60', label: '$60' },
            { value: '$70', label: '$70' },
            { value: '$80', label: '$80' },
            { value: '$90', label: '$90' },
            { value: '$100', label: '$100' },
          ]}
        />
        <Text style={[styles.TextTq, { color: theme.colors.strong }]}>
          {'Source:'}
        </Text>
        <Picker
          style={styles.Picker_1J}
          placeholder="select source"
          leftIconMode="inset"
          type="underline"
          value={pickerValue}
          onValueChange={pickerValue => setPickerValue(pickerValue)}
          options={[
            { value: 'in-app wallet', label: 'in-app wallet' },
            { value: 'debit/credit card', label: 'debit/credit card' },
            { value: 'paypal', label: 'paypal' },
          ]}
        />
        <Text style={[styles.TextJn, { color: theme.colors.strong }]}>
          {'Cause:'}
        </Text>
        <ButtonSolid
          style={[
            styles.ButtonSolidn6,
            { backgroundColor: theme.colors.primary },
          ]}
          title="Or generate a giftcard"
        />
        <Picker
          style={styles.Pickern9}
          placeholder="select cause"
          leftIconMode="inset"
          type="underline"
          value={pickerValue}
          onValueChange={pickerValue => setPickerValue(pickerValue)}
        />
        <Divider
          style={styles.DividerMp}
          color={theme.colors.divider}
          height={1}
        />
        <Icon
          style={[styles.IconRH, { backgroundColor: theme.colors.background }]}
          name="AntDesign/gift"
          color={theme.colors.strong}
          size={40}
        />
        <Icon
          style={styles.IconbK}
          name="AntDesign/gift"
          color={theme.colors.strong}
          size={40}
        />
        <Icon
          style={[styles.Iconkt, { backgroundColor: theme.colors.background }]}
          name="AntDesign/gift"
          color={theme.colors.strong}
          size={40}
        />
        <Divider
          style={styles.DividerGp}
          color={theme.colors.divider}
          height={1}
        />
      </View>
      <Icon
        style={styles.IconpL}
        name="Foundation/credit-card"
        color={theme.colors.primary}
        size={160}
      />
      <Icon
        style={styles.IconW1}
        name="AntDesign/arrowright"
        size={60}
        color={theme.colors.background}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  LinkMl: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    fontFamily: 'System',
    fontWeight: '200',
  },
  Icondp: {
    left: 70,
    bottom: 18,
  },
  LinkXa: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    bottom: 37,
    left: 92,
    fontFamily: 'System',
    fontWeight: '200',
  },
  ViewXA: {
    paddingLeft: 42,
    height: 20,
    right: 12,
  },
  TextH7: {
    fontSize: 24,
    paddingLeft: 30,
    paddingTop: 110,
    paddingTop: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  DividerIG: {
    height: 1,
    top: 25,
    left: 5,
    marginRight: 20,
  },
  Textb6: {
    fontSize: 20,
    paddingLeft: 74,
    paddingTop: 110,
    paddingTop: 50,
    fontFamily: 'System',
    fontWeight: '600',
  },
  PickerOi: {
    bottom: 45,
    width: 100,
    left: 175,
  },
  TextTq: {
    fontSize: 20,
    paddingLeft: 74,
    paddingTop: 110,
    paddingTop: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Picker_1J: {
    width: 125,
    bottom: 35,
    left: 170,
  },
  TextJn: {
    fontSize: 20,
    paddingLeft: 78,
    paddingTop: 110,
    paddingTop: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ButtonSolidn6: {
    borderRadius: 58,
    textAlign: 'center',
    width: 195,
    left: 80,
    top: 100,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Pickern9: {
    width: 125,
    bottom: 80,
    left: 170,
  },
  DividerMp: {
    height: 1,
    left: 5,
    marginRight: 20,
    bottom: 20,
  },
  IconRH: {
    left: 20,
    top: 65,
  },
  IconbK: {
    left: 290,
    top: 25,
  },
  Iconkt: {
    left: 155,
    bottom: 11,
  },
  DividerGp: {
    height: 1,
    left: 5,
    marginRight: 20,
    top: 60,
  },
  ViewqT: {
    paddingLeft: 10,
    paddingTop: 10,
    top: 80,
  },
  IconpL: {
    left: 110,
    top: 130,
  },
  IconW1: {
    top: 35,
    left: 165,
  },
  ScreenContainerJe: {
    flexWrap: 'wrap',
  },
});

export default withTheme(DonatePgeScreen);
