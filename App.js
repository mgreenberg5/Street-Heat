import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import cacheAssetsAsync from './src/utils/cacheAssetsAsync.js';

import text from './src/styles/text.js'

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      appIsReady: false
    }
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    console.log("broo")
    debugger
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/logo.png'),
        ],
        fonts: [
          {'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')},
          {'open-sans-bold-italic': require('./assets/fonts/OpenSans-BoldItalic.ttf')},
          {'open-sans-extra-bold': require('./assets/fonts/OpenSans-ExtraBold.ttf')},
          {'open-sans-extra-bold-italic': require('./assets/fonts/OpenSans-ExtraBoldItalic.ttf')},
          {'open-sans-italic': require('./assets/fonts/OpenSans-Italic.ttf')},
          {'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf')},
          {'open-sans-light-italic': require('./assets/fonts/OpenSans-LightItalic.ttf')},
          {'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf')},
          {'open-sans-semibold': require('./assets/fonts/OpenSans-Semibold.ttf')},
          {'open-sans-semibold-italic': require('./assets/fonts/OpenSans-SemiboldItalic.ttf')},
        ],
      });
    } catch(e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({appIsReady: true});
    }
  }

  render() {
    if(this.state.appIsReady) {
      return (
        <View style={styles.container}>
          <Image source={require('./assets/images/logo.png')} />
          <Text style={text.h1}>Bro its a App</Text>
        </View>
      )
    } else {
      return (
        <Text>Loading</Text>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
