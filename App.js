import React, {Component} from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';
import Toggle from './components/Toggle';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: true,
      theme: 'pink'
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notifications !== this.state.notifications) {
      saveConfiguration('notifications', this.state.notifications.toString());
    }
  }

  onToggleNotifications = () => {
    this.setState({
      notifications: !this.state.notifications
    })
  };

  onThemeChange = (value) => {
    this.setState({
      theme: value
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
        <View style={styles.choosePicker}>
          <Text  style={styles.labelPicker}>Tema:</Text>
          <Picker style={{ flex: 2}} 
            selectedValue={this.state.theme}
            onValueChange={this.onThemeChange}
          >
            <Picker.Item label="Azul" value="blue" />
            <Picker.Item label="Rosa" value="pink" />
            <Picker.Item label="Verde" value="green" />
          </Picker>
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
  },
  choosePicker: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelPicker: {
    fontSize: 20,
    flex: 1
  }
});
