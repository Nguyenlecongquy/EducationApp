import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import { useState, useEffect, useMemo } from "react";
import LocalStorage from "./src/storage/LocalStorage";
import { AuthContext } from "./src/context/AuthContext";

export default function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    LocalStorage.getUserAuth().then((data) => {
      if (data) setUserData(data);
      else setUserData(null);
    });
  }, []);

  return (
    <View className="flex-1">
      <AuthContext.Provider value={{ userData, setUserData }}>
        <StatusBar style="auto" />
        {userData ? <Home /> : <Login />}
      </AuthContext.Provider>
    </View>
  );
}
