import React, { useContext } from "react";
import { Image, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

const WelcomeHeader = () => {
  const { userData } = useContext(AuthContext);
  return (
    <View className="flex flex-row justify-between items-center">
      <View>
        <Text>Hello</Text>
        <Text className="text-base font-bold">{userData.user.name}</Text>
      </View>
      <View>
        <Image
          source={{ uri: userData.user.photo }}
          className="w-10 h-10 rounded-full"
        />
      </View>
    </View>
  );
};

export default WelcomeHeader;
