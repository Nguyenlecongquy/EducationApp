import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const image = require("../assets/login-image.png");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="h-1/3 w-full">
        <Image source={image} className="h-full w-full object-fill" />
      </View>
      <View className="flex pt-10 -mt-5 rounded-t-3xl bg-white">
        <Text className="text-center font-bold text-2xl">
          Welcome to E-learning
        </Text>
        <Text className="text-center mt-20 text-base font-bold">Login/Signup</Text>
      </View>
      <View className="flex flex-row bg-primary p-3 m-8 justify-center items-center rounded-xl">
        <Ionicons name="logo-google" size={24} color="white" />
        <Text className="text-base ml-2 text-text-white">Sign in with Google</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Login;
