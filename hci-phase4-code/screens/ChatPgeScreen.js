import React from 'react';
import { Button, IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ChatPgeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [message, setMessage] = React.useState('');

  return (
    <ScreenContainer
      style={styles.ScreenContainerz1}
      hasSafeArea={true}
      scrollable={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewZU}
        enabled={true}
        behavior="position"
        keyboardVerticalOffset={0}
      >
        <View style={styles.ViewH5}>
          <IconButton
            onPress={() => navigation.navigate('AppSettingsScreen', {})}
            style={styles.IconButtonpa}
            size={32}
            icon="Entypo/cross"
            color={theme.colors.secondary}
          />
          <Text style={[styles.Textve, { color: theme.colors.secondary }]}>
            {'Live Chat\n'}
          </Text>

          <Text
            style={[
              theme.typography.subtitle1,
              styles.Textbb,
              { color: theme.colors.strong },
            ]}
            ellipsizeMode="tail"
            textBreakStrategy="highQuality"
            allowFontScaling={true}
          >
            {
              "We're live Mon - Fri 8am - 4pm.  If you drop drop us a message outside these hours, we'll get back to you as soon as we can."
            }
          </Text>
        </View>

        <View
          style={styles.Viewsp}
          clickable=""
          pointerEvents={[{ label: '', value: '' }]}
        >
          <TextInput
            style={[
              styles.TextInputLe,
              {
                color: theme.colors.strong,
                borderColor: theme.colors.divider,
                borderRadius: theme.roundness,
                backgroundColor: theme.colors.background,
              },
            ]}
            placeholder="Your query"
            placeholderTextColor={theme.colors.medium}
            enablesReturnKeyAutomatically={true}
            returnKeyType="default"
            value={message}
            clearTextOnFocus={false}
            onChangeText={message => setMessage(message)}
            multiline={true}
            numberOfLines={14}
            scrollEnabled={true}
            clearButtonMode="never"
            spellcheck={false}
            textContentType="none"
          />
          <Button
            style={[
              styles.Buttonpc,
              { borderColor: theme.colors.background, borderRadius: 44 },
            ]}
            type="solid"
            icon="Entypo/chat"
            color={theme.colors.primary}
          >
            {'Start Chat'}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconButtonpa: {
    left: 250,
    top: 45,
  },
  Textve: {
    marginBottom: 16,
    marginTop: 16,
    fontSize: 25,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Textbb: {
    marginBottom: 2,
    alignSelf: 'center',
  },
  ViewH5: {
    paddingLeft: 32,
    alignItems: 'flex-start',
    paddingTop: 64,
    paddingRight: 32,
  },
  TextInputLe: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingRight: 16,
    paddingLeft: 16,
    borderLeftWidth: 1,
    marginBottom: 16,
    marginTop: 16,
    borderRightWidth: 1,
    paddingTop: 16,
    paddingBottom: 16,
    height: 240,
  },
  Buttonpc: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderStyle: 'dotted',
    width: 160,
    left: 80,
  },
  Viewsp: {
    paddingRight: 32,
    paddingLeft: 32,
    marginBottom: 34,
    paddingBottom: 34,
  },
  KeyboardAvoidingViewZU: {
    flexGrow: 1,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  ScreenContainerz1: {
    flexWrap: 'wrap',
  },
});

export default withTheme(ChatPgeScreen);
