import { AsyncStorage } from 'react-native';

export const saveConfiguration = async (prop, value) => {
	try {
		await AsyncStorage.setItem(prop, value);
	} catch (error) {
		console.error(error);	
	}
}