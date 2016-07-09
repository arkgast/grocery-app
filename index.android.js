import React, { Component } from 'react';
import {
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
  listenForItems(itemsRef) {
    const ref = Database.ref().child('items');
    let items = null;
    ref.on('value', async (snapshot) => {
      items = [];
      await snapshot.forEach(async (child) => {
        items.push(await child.val());
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items),
      });
    });
  }
  handleCreate(title) {
    const item = this.itemsRef.child('items').push();
    item.setValue({title: title});
  }
  handleComplete(title) {
    const items = this.itemsRef.child('items');
    const item = items.limitToFirst(1);
    console.log(item);
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
