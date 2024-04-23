import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Image, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const Login = () => {
  const image = require("../assets/login-image.png");
  const [userInfo, setUserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        "174403152828-8vra1prgjgnm5s3u5h49gdke1ifspdqp.apps.googleusercontent.com",
      androidClientId:
        "174403152828-78ol49k6sn8f1ecukapkbnp3ctmi3jcl.apps.googleusercontent.com",
      iosClientId:
        "174403152828-v56nlr8te7ileq1rnaja8jfljm1hoscd.apps.googleusercontent.com",
    });
  };

  const getUserData = async (accessTokenValue) => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: {
            Authorization: `Bearer ${accessTokenValue}`,
          },
        }
      );
      return response.json();
    } catch (error) {}
  };

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  const signIn = async () => {
    console.log("pressed sign in");
    try {
      await GoogleSignin.hasPlayServices();
      const result = await GoogleSignin.signIn();
      console.log("userInfo", result);
      //   const data = await GoogleSignin.getTokens();
      console.log("token", data);
    //   setAccessToken(data.accessToken);

      setUserInfo(userInfo);
    } catch (error) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          console.log("in progress");
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log("play services not available");
          break;
        case statusCodes.SIGN_IN_CANCELLED:
          console.log("sign in cancelled");
          break;
        default:
          console.log("Something went wrong", error);
          break;
      }
    }
  };

  const signOut = async () => {
    console.log("pressed sign out");
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUserInfo(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="h-1/3 w-full">
        <Image source={image} className="h-full w-full object-fill" />
      </View>
      <View className="flex pt-10 -mt-5 rounded-t-3xl bg-white">
        <Text className="text-center font-bold text-2xl">
          Welcome to E-learning
        </Text>
        <Text className="text-center mt-20 text-base font-bold">
          Login/Signup
        </Text>
        <View className="flex flex-row justify-center items-center w-full mt-8">
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
        </View>
        <Pressable onPress={signOut}>
          <Text>Sign Out</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Login;
