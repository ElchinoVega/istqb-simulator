import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = '@istqb_exam_history';

export async function saveAttempt(attempt) {
  try {
    const raw = await AsyncStorage.getItem(HISTORY_KEY);
    const history = raw ? JSON.parse(raw) : [];
    history.push(attempt);
    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    return true;
  } catch (e) {
    return false;
  }
}

export async function loadHistory() {
  try {
    const raw = await AsyncStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export async function clearHistory() {
  try {
    await AsyncStorage.removeItem(HISTORY_KEY);
    return true;
  } catch (e) {
    return false;
  }
}
