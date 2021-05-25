import React from 'react';
import {
  ButtonSolid,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

const CustomizePgeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressn9Vh3C2a = () => navigation.goBack();

  return (
    <ScreenContainer
      style={styles.ScreenContainer_5W}
      scrollable={false}
      hasSafeArea={true}
    >
      <View style={[styles.ViewdT, { borderColor: theme.colors.divider }]}>
        <Touchable onPress={onPressn9Vh3C2a}>
          <Icon
            style={styles.IconQB}
            color={theme.colors.light}
            name="Feather/x"
            size={24}
          />
        </Touchable>
      </View>

      <ScrollView
        contentContainerStyle={[styles.ScrollViewq9, { borderRadius: 12 }]}
        showsVerticalScrollIndicator={true}
        bounces={true}
        horizontal={false}
        showsHorizontalScrollIndicator={true}
      >
        <Text style={[styles.TextHK, { color: theme.colors.secondary }]}>
          {'...your interests'}
        </Text>

        <View style={styles.ViewEP}>
          <Touchable style={styles.Touchable_1F}>
            <View
              style={[
                styles.ViewZx,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.strong },
                ]}
              >
                {'Sustainability'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchablexs}>
            <View
              style={[
                styles.Views6,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.strong },
                ]}
              >
                {'Education inequality'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchablebL}>
            <View
              style={[
                styles.ViewfA,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.strong },
                ]}
              >
                {'Child labor'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchable_9s}>
            <View
              style={[
                styles.ViewtG,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.strong },
                ]}
              >
                {'Modern slavery'}
              </Text>
            </View>
          </Touchable>

          <Touchable
            style={[styles.Touchable_9l, { borderColor: theme.colors.primary }]}
          >
            <View
              style={[
                styles.ViewPv,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.strong,
                  borderColor: theme.colors.divider,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.background },
                ]}
              >
                {'Select all'}
              </Text>
            </View>
          </Touchable>
        </View>
        <Divider style={styles.DividerbI} color={theme.colors.divider} />
        <Text style={[styles.Textyy, { color: theme.colors.secondary }]}>
          {'...your functionality'}
        </Text>

        <View style={styles.ViewVN}>
          <Touchable style={styles.TouchableOU}>
            <View
              style={[
                styles.ViewEr,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.strong,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.background },
                ]}
              >
                {'Custom article recommendations'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchablewP}>
            <View
              style={[
                styles.Viewn8,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.strong,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.background },
                ]}
              >
                {'Company profiles'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchable_6G}>
            <View
              style={[
                styles.View_6V,
                {
                  backgroundColor: theme.colors.strong,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.background },
                ]}
              >
                {'In-app wallet functionality'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableGo}>
            <View
              style={[
                styles.ViewAv,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.strong },
                ]}
              >
                {'Daily news feed'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableWk}>
            <View
              style={[
                styles.ViewTE,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.strong },
                ]}
              >
                {'Referral scheme'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableIq}>
            <View
              style={[
                styles.Viewic,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.strong },
                ]}
              >
                {'Select All'}
              </Text>
            </View>
          </Touchable>
        </View>
        <FlatList data={[]} renderItem={({ item }) => null} numColumns={1} />
        <View style={[styles.Viewgg, { borderRadius: 60 }]}>
          <ButtonSolid
            style={[
              styles.ButtonSolidb6,
              { backgroundColor: theme.colors.primary },
            ]}
            title="Clear all"
          />
        </View>

        <Text style={[styles.TextWQ, { color: theme.colors.secondary }]}>
          {'Personalize...'}
        </Text>

        <View>
          <ButtonSolid
            onPress={() => navigation.navigate('DashboardPgeScreen', {})}
            style={[
              styles.ButtonSolidbx,
              { backgroundColor: theme.colors.primary },
            ]}
            title="Next"
          />
          <Icon
            style={styles.Iconjl}
            name="AntDesign/upcircle"
            color={theme.colors.secondary}
            size={35}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconQB: {
    width: 24,
    height: 24,
  },
  ViewdT: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    paddingLeft: 16,
    alignItems: 'center',
    paddingRight: 100,
  },
  TextHK: {
    textDecorationLine: 'underline',
  },
  ViewZx: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_1F: {
    marginTop: 8,
  },
  Views6: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablexs: {
    marginTop: 8,
  },
  ViewfA: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchablebL: {
    marginTop: 8,
  },
  ViewtG: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_9s: {
    marginTop: 8,
  },
  ViewPv: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_9l: {
    marginTop: 8,
  },
  ViewEP: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  DividerbI: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  Textyy: {
    textDecorationLine: 'underline',
  },
  ViewEr: {
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
    marginRight: 8,
  },
  TouchableOU: {
    marginTop: 8,
  },
  Viewn8: {
    paddingLeft: 16,
    marginRight: 8,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
  },
  TouchablewP: {
    marginTop: 8,
  },
  View_6V: {
    marginRight: 8,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  Touchable_6G: {
    marginTop: 8,
  },
  ViewAv: {
    marginRight: 8,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  TouchableGo: {
    marginTop: 8,
  },
  ViewTE: {
    marginRight: 8,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  TouchableWk: {
    marginTop: 8,
  },
  Viewic: {
    marginRight: 8,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  TouchableIq: {
    marginTop: 8,
  },
  ViewVN: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  ButtonSolidb6: {
    borderRadius: 60,
    textAlign: 'center',
    top: 30,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewgg: {
    width: 150,
  },
  TextzY: {
    marginBottom: 32,
    marginLeft: 16,
    textAlign: 'center',
  },
  TextWQ: {
    fontSize: 30,
    paddingTop: 65,
    paddingLeft: 2,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ButtonSolidbx: {
    borderRadius: 60,
    textAlign: 'center',
    top: 30,
    width: 150,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Iconjl: {
    left: 195,
    bottom: 75,
  },
  ScrollViewq9: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    bottom: 3,
  },
  ScreenContainer_5W: {
    flexWrap: 'wrap',
  },
});

export default withTheme(CustomizePgeScreen);
