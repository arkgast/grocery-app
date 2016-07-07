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
import ListItem from './components/ListItems';
import StatusBar from './components/StatusBar';

class GroceryApp extends Component {
  render() {
    return (
      <View>
        <ActionButton title="ReactNativeRocks" />
        <StatusBar title="JS" />
      </View>
    );
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
