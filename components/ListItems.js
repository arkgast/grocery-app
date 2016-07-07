import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

import styles from '../styles';


class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>
            {this.props.item.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;
