import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

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
			<TouchableOpacity
				style={[styles.container, this.props.style]}
				onPress={this.props.onToggle}
			>
				<View style={activeNot}>
					<Text style={labelNot}> Não </Text>
				</View>
				<View style={activeYes}>
					<Text style={labelYes}> Sim </Text>
				</View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderWidth: 1,
		borderRadius: 5,
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