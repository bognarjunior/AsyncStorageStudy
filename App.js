import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toggle from './components/Toggle';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chooseNotification}>
          <Text style={styles.labelNotification}>Receber notificações</Text>
          <Toggle style={{ flex: 1}} value={true} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F5FCFF',
  },
  chooseNotification: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelNotification: {
    fontSize: 20,
    flex: 3
  }
});
