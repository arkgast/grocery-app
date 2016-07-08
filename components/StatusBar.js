import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from '../styles';


class StatusBar extends Component {
  render() {
    return (
      <View>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

module.exports = StatusBar;
