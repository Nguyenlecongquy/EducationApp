import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import { Image, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import LocalStorage from "../storage/LocalStorage";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const image = require("../assets/login-image.png");
  const { setUserData } = useContext(AuthContext);

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

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  const signIn = async () => {
    console.log("pressed sign in");
    try {
      await GoogleSignin.hasPlayServices();
      const result = await GoogleSignin.signIn();
      console.log(result);
      LocalStorage.setUserAuth(result);
      setUserData(result);
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
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Login;
