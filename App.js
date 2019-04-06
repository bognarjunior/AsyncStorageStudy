import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toggle from './components/Toggle';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: true
    }
  }

  onToggleNotifications = () => {
    this.setState({
      notifications: !this.state.notifications
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chooseNotification}>
          <Text style={styles.labelNotification}>Receber notificações</Text>
          <Toggle 
            style={{ flex: 1}} 
            value={this.state.notifications} 
            onToggle={this.onToggleNotifications}
          />
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
