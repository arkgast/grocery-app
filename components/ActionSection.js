import React, { Component } from 'react';
import {
  ToastAndroid,
  TouchableHighlight,
  Text,
  TextInput,
  View,
} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';

import styles, { constants } from '../styles';


class ActionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <View style={styles.actionSection}>
        <TextInput 
          editable={true}
          onChangeText={this.changeText.bind(this)}
          placeholder={'Add an Item'}
          style={styles.actionInput}
          value={this.state.text} />
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
    if (title !== '')
    {
      this.props.addFood(title);
      this.setState({
        text: ''
      });
      dismissKeyboard();
    } else {
      ToastAndroid.show('Please enter an item', ToastAndroid.SHORT);
    }
  }
}

module.exports = ActionSection;
