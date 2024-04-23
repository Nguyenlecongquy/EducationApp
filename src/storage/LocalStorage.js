import AsyncStorage from "@react-native-async-storage/async-storage";

const setUserAuth = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("userData", jsonValue);
  } catch (e) {
    // saving error
  }
};

const getUserAuth = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userData");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const removeUserAuth = async () => {
  try {
    await AsyncStorage.removeItem("userData");
  } catch (e) {
    // remove error
  }
};

export default { setUserAuth, getUserAuth, removeUserAuth };
