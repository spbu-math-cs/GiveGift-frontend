import { useState } from "react";

export const useLocalStorage = (keyName, initState) => {
  function getLocalStorageState() {
    const state = JSON.parse(localStorage.getItem(keyName));
    return state != null ? state : initState;
  }

  const [localStorageState, setLocalStorageState] = useState(
    getLocalStorageState(),
  );

  function saveLocalStorageState(state) {
    localStorage.setItem(keyName, JSON.stringify(state));
    setLocalStorageState(state);
  }

  function removeLocalStorageState() {
    localStorage.removeItem(keyName);
    setLocalStorageState(initState);
  }

  return [localStorageState, saveLocalStorageState, removeLocalStorageState];
};
