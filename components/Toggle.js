import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Toggle extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
				<View style={[styles.viewNot, styles.viewToggle]}>
					<Text style={styles.activeLabel}> Não </Text>
				</View>
				<View style={[styles.viewYes, styles.viewToggle]}>
					<Text style={styles.activeLabel}> Sim </Text>
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