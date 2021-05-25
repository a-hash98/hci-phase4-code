import React from 'react';
import * as CustomCode from '../components.js';
import {
  ButtonOutline,
  ButtonSolid,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const ArticlePreferencesScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const myFunctionName = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules
    myTextComponent();
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerHV}
      hasSafeArea={true}
      scrollable={true}
    >
      <View style={styles.ViewgZ}>
        <IconButton
          onPress={() => navigation.navigate('ArticlesPgeScreen', {})}
          style={styles.IconButton_9Y}
          size={32}
          icon="Entypo/cross"
          color={theme.colors.secondary}
        />
        <Text style={[styles.TextkL, { color: theme.colors.secondary }]}>
          {'Preferences'}
        </Text>
        <Divider
          style={styles.Dividerja}
          color={theme.colors.divider}
          height={1}
        />
        <Text style={[styles.TextMF, { color: theme.colors.strong }]}>
          {'Category'}
        </Text>
        <Icon
          style={styles.Iconmn}
          name="AntDesign/caretup"
          color={theme.colors.primary}
          size={24}
        />
        <ButtonOutline style={styles.ButtonOutline_6Y} title="Environmental" />
        <ButtonOutline style={styles.ButtonOutlineU7} title="Humanitarian" />
        <ButtonOutline
          style={styles.ButtonOutlineHN}
          title="Gender Inequality"
        />
        <ButtonOutline style={styles.ButtonOutlinem5} title="International" />
        <ButtonSolid
          style={[
            styles.ButtonSolidUU,
            { backgroundColor: theme.colors.primary },
          ]}
          title="Show More"
        />
        <Divider
          style={styles.DividerDa}
          color={theme.colors.divider}
          height={1}
        />
        <Text style={[styles.TextVt, { color: theme.colors.strong }]}>
          {'Date'}
        </Text>
        <Icon
          style={styles.IconHY}
          name="AntDesign/caretdown"
          color={theme.colors.primary}
          size={24}
        />
        <Divider
          style={styles.DividerBT}
          color={theme.colors.divider}
          height={1}
        />
        <Text style={[styles.Text_1r, { color: theme.colors.strong }]}>
          {'Rating'}
        </Text>
        <Icon
          style={styles.Iconxc}
          name="AntDesign/caretdown"
          color={theme.colors.primary}
          size={24}
        />
        <Divider
          style={styles.Dividerba}
          color={theme.colors.divider}
          height={1}
        />
        <Text style={[styles.Text_26, { color: theme.colors.strong }]}>
          {'Author'}
        </Text>
        <Icon
          style={styles.IconXY}
          name="AntDesign/caretdown"
          color={theme.colors.primary}
          size={24}
        />
        <Divider
          style={styles.DividerbW}
          color={theme.colors.divider}
          height={1}
        />
        <Text style={[styles.TextCR, { color: theme.colors.strong }]}>
          {'Other'}
        </Text>
        <Icon
          style={styles.IconIq}
          name="AntDesign/caretdown"
          color={theme.colors.primary}
          size={24}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconButton_9Y: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    left: 115,
    top: 60,
  },
  TextkL: {
    fontSize: 24,
    paddingLeft: 14,
    paddingTop: 110,
    paddingTop: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Dividerja: {
    height: 1,
    top: 10,
    left: 5,
    marginRight: 20,
  },
  TextMF: {
    fontSize: 20,
    paddingLeft: 14,
    paddingTop: 110,
    paddingTop: 30,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Iconmn: {
    left: 300,
    bottom: 20,
  },
  ButtonOutline_6Y: {
    backgroundColor: 'transparent',
    borderRadius: 56,
    borderWidth: 1,
    textAlign: 'center',
    width: 125,
    paddingTop: 0,
    top: 10,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ButtonOutlineU7: {
    backgroundColor: 'transparent',
    borderRadius: 56,
    borderWidth: 1,
    textAlign: 'center',
    width: 125,
    paddingTop: 0,
    left: 135,
    bottom: 35,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ButtonOutlineHN: {
    backgroundColor: 'transparent',
    borderRadius: 56,
    borderWidth: 1,
    textAlign: 'center',
    width: 125,
    paddingTop: 0,
    bottom: 25,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ButtonOutlinem5: {
    backgroundColor: 'transparent',
    borderRadius: 56,
    borderWidth: 1,
    textAlign: 'center',
    width: 125,
    paddingTop: 0,
    left: 135,
    bottom: 65,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ButtonSolidUU: {
    borderRadius: 58,
    textAlign: 'center',
    width: 120,
    bottom: 25,
    fontFamily: 'System',
    fontWeight: '700',
  },
  DividerDa: {
    height: 1,
    top: 10,
    left: 5,
    marginRight: 20,
  },
  TextVt: {
    fontSize: 20,
    paddingLeft: 14,
    paddingTop: 110,
    paddingTop: 30,
    fontFamily: 'System',
    fontWeight: '600',
  },
  IconHY: {
    left: 300,
    bottom: 20,
  },
  DividerBT: {
    height: 1,
    top: 10,
    left: 5,
    marginRight: 20,
  },
  Text_1r: {
    fontSize: 20,
    paddingLeft: 14,
    paddingTop: 110,
    paddingTop: 30,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Iconxc: {
    left: 300,
    bottom: 20,
  },
  Dividerba: {
    height: 1,
    top: 10,
    left: 5,
    marginRight: 20,
  },
  Text_26: {
    fontSize: 20,
    paddingLeft: 14,
    paddingTop: 110,
    paddingTop: 30,
    fontFamily: 'System',
    fontWeight: '600',
  },
  IconXY: {
    left: 300,
    bottom: 20,
  },
  DividerbW: {
    height: 1,
    top: 10,
    left: 5,
    marginRight: 20,
  },
  TextCR: {
    fontSize: 20,
    paddingLeft: 14,
    paddingTop: 110,
    paddingTop: 30,
    fontFamily: 'System',
    fontWeight: '600',
  },
  IconIq: {
    left: 300,
    bottom: 20,
  },
  ViewgZ: {
    paddingLeft: 10,
    top: 80,
    paddingBottom: 100,
  },
  ScreenContainerHV: {
    flexWrap: 'wrap',
  },
});

export default withTheme(ArticlePreferencesScreen);
