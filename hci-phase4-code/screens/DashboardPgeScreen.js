import React from 'react';
import Images from '../config/Images';
import {
  ButtonOutline,
  Divider,
  FieldSearchBarFull,
  Link,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DashboardPgeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={[
          styles.ScrollViewWO,
          { backgroundColor: theme.colors.background },
        ]}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Text style={[styles.TextAK, { color: theme.colors.secondary }]}>
          {'Dashboard'}
        </Text>
        <FieldSearchBarFull
          style={[
            styles.FieldSearchBarFullbs,
            {
              borderRadius: theme.roundness,
              borderColor: theme.colors.divider,
            },
          ]}
          onChange={searchBarValue => setSearchBarValue(searchBarValue)}
          placeholder="Search"
          value={searchBarValue}
        />
        <View style={styles.View_2P}>
          <Text style={[styles.TextCf, { color: theme.colors.primary }]}>
            {' For me                                           See all'}
          </Text>
        </View>

        <View style={styles.View_7j}>
          <ButtonOutline
            onPress={() => navigation.navigate('ArticlesPgeScreen', {})}
            style={[
              styles.ButtonOutlinerc,
              {
                borderColor: theme.colors.background,
                color: theme.colors.strong,
              },
            ]}
            title="Articles"
          />
          <FlatList
            data={[]}
            renderItem={({ item }) => null}
            contentContainerStyle={styles.FlatListbI}
            numColumns={1}
          />
          <ScrollView
            contentContainerStyle={styles.ScrollViewb0}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={false}
            bounces={true}
            horizontal={true}
          >
            <View style={styles.Viewz7}>
              <Image
                style={styles.ImageDy}
                source={Images.HciworkEasyResizecom}
                resizeMode="cover"
              />
              <ButtonOutline
                style={[
                  styles.ButtonOutlinepJ,
                  {
                    borderColor: theme.colors.medium,
                    color: theme.colors.strong,
                  },
                ]}
                title="Transparency on working conditions: 5 companies are that have missed the mark"
              />
            </View>

            <View>
              <Image
                style={styles.ImageXg}
                resizeMode="cover"
                source={Images.HciwageEasyResizecom}
              />
              <ButtonOutline
                style={[
                  styles.ButtonOutline_34,
                  {
                    color: theme.colors.strong,
                    borderColor: theme.colors.strong,
                  },
                ]}
                title="Is meeting minimum wage requirements sufficient?"
              />
            </View>

            <View style={styles.ViewFe}>
              <Image
                style={styles.Imagexb}
                source={Images.HcisupplyEasyResizecom}
                resizeMode="cover"
              />
              <ButtonOutline
                style={[
                  styles.ButtonOutlineTI,
                  {
                    borderColor: theme.colors.strong,
                    color: theme.colors.strong,
                  },
                ]}
                title="Supply chain efficiency: a substantial step towards corporate carbon neutrality"
              />
            </View>

            <View style={styles.ViewL2}>
              <Image
                style={styles.Image_3f}
                source={Images.Hcipollution}
                resizeMode="cover"
              />
              <ButtonOutline
                onPress={() => navigation.navigate('ArticleExampleScreen', {})}
                style={[
                  styles.ButtonOutline_58,
                  {
                    borderColor: theme.colors.strong,
                    color: theme.colors.strong,
                  },
                ]}
                title="The latest on corporate action on plastic pollution"
              />
            </View>
          </ScrollView>
        </View>

        <View style={styles.ViewEr}>
          <Text style={[styles.Texty0, { color: theme.colors.strong }]}>
            {'Trending'}
          </Text>
          <FlatList
            data={[]}
            renderItem={({ item }) => null}
            contentContainerStyle={styles.FlatList_5c}
            numColumns={1}
          />
          <ScrollView
            contentContainerStyle={styles.ScrollViewbd}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={false}
            bounces={true}
            horizontal={true}
          >
            <View style={styles.Viewwf}>
              <Image
                style={styles.ImageX3}
                source={Images.Hcicrypto2EasyResizecom}
                resizeMode="cover"
              />
              <ButtonOutline
                style={[
                  styles.ButtonOutlineBA,
                  {
                    borderColor: theme.colors.medium,
                    color: theme.colors.strong,
                  },
                ]}
                title="5 ways crypto banking will hold businesses accountable"
              />
            </View>

            <View>
              <Image
                style={styles.ImageCw}
                resizeMode="cover"
                source={Images.HcigenderequalityEasyResizecom}
              />
              <ButtonOutline
                style={[
                  styles.ButtonOutlinexx,
                  {
                    color: theme.colors.strong,
                    borderColor: theme.colors.strong,
                  },
                ]}
                title="The surprising consequences of bridging the gender pay gap"
              />
            </View>

            <View style={styles.ViewaQ}>
              <Image
                style={styles.ImageIZ}
                source={Images.HcifactoryEasyResizecom}
                resizeMode="cover"
              />
              <ButtonOutline
                style={[
                  styles.ButtonOutlineDk,
                  {
                    borderColor: theme.colors.strong,
                    color: theme.colors.strong,
                  },
                ]}
                title="The Rana Plaza Collapse: 8 years on"
              />
            </View>

            <View style={styles.ViewMw}>
              <Image
                style={styles.ImageuO}
                source={Images.HcifoodEasyResizecom}
                resizeMode="cover"
              />
              <ButtonOutline
                style={[
                  styles.ButtonOutlineSL,
                  {
                    borderColor: theme.colors.strong,
                    color: theme.colors.strong,
                  },
                ]}
                title="The 3 eco-startups disrupting the food delivery industry"
              />
            </View>
          </ScrollView>
        </View>

        <View style={styles.ViewTg}>
          <Text style={[styles.Textx1, { color: theme.colors.strong }]}>
            {'Analytics'}
          </Text>
          <FlatList
            data={[]}
            renderItem={({ item }) => null}
            contentContainerStyle={styles.FlatListmX}
            numColumns={1}
          />
          <ScrollView
            contentContainerStyle={styles.ScrollViewzs}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={false}
            bounces={true}
            horizontal={true}
          >
            <View style={styles.Viewbg}>
              <Image
                style={styles.ImageNX}
                source={Images.Hcichart1EasyResizecom}
                resizeMode="cover"
              />
              <ButtonOutline
                style={[
                  styles.ButtonOutlinewe,
                  {
                    borderColor: theme.colors.medium,
                    color: theme.colors.strong,
                  },
                ]}
                title="Top performers (first quarter)"
              />
            </View>

            <View>
              <Image
                style={styles.Imageaa}
                resizeMode="cover"
                source={Images.Hcichart2EasyResizecom}
              />
              <ButtonOutline
                style={[
                  styles.ButtonOutlineYU,
                  {
                    color: theme.colors.strong,
                    borderColor: theme.colors.strong,
                  },
                ]}
                title="Most improved"
              />
            </View>
          </ScrollView>
        </View>

        <View style={styles.ViewxC}>
          <Text style={[styles.TextgQ, { color: theme.colors.strong }]}>
            {'Company Profiles'}
          </Text>
          <FlatList
            data={[]}
            renderItem={({ item }) => null}
            contentContainerStyle={styles.FlatListmH}
            numColumns={1}
          />
          <ScrollView
            contentContainerStyle={styles.ScrollViewSv}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={false}
            bounces={true}
            horizontal={true}
          >
            <View style={styles.View_5I}>
              <Image
                style={styles.ImageqW}
                source={Images.DraftbitMark}
                resizeMode="cover"
              />
              <ButtonOutline
                style={[
                  styles.ButtonOutlinewJ,
                  {
                    borderColor: theme.colors.medium,
                    color: theme.colors.strong,
                  },
                ]}
                title="Company ABC"
              />
            </View>

            <View>
              <Image
                style={styles.ImagevT}
                resizeMode="cover"
                source={Images.DraftbitMark}
              />
              <ButtonOutline
                onPress={() => navigation.navigate('ReportExampleScreen', {})}
                style={[
                  styles.ButtonOutline_2f,
                  {
                    color: theme.colors.strong,
                    borderColor: theme.colors.strong,
                  },
                ]}
                title="Organisation XYZ"
              />
            </View>

            <View style={styles.ViewvG}>
              <Image
                style={styles.ImageFi}
                source={Images.DraftbitMark}
                resizeMode="cover"
              />
              <ButtonOutline
                style={[
                  styles.ButtonOutlinew4,
                  {
                    borderColor: theme.colors.strong,
                    color: theme.colors.strong,
                  },
                ]}
                title="Company DEF"
              />
            </View>

            <View style={styles.ViewOe}>
              <Image
                style={styles.ImageeN}
                source={Images.DraftbitMark}
                resizeMode="cover"
              />
              <ButtonOutline
                style={[
                  styles.ButtonOutlineCJ,
                  {
                    borderColor: theme.colors.strong,
                    color: theme.colors.strong,
                  },
                ]}
                title="Company GHI"
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <View
        style={[styles.ViewjZ, { backgroundColor: theme.colors.strongInverse }]}
      >
        <Link
          style={[styles.LinkAZ, { color: theme.colors.secondary }]}
          title="bookmarks"
        />
        <Link
          onPress={() => navigation.navigate('NotificationsPgeScreen', {})}
          style={[styles.LinkMa, { color: theme.colors.secondary }]}
          title="notifications"
        />
        <Link
          onPress={() => navigation.navigate('DonatePgeScreen', {})}
          style={[styles.LinkEF, { color: theme.colors.secondary }]}
          title="donate"
        />
        <Link
          onPress={() => navigation.navigate('AppSettingsScreen', {})}
          style={[styles.Linkcv, { color: theme.colors.secondary }]}
          title="settings"
        />
        <Divider
          style={styles.DividerDg}
          color={theme.colors.divider}
          height={1}
        />
        <Link
          style={[styles.LinkMZ, { color: theme.colors.secondary }]}
          title="sign out"
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextAK: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
  },
  FieldSearchBarFullbs: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: 270,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    minWidth: 60,
    left: 40,
    top: 40,
  },
  TextCf: {
    fontSize: 20,
    paddingLeft: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  View_2P: {
    top: 90,
  },
  ButtonOutlinerc: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
  },
  FlatListbI: {
    paddingBottom: 20,
  },
  ImageDy: {
    width: 250,
    height: 250,
  },
  ButtonOutlinepJ: {
    backgroundColor: 'theme.colors.strong',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  Viewz7: {
    paddingRight: 30,
  },
  ImageXg: {
    width: 250,
    height: 250,
  },
  ButtonOutline_34: {
    backgroundColor: 'theme.colors.strong',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  Imagexb: {
    width: 250,
    height: 250,
  },
  ButtonOutlineTI: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ViewFe: {
    paddingLeft: 30,
  },
  Image_3f: {
    width: 250,
    height: 250,
  },
  ButtonOutline_58: {
    backgroundColor: 'theme.colors.strong',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ViewL2: {
    paddingLeft: 30,
  },
  ScrollViewb0: {
    flexGrow: 1,
  },
  View_7j: {
    top: 100,
  },
  Texty0: {
    fontSize: 20,
    paddingLeft: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  FlatList_5c: {
    paddingBottom: 20,
  },
  ImageX3: {
    width: 250,
    height: 250,
  },
  ButtonOutlineBA: {
    backgroundColor: 'theme.colors.strong',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  Viewwf: {
    paddingRight: 30,
  },
  ImageCw: {
    width: 250,
    height: 250,
  },
  ButtonOutlinexx: {
    backgroundColor: 'theme.colors.strong',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ImageIZ: {
    width: 250,
    height: 250,
  },
  ButtonOutlineDk: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ViewaQ: {
    paddingLeft: 30,
  },
  ImageuO: {
    width: 250,
    height: 250,
  },
  ButtonOutlineSL: {
    backgroundColor: 'theme.colors.strong',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ViewMw: {
    paddingLeft: 30,
  },
  ScrollViewbd: {
    flexGrow: 1,
  },
  ViewEr: {
    top: 120,
  },
  Textx1: {
    fontSize: 20,
    paddingLeft: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  FlatListmX: {
    paddingBottom: 20,
  },
  ImageNX: {
    width: 250,
    height: 250,
    top: 1,
  },
  ButtonOutlinewe: {
    backgroundColor: 'theme.colors.strong',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  Viewbg: {
    paddingRight: 30,
  },
  Imageaa: {
    width: 250,
    height: 250,
  },
  ButtonOutlineYU: {
    backgroundColor: 'theme.colors.strong',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ScrollViewzs: {
    flexGrow: 1,
  },
  ViewTg: {
    top: 130,
  },
  TextgQ: {
    fontSize: 20,
    paddingLeft: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  FlatListmH: {
    paddingBottom: 20,
  },
  ImageqW: {
    width: 250,
    height: 250,
  },
  ButtonOutlinewJ: {
    backgroundColor: 'theme.colors.strong',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  View_5I: {
    paddingRight: 30,
  },
  ImagevT: {
    width: 250,
    height: 250,
  },
  ButtonOutline_2f: {
    backgroundColor: 'theme.colors.strong',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ImageFi: {
    width: 250,
    height: 250,
  },
  ButtonOutlinew4: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ViewvG: {
    paddingLeft: 30,
  },
  ImageeN: {
    width: 250,
    height: 250,
  },
  ButtonOutlineCJ: {
    backgroundColor: 'theme.colors.strong',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    width: 250,
    height: 70,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ViewOe: {
    paddingLeft: 30,
  },
  ScrollViewSv: {
    flexGrow: 1,
  },
  ViewxC: {
    top: 140,
  },
  ScrollViewWO: {
    flexGrow: 1,
    top: 40,
  },
  LinkAZ: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    bottom: 50,
    left: 10,
    textDecorationLine: 'underline',
    fontFamily: 'System',
    fontWeight: '700',
  },
  LinkMa: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    textDecorationLine: 'underline',
    left: 105,
    bottom: 66,
    fontFamily: 'System',
    fontWeight: '700',
  },
  LinkEF: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    textDecorationLine: 'underline',
    bottom: 82,
    left: 210,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Linkcv: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    left: 274,
    textDecorationLine: 'underline',
    bottom: 98,
    fontFamily: 'System',
    fontWeight: '700',
  },
  DividerDg: {
    height: 1,
    marginLeft: 35,
    marginRight: 45,
    bottom: 60,
  },
  LinkMZ: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    bottom: 40,
    textAlign: 'center',
    right: 1,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewjZ: {
    paddingTop: 100,
    paddingLeft: 15,
  },
});

export default withTheme(DashboardPgeScreen);
