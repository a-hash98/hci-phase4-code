import React from 'react';
import {
  ButtonSolid,
  Divider,
  FieldSearchBarFull,
  Icon,
  Link,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const ArticlesPgeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  return (
    <ScreenContainer
      style={styles.ScreenContainerlR}
      scrollable={true}
      hasSafeArea={false}
    >
      <View style={[styles.ViewTf, { borderRadius: 56 }]}>
        <View style={styles.View_03}>
          <Link
            onPress={() => navigation.navigate('DashboardPgeScreen', {})}
            style={[styles.LinkBQ, { color: theme.colors.secondary }]}
            title="Dashboard"
          />
          <Icon
            style={styles.Icond9}
            name="Entypo/chevron-right"
            color={theme.colors.strong}
            size={20}
          />
          <Link
            style={[styles.LinkZp, { color: theme.colors.secondary }]}
            title="Articles"
          />
        </View>

        <Text style={[styles.Text_26, { color: theme.colors.secondary }]}>
          {'Browse Articles'}
        </Text>
        <FieldSearchBarFull
          style={[
            styles.FieldSearchBarFull_6a,
            {
              borderRadius: theme.roundness,
              borderColor: theme.colors.divider,
            },
          ]}
          onChange={searchBarValue => setSearchBarValue(searchBarValue)}
          placeholder="Search"
          value={searchBarValue}
        />
        <ButtonSolid
          onPress={() => navigation.navigate('ArticlePreferencesScreen', {})}
          style={[
            styles.ButtonSolid_3b,
            { backgroundColor: theme.colors.primary },
          ]}
          title="Preferences"
        />
        <Icon
          style={styles.IconLx}
          name="Ionicons/ios-refresh-circle"
          color={theme.colors.secondary}
          size={40}
        />
        <Text style={[styles.TextRe, { color: theme.colors.strong }]}>
          {'Featured'}
        </Text>
        <ButtonSolid
          style={[
            styles.ButtonSolidGu,
            { backgroundColor: theme.colors.primary },
          ]}
          title="See all"
        />
      </View>

      <Touchable>
        <View style={styles.Viewol}>
          <Text style={[styles.TextCx, { color: theme.colors.strong }]}>
            {
              'Transparency on working conditions: 5 companies  that have missed the mark'
            }
          </Text>
          <View style={styles.ViewnS} />
          <View style={styles.ViewQm} />
          <View>
            <Icon
              style={styles.IconQt}
              name="AntDesign/right"
              size={24}
              color={theme.colors.strong}
            />
          </View>
        </View>
        <Divider style={styles.Divider_7A} color={theme.colors.divider} />
      </Touchable>

      <Touchable>
        <View style={styles.View_1o}>
          <Text style={[styles.TextyA, { color: theme.colors.strong }]}>
            {'Is meeting minimum wage requirements sufficient? '}
          </Text>
          <View style={styles.ViewHP} />
          <View style={styles.Viewr8} />
          <View>
            <Icon
              style={styles.Icon_3j}
              name="AntDesign/right"
              size={24}
              color={theme.colors.strong}
            />
          </View>
        </View>
        <Divider style={styles.DividerMp} color={theme.colors.divider} />
      </Touchable>

      <Touchable>
        <View style={styles.ViewIN}>
          <Text style={[styles.TextFx, { color: theme.colors.strong }]}>
            {
              'Supply chain efficiency: a substantial step towards corporate carbon neutrality'
            }
          </Text>
          <View style={styles.Viewh1} />
          <View style={styles.ViewLY} />
          <View>
            <Icon
              style={styles.Iconzv}
              name="AntDesign/right"
              size={24}
              color={theme.colors.strong}
            />
          </View>
        </View>
        <Divider style={styles.DividerZF} color={theme.colors.divider} />
      </Touchable>

      <Touchable
        onPress={() => navigation.navigate('ArticleExampleScreen', {})}
      >
        <View style={styles.ViewEC}>
          <Text style={[styles.TextET, { color: theme.colors.strong }]}>
            {'The latest on corporate action on plastic pollution'}
          </Text>
          <View style={styles.Viewq6} />
          <View style={styles.View_2y} />
          <View>
            <Icon
              style={styles.IconA4}
              name="AntDesign/right"
              size={24}
              color={theme.colors.strong}
            />
          </View>
        </View>
        <Divider style={styles.DividerT7} color={theme.colors.divider} />
      </Touchable>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  LinkBQ: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    fontFamily: 'System',
    fontWeight: '200',
  },
  Icond9: {
    left: 70,
    bottom: 18,
  },
  LinkZp: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    bottom: 37,
    left: 92,
    fontFamily: 'System',
    fontWeight: '200',
  },
  View_03: {
    paddingLeft: 42,
    height: 20,
    top: 45,
  },
  Text_26: {
    fontSize: 28,
    paddingTop: 55,
    paddingLeft: 45,
    fontFamily: 'System',
    fontWeight: '700',
  },
  FieldSearchBarFull_6a: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: 270,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    top: 20,
    minWidth: 60,
    left: 40,
  },
  ButtonSolid_3b: {
    borderRadius: 56,
    textAlign: 'center',
    width: 190,
    top: 40,
    left: 45,
    fontFamily: 'System',
    fontWeight: '700',
  },
  IconLx: {
    left: 250,
    bottom: 2,
  },
  TextRe: {
    fontSize: 22,
    paddingTop: 35,
    paddingLeft: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ButtonSolidGu: {
    borderRadius: 56,
    textAlign: 'center',
    width: 110,
    left: 255,
    bottom: 28,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewTf: {
    paddingBottom: 35,
    paddingTop: 35,
  },
  TextCx: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewnS: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxHeight: 140,
    maxWidth: '20%',
  },
  ViewQm: {
    maxHeight: 140,
    overflow: 'hidden',
    maxWidth: '70%',
    paddingLeft: 28,
  },
  IconQt: {
    height: 24,
    width: 24,
    right: 40,
  },
  Viewol: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingTop: 12,
    width: '100%',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  Divider_7A: {
    height: 1,
  },
  TextyA: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewHP: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxHeight: 140,
    maxWidth: '20%',
  },
  Viewr8: {
    maxHeight: 140,
    overflow: 'hidden',
    maxWidth: '70%',
    paddingLeft: 28,
  },
  Icon_3j: {
    height: 24,
    width: 24,
    right: 40,
  },
  View_1o: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingTop: 12,
    width: '100%',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  DividerMp: {
    height: 1,
  },
  TextFx: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewh1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxHeight: 140,
    maxWidth: '20%',
  },
  ViewLY: {
    maxHeight: 140,
    overflow: 'hidden',
    maxWidth: '70%',
    paddingLeft: 28,
  },
  Iconzv: {
    height: 24,
    width: 24,
    right: 40,
  },
  ViewIN: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingTop: 12,
    width: '100%',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  DividerZF: {
    height: 1,
  },
  TextET: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewq6: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxHeight: 140,
    maxWidth: '20%',
  },
  View_2y: {
    maxHeight: 140,
    overflow: 'hidden',
    maxWidth: '70%',
    paddingLeft: 28,
  },
  IconA4: {
    height: 24,
    width: 24,
    right: 40,
  },
  ViewEC: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingTop: 12,
    width: '100%',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  DividerT7: {
    height: 1,
  },
  ScreenContainerlR: {
    flexWrap: 'wrap',
  },
});

export default withTheme(ArticlesPgeScreen);
