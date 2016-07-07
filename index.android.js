/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import ActionButton from './components/ActionButton';

class GroceryApp extends Component {
  render() {
    return (
      <View>
        <ActionButton title="ReactNativeRocks"></ActionButton>
      </View>
    );
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
