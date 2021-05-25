import React from 'react';
import {
  ButtonSolid,
  Divider,
  Icon,
  Link,
  RadioButtonGroup,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const ReportExampleScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [radioButtonValue, setRadioButtonValue] = React.useState(undefined);

  return (
    <ScreenContainer
      style={styles.ScreenContainerM0}
      hasSafeArea={true}
      scrollable={false}
    >
      <View style={styles.View_25}>
        <View style={styles.ViewkL}>
          <Link
            onPress={() => navigation.navigate('DashboardPgeScreen', {})}
            style={[styles.LinkoR, { color: theme.colors.secondary }]}
            title="Dashboard"
          />
          <Icon
            style={styles.Iconx8}
            name="Entypo/chevron-right"
            color={theme.colors.strong}
            size={20}
          />
          <Link
            style={[styles.LinkyI, { color: theme.colors.secondary }]}
            title="Company Profiles"
          />
          <Icon
            style={styles.IconDj}
            name="Entypo/chevron-right"
            color={theme.colors.strong}
            size={20}
          />
          <Link
            style={[styles.Linkl2, { color: theme.colors.secondary }]}
            title="XYZ"
          />
        </View>
        <RadioButtonGroup
          style={styles.RadioButtonGroupL2}
          options={[
            { icon: '', label: 'Stats' },
            { icon: '', label: 'Pros' },
            { icon: '', label: 'Cons' },
            { icon: '', label: 'Verdict' },
          ]}
          direction="horizontal"
          activeColor={theme.colors.primary}
          inactiveColor={theme.colors.divider}
          contentColor={theme.colors.error}
          unselectedContentColor={theme.colors.strong}
          borderColor={theme.colors.light}
          labelStyle={theme.typography.button}
          borderRadius={10}
          iconSize={2}
          value={radioButtonValue}
          onSelect={radioButtonValue => setRadioButtonValue(radioButtonValue)}
          optionSpacing={0}
        />
      </View>

      <View>
        <Icon
          style={styles.Icon_03}
          name="AntDesign/piechart"
          color={theme.colors.strong}
          size={150}
        />
        <View style={styles.View_94}>
          <Text style={[styles.TextiQ, { color: theme.colors.strong }]}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum at quam ut dignissim. Mauris ultricies placerat ante, quis finibus lacus bibendum maximus. Duis id commodo eros. Aliquam rutrum nec velit sit amet pellentesque. '
            }
          </Text>
          <ButtonSolid
            style={[
              styles.ButtonSolid_1k,
              { backgroundColor: theme.colors.secondary, borderRadius: 56 },
            ]}
            title="see more"
          />
        </View>
        <Divider
          style={styles.Dividerob}
          color={theme.colors.divider}
          height={1}
        />
        <Icon
          style={styles.IconxB}
          name="AntDesign/dotchart"
          color={theme.colors.strong}
          size={150}
        />
        <Icon
          style={styles.Iconrp}
          name="AntDesign/barchart"
          color={theme.colors.strong}
          size={150}
        />
      </View>

      <View style={styles.ViewDk}>
        <Text style={[styles.TextRJ, { color: theme.colors.strong }]}>
          {
            'Pellentesque pharetra dignissim risus, vitae facilisis justo hendrerit pharetra. Aliquam erat volutpat. Maecenas ultrices commodo elit. Duis sed porta ipsum, eu tempor purus. Pellentesque nec leo congue, mattis urna a, scelerisque urna. Nullam quis enim in lorem aliquet porttitor. Praesent ut lorem enim.'
          }
        </Text>
        <ButtonSolid
          style={[
            styles.ButtonSolidWm,
            { backgroundColor: theme.colors.secondary, borderRadius: 56 },
          ]}
          title="view details"
        />
      </View>

      <View style={styles.Viewip}>
        <RadioButtonGroup
          style={styles.RadioButtonGroup_0R}
          options={[
            { icon: '', label: '1' },
            { icon: '', label: '2' },
            { icon: '', label: '3' },
            { icon: '', label: '4' },
            { icon: '', label: '5' },
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
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  LinkoR: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    fontFamily: 'System',
    fontWeight: '200',
  },
  Iconx8: {
    left: 70,
    bottom: 18,
  },
  LinkyI: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    bottom: 37,
    left: 92,
    fontFamily: 'System',
    fontWeight: '200',
  },
  IconDj: {
    left: 207,
    bottom: 55,
  },
  Linkl2: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    bottom: 74,
    left: 230,
    fontFamily: 'System',
    fontWeight: '200',
  },
  ViewkL: {
    paddingLeft: 30,
    height: 20,
    top: 45,
  },
  RadioButtonGroupL2: {
    height: 40,
    marginTop: 2,
    marginBottom: 6,
    bottom: -60,
    left: 11,
    width: 355,
  },
  View_25: {
    paddingTop: 60,
  },
  Icon_03: {
    top: 100,
    left: 30,
  },
  TextiQ: {
    fontSize: 12,
  },
  ButtonSolid_1k: {
    textAlign: 'center',
    width: 100,
    left: 25,
    top: 10,
    fontFamily: 'System',
    fontWeight: '400',
  },
  View_94: {
    left: 195,
    bottom: 40,
    width: 170,
    height: 170,
  },
  Dividerob: {
    height: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  IconxB: {
    left: 25,
  },
  Iconrp: {
    left: 200,
    bottom: 150,
  },
  TextRJ: {
    fontSize: 12,
  },
  ButtonSolidWm: {
    textAlign: 'center',
    width: 140,
    left: 87,
    top: 10,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ViewDk: {
    bottom: 145,
    left: 10,
    paddingLeft: 20,
    paddingRight: 30,
  },
  RadioButtonGroup_0R: {
    height: 25,
    marginBottom: 7,
    width: 255,
    bottom: 120,
    left: 60,
  },
  Viewip: {
    top: 1,
  },
  ScreenContainerM0: {
    top: 2,
    flexWrap: 'wrap',
  },
});

export default withTheme(ReportExampleScreen);
