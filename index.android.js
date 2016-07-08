import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  ListView,
  Text,
  View
} from 'react-native';

import ActionSection from './components/ActionSection';
import ListItem from './components/ListItems';
import StatusBar from './components/StatusBar';
import styles from './styles';

import Database from 'rn-firebase-bridge/database';


class GroceryApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = Database.ref();
  }
  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Loading...' }])
    });
    this.listenForItems(this.itemsRef);
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
        <ActionSection title="Add" onPress={this.addFood.bind(this)} />
      </View>
    );
  }
  listenForItems(itemsRef) {
    const ref = Database.ref();
    let items = [];
    ref.on('value', async (snapshot) => {
      await snapshot.forEach(async (child) => {
        items.push(await child.val());
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items),
      });
    });
  }
  addFood() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
