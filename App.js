import React, {Component} from 'react';
import {StyleSheet, Text, View, Picker, ActivityIndicator} from 'react-native';
import Toggle from './components/Toggle';
import { saveConfiguration, fetchConfiguration } from './storage';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: true,
      theme: 'pink',
      loading: true
    }
  }

  componentDidMount() {
    fetchConfiguration('configurations').then(config => {
      if (config !== null) {
        const data = JSON.parse(config);
        const state = { loading: false };
        if (config.notifications !== null) {
          state.notifications = config.notifications === 'true'
        }

        if (config.theme !== null) {
          state.theme = config.theme
        }
        this.setState(state)
      } else {
        this.setState({ loading: false })
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.notifications !== this.state.notifications) || (prevState.theme !== this.state.theme)) {
      const config = {
        notifications: this.state.notifications.toString(),
        theme: this.state.theme
      }
      saveConfiguration('configurations', JSON.stringify(config));
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
       {this.state.loading && <ActivityIndicator 
          style={styles.loading} 
          size="large" 
          color="#0000ff"
        />}
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
  },
  loading: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, .4)'
  }
});
