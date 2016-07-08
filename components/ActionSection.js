import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  TextInput,
  View,
} from 'react-native';

import styles, { constants } from '../styles';


class ActionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Add an item'
    };
  }
  render() {
    return (
      <View style={styles.actionSection}>
        <TextInput 
          style={styles.actionInput}
          value={this.state.text}
          onChangeText={this.changeText.bind(this)}
          editable={true}
          />
        <View style={styles.actionButton}>
          <TouchableHighlight 
            underlayColor={constants.actionColor}
            activeOpacity={0.8}
            onPress={this.handleAdd.bind(this)}>
            <View style={styles.actionButtonText}>
              <Text style={styles.actionText}>{this.props.title}</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  changeText(text) {
    this.setState({
      text: text
    });
  }
  handleAdd() {
    const title = this.state.text;
    this.props.addFood(title);
  }
}

module.exports = ActionSection;
