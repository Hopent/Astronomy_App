import AsyncStorage from '@react-native-async-storage/async-storage';

class UserDataManager {
    static async saveUserDataToCache(userData) {
        try {
          const jsonData = JSON.stringify(userData);
    
          await AsyncStorage.setItem('userData', jsonData);
      
          console.log('User data saved to cache');
        } catch (error) {
          console.error('Error saving user data to cache', error);
        }
      };

  static async getUserData() {
    try {
      const jsonData = await AsyncStorage.getItem('userData');
      if (jsonData) {
        const userData = JSON.parse(jsonData);
        return userData;
      } else {
        console.log('No user data found in cache');
        return null;
      }
    } catch (error) {
      console.error('Error reading user data from cache', error);
      return null;
    }
  };
}

export default UserDataManager;
