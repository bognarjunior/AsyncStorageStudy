import AsyncStorage from '@react-native-community/async-storage';

export const saveConfiguration = async (prop, value) => {
	try {
		await AsyncStorage.setItem(prop, value);
	} catch (error) {
		console.error(error);	
	}
}

export const fetchConfiguration = async (prop) => {
	try {
		return await AsyncStorage.getItem(prop);
	} catch (error) {
		console.error(error);	
	}
}