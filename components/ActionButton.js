import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

import styles, { constants } from '../styles';


class ActionButton extends Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight 
          underlayColor={constants.actionColor}
          activeOpacity={0.8}
          onPress={this.props.onPress}>
          <View style={styles.actionTextWrapper}>
            <Text style={styles.actionText}>{this.props.title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ActionButton;
