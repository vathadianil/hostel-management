import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AppContext = createContext({
  loginData: {},
  isAuthenticated: false,

  authenticate: () => {},
  logout: () => {},
});

function AppContextProvider({ children }) {
  const [loginData, setLoginData] = useState({});

  function authenticate(loginData) {
    setLoginData(loginData);
    AsyncStorage.setItem("loginData", JSON.stringify(loginData));
  }

  function logout() {
    setLoginData({});
    AsyncStorage.removeItem("loginData");
  }

  const value = {
    loginData: loginData,
    isAuthenticated: !!loginData.token,
    authenticate: authenticate,
    logout: logout,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
