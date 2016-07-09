import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  Text,
  View
} from 'react-native';

import Database from 'rn-firebase-bridge/database';

import ActionSection from './components/ActionSection';
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
    this.itemsRef = Database.ref();
  }
  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Loading...' }])
    });
    this.listenForItems();
  }
  renderItem(item) {
    return (
      <ListItem item={item} handleComplete={this.handleComplete.bind(this)}/>
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
        <ActionSection title="Add" addFood={this.handleCreate.bind(this)} />
      </View>
    );
  }
  listenForItems() {
    const ref = this.itemsRef.child('items');
    let listItems = null;
    ref.on('value', async (snapshot) => {
      listItems = [];
      const items = await snapshot.val();
      for (key in items) {
        listItems.push({
          key: key,
          title: items[key].title
        });
      }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(listItems),
      });
    });
  }
  handleCreate(title) {
    const item = this.itemsRef.child('items').push();
    item.setValue({title: title});
  }
  handleComplete(itemKey) {
    const itemRef = this.itemsRef.child('items').child(itemKey);
    itemRef.remove();
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
