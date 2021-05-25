import React from 'react';
import * as CustomCode from '../components.js';
import Images from '../config/Images';
import { Divider, Link, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const PermissionsPgeScreen = props => {
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
      style={styles.ScreenContainerJL}
      hasSafeArea={true}
      scrollable={true}
    >
      <View style={styles.ViewCj}>
        <Text style={[styles.Textm9, { color: theme.colors.secondary }]}>
          {'Privacy & Permissions'}
        </Text>
        <Image
          style={styles.ImageQz}
          source={Images.Toggle}
          resizeMode="cover"
        />
        <Divider
          style={styles.DividerMs}
          color={theme.colors.divider}
          height={1}
        />
        <Text style={[styles.Text_1I, { color: theme.colors.primary }]}>
          {'Enable cookies?'}
        </Text>
        <Image
          style={styles.ImageLV}
          source={Images.Toggle}
          resizeMode="cover"
        />
        <Divider
          style={styles.DividerYh}
          color={theme.colors.divider}
          height={1}
        />
        <Text style={[styles.TextiX, { color: theme.colors.primary }]}>
          {'Personalized ad experience?'}
        </Text>
        <Image
          style={styles.ImagebH}
          source={Images.Toggle}
          resizeMode="cover"
        />
        <Divider
          style={styles.Dividerq2}
          color={theme.colors.divider}
          height={1}
        />
        <Text style={[styles.TextK3, { color: theme.colors.primary }]}>
          {'Store geolocation data?'}
        </Text>
        <Image
          style={styles.ImageJR}
          source={Images.Toggle}
          resizeMode="cover"
        />
        <Divider
          style={styles.Divider_7O}
          color={theme.colors.divider}
          height={1}
        />
        <Text style={[styles.TextJN, { color: theme.colors.primary }]}>
          {'Ensure security, prevent fraud \nand debug?'}
        </Text>
        <Image
          style={styles.Image_8h}
          source={Images.Toggle}
          resizeMode="cover"
        />
        <Divider
          style={styles.Divider_1M}
          color={theme.colors.divider}
          height={1}
        />
        <Text style={[styles.TextoY, { color: theme.colors.primary }]}>
          {'Match and combine offline \ndata sources?'}
        </Text>
        <Image
          style={styles.ImageAW}
          source={Images.Toggle}
          resizeMode="cover"
        />
        <Divider
          style={styles.DividerZV}
          color={theme.colors.divider}
          height={1}
        />
        <Text style={[styles.Textjd, { color: theme.colors.primary }]}>
          {
            'Share data with affiliated \nparties to receive exclusive \nnews and offers?'
          }
        </Text>
        <Link
          onPress={() => navigation.navigate('AppSettingsScreen', {})}
          style={[styles.LinkBH, { color: theme.colors.light }]}
          title="BACK"
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textm9: {
    fontSize: 24,
    paddingLeft: 10,
    paddingTop: 110,
    paddingTop: 10,
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '600',
  },
  ImageQz: {
    width: 50,
    height: 50,
    top: 85,
    left: 290,
  },
  DividerMs: {
    height: 1,
    left: 5,
    marginRight: 20,
  },
  Text_1I: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 110,
    paddingTop: 50,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ImageLV: {
    width: 50,
    height: 50,
    top: 85,
    left: 290,
  },
  DividerYh: {
    height: 1,
    left: 5,
    marginRight: 20,
  },
  TextiX: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 110,
    paddingTop: 45,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ImagebH: {
    width: 50,
    height: 50,
    top: 85,
    left: 290,
  },
  Dividerq2: {
    height: 1,
    left: 5,
    marginRight: 20,
  },
  TextK3: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 110,
    paddingTop: 45,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ImageJR: {
    width: 50,
    height: 50,
    top: 85,
    left: 290,
  },
  Divider_7O: {
    height: 1,
    left: 5,
    marginRight: 20,
    bottom: 15,
  },
  TextJN: {
    fontSize: 18,
    paddingLeft: 30,
    paddingTop: 110,
    paddingTop: 45,
    fontFamily: 'System',
    fontWeight: '400',
  },
  Image_8h: {
    width: 50,
    height: 50,
    top: 85,
    left: 290,
  },
  Divider_1M: {
    height: 1,
    left: 5,
    marginRight: 20,
  },
  TextoY: {
    fontSize: 18,
    paddingLeft: 30,
    paddingTop: 110,
    paddingTop: 45,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ImageAW: {
    width: 50,
    height: 50,
    top: 85,
    left: 290,
  },
  DividerZV: {
    height: 1,
    left: 5,
    marginRight: 20,
  },
  Textjd: {
    fontSize: 18,
    paddingLeft: 30,
    paddingTop: 40,
    fontFamily: 'System',
    fontWeight: '400',
  },
  LinkBH: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 0,
    textAlign: 'center',
    top: 30,
    marginBottom: 70,
    marginRight: 20,
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewCj: {
    paddingLeft: 10,
    top: 80,
  },
  ScreenContainerJL: {
    flexWrap: 'wrap',
  },
});

export default withTheme(PermissionsPgeScreen);
