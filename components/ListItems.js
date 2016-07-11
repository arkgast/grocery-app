import React, { Component } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableHighlight,
  ToastAndroid,
  View,
} from 'react-native';

import styles from '../styles';


class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      text: '',
    }
  }
  render() {
    if (this.state.isEditing)
    {
      return (
        <View style={styles.liEditing}>
          <TextInput
            onChangeText={this.changeText.bind(this)}
            placeholder={'Add an Item'}
            style={styles.liTextEditing}>
              {this.props.item.title}
          </TextInput>
          <View style={styles.editButtons}>
            <TouchableHighlight
              onPress={this.handleEdit.bind(this)}
              underlayColor={'transparent'}
              style={styles.editButton}>
              <View style={styles.textEditButtonOk}>
                <Text style={{color: '#fff'}}>Ok</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.cancelEditing.bind(this)}
              underlayColor={'transparent'}
              style={styles.editButton}>
              <View style={styles.textEditButtonCancel}>
                <Text style={{color:'#fff'}}>Cancel</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
    return (
      <TouchableHighlight onPress={this.showAlert.bind(this)}>
        <View style={styles.li}>
          <Text style={styles.liText}>
            {this.props.item.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
  showAlert() {
    Alert.alert(
      'Complete',
      'It is complete?',
      [
        { text: 'Cancel', },
        {
          text: 'Edit',
          onPress: () => {
            this.setState({
              isEditing: true
            });
          }
        },
        {
          text: 'Complete',
          onPress: () => {
            const itemKey = this.props.item.key;
            this.props.handleComplete(itemKey);
          }
        },
      ],
      'default'
    );
  }
  changeText(text) {
    this.setState({
      text: text
    });
  }
  cancelEditing() {
    this.setState({
      isEditing: false
    });
  }
  handleEdit() {
    const itemKey = this.props.item.key;
    const itemTitle = this.state.text;
    if (itemTitle !== '') {
      this.props.handleEdit(itemKey, itemTitle);
      this.setState({
        isEditing: false,
      });
    } else {
      ToastAndroid.show('Please enter an item', ToastAndroid.SHORT);
    }
  }
}

module.exports = ListItem;
