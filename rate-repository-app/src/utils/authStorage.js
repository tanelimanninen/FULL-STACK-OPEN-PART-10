import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
    this.key = `${namespace}:token`;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const token = await AsyncStorage.getItem(this.key);

    return token ? JSON.parse(token) : null;
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    await AsyncStorage.setItem(this.key, JSON.stringify(accessToken));
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(this.key);
  }
}

export default AuthStorage;