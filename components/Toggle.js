import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Toggle extends Component {
  render() {

		const activeNot = [styles.viewToggle];
		if (!this.props.value) {
			activeNot.push(styles.viewNot);
		}
		
		const activeYes = [styles.viewToggle];
		if (this.props.value) {
			activeYes.push(styles.viewYes);
		}

		const labelYes = this.props.value ? styles.activeLabel : styles.inactiveLabel;
		const labelNot = !this.props.value ? styles.activeLabel : styles.inactiveLabel;

    return (
      <View style={[styles.container, this.props.style]}>
				<View style={activeNot}>
					<Text style={labelNot}> Não </Text>
				</View>
				<View style={activeYes}>
					<Text style={labelYes}> Sim </Text>
				</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderWidth: 1,
    backgroundColor: '#d1d1e0',
	},
  activeLabel: {
    color: '#ffffff'
	},
  inactiveLabel: {
    color: '#000000'
	},
  viewYes: {
		backgroundColor: '#008000',
	},
  viewNot: {
		backgroundColor: '#ff0055',
	},
	viewToggle: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		padding: 4,
	}
})