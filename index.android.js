/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  Text,
  View
} from 'react-native';

import ActionButton from './components/ActionButton';
import ListItem from './components/ListItems';
import StatusBar from './components/StatusBar';
import styles from './styles';


class GroceryApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }
  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{
        title: 'Pizza'
      }])
    });
  }
  renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}}/>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Grocery List" />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem.bind(this) }
          style={styles.listview} />
        <ActionButton title="Add" />
      </View>
    );
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
