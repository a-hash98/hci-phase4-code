import React from 'react';
import Images from '../config/Images';
import {
  Icon,
  Link,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ArticleExampleScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles.ScreenContainerFN}
      scrollable={false}
      hasSafeArea={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewLK}
        bounces={true}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
      >
        <View>
          <Fetch
            url={`https://example-data.draftbit.com/articles/${encodeURIComponent(
              1
            )}`}
            method="GET"
            headers={{
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }}
          >
            {({ loading, error, data, doFetch }) => {
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              if (!data) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    No data was returned
                  </Text>
                );
              }

              return (
                <View>
                  <Image
                    style={styles.Imagedh}
                    source={Images.Hcipollution}
                    resizeMode="cover"
                  />
                  <View />
                  <View style={styles.ViewbQ}>
                    <Link
                      onPress={() =>
                        navigation.navigate('ArticlesPgeScreen', {})
                      }
                      style={[styles.Linkep, { color: theme.colors.light }]}
                      title="BACK"
                    />
                    <Icon
                      name="Entypo/share"
                      color={theme.colors.strong}
                      size={24}
                    />
                    <Icon
                      style={styles.IconzR}
                      name="FontAwesome/bookmark"
                      color={theme.colors.strong}
                      size={24}
                    />
                    <Icon
                      style={styles.IconnQ}
                      name="MaterialCommunityIcons/thumbs-up-down"
                      color={theme.colors.strong}
                      size={24}
                    />
                    <Icon
                      style={styles.IconSP}
                      name="FontAwesome/comment"
                      color={theme.colors.strong}
                      size={24}
                    />
                    <Touchable style={styles.TouchableDe}>
                      <View
                        style={[
                          styles.ViewgS,
                          {
                            borderRadius: theme.roundness,
                            backgroundColor: theme.colors.divider,
                            borderColor: theme.colors.secondary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            theme.typography.caption,
                            { color: theme.colors.primary },
                          ]}
                        >
                          {'Pollution'}
                        </Text>
                      </View>
                    </Touchable>

                    <Text
                      style={[
                        theme.typography.headline4,
                        { color: theme.colors.strong },
                      ]}
                    >
                      {'The latest on corporate action on plastic pollution'}
                    </Text>

                    <View style={styles.ViewpD}>
                      <Text
                        style={[
                          theme.typography.subtitle2,
                          styles.Textnp,
                          { color: theme.colors.medium },
                        ]}
                      >
                        {`By:`}
                      </Text>

                      <Text
                        style={[
                          theme.typography.subtitle2,
                          { color: theme.colors.medium },
                        ]}
                      >
                        {data && data['authors']}
                      </Text>
                    </View>

                    <View style={styles.View_17}>
                      <Text
                        style={[
                          theme.typography.subtitle2,
                          styles.Textf1,
                          { color: theme.colors.medium },
                        ]}
                      >
                        {`Published:`}
                      </Text>

                      <Text
                        style={[
                          theme.typography.subtitle2,
                          { color: theme.colors.medium },
                        ]}
                      >
                        {'10/12/2020'}
                      </Text>
                    </View>

                    <Text
                      style={[styles.Textf0, { color: theme.colors.strong }]}
                    >
                      {
                        '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n\n\n'
                      }
                    </Text>
                    <Touchable style={styles.TouchableR5} />
                    <Touchable style={styles.TouchableqV}>
                      <View
                        style={[
                          styles.Viewt6,
                          {
                            borderRadius: theme.roundness,
                            backgroundColor: theme.colors.background,
                            borderColor: theme.colors.divider,
                          },
                        ]}
                      >
                        <View style={styles.Viewc4}>
                          <View style={styles.ViewoU}>
                            <Icon
                              style={styles.IconGs}
                              name="MaterialIcons/person"
                              size={22}
                              color={theme.colors.strong}
                            />
                          </View>

                          <View style={styles.ViewND}>
                            <Text
                              style={[
                                theme.typography.body2,
                                styles.TextLA,
                                { color: theme.colors.medium },
                              ]}
                            >
                              {`More from`}
                            </Text>

                            <Text
                              style={[
                                theme.typography.body2,
                                { color: theme.colors.medium },
                              ]}
                            >
                              {'this author'}
                            </Text>
                          </View>
                        </View>

                        <View>
                          <Icon
                            style={styles.Iconza}
                            name="FontAwesome/angle-right"
                            color={theme.colors.light}
                            size={22}
                          />
                        </View>
                      </View>
                    </Touchable>
                  </View>
                </View>
              );
            }}
          </Fetch>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagedh: {
    width: 380,
    height: 270,
  },
  Linkep: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 0,
    textAlign: 'center',
    left: 250,
    top: 25,
    fontFamily: 'System',
    fontWeight: '700',
  },
  IconzR: {
    left: 35,
    bottom: 23,
  },
  IconnQ: {
    bottom: 47,
    left: 70,
  },
  IconSP: {
    left: 105,
    bottom: 71,
  },
  ViewgS: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 3,
    paddingBottom: 3,
  },
  TouchableDe: {
    marginBottom: 12,
  },
  Textnp: {
    marginRight: 4,
  },
  ViewpD: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Textf1: {
    marginRight: 4,
  },
  View_17: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  Textf0: {
    fontSize: 12,
    lineHeight: 20,
  },
  TouchableR5: {
    marginTop: 32,
    alignSelf: 'stretch',
    top: 34,
  },
  IconGs: {
    height: 22,
    width: 22,
  },
  ViewoU: {
    maxHeight: 24,
    maxWidth: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    minWidth: 24,
    minHeight: 24,
  },
  TextLA: {
    marginRight: 4,
  },
  ViewND: {
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Viewc4: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  Iconza: {
    height: 22,
    width: 22,
  },
  Viewt6: {
    flexDirection: 'row',
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 14,
    paddingRight: 14,
    borderBottomWidth: 1,
  },
  TouchableqV: {
    marginTop: 32,
    alignSelf: 'stretch',
  },
  ViewbQ: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 32,
    paddingBottom: 36,
    alignItems: 'flex-start',
  },
  ScrollViewLK: {
    paddingBottom: 24,
  },
  ScreenContainerFN: {
    alignItems: 'baseline',
    flexWrap: 'wrap',
  },
});

export default withTheme(ArticleExampleScreen);
