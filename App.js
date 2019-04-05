import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toggle from './components/Toggle';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Receber notificações</Text>
        <Toggle />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    backgroundColor: '#F5FCFF',
  }
});
