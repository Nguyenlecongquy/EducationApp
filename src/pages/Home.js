import { StatusBar } from "expo-status-bar";
import React, { useEffect, useContext, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LocalStorage from "../storage/LocalStorage";
import { AuthContext } from "../context/AuthContext";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import WelcomeHeader from "../components/WelcomeHeader";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";
import VideoCourseList from "../components/VideoCourseList";

const Home = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
      androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
      iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
    });
  };

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  const signOut = async () => {
    console.log("pressed sign out");
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      LocalStorage.removeUserAuth();
      setUserData(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="mx-[20px]">
      <WelcomeHeader />
      <SearchBar />
      <Slider />
      <VideoCourseList />

      <Pressable onPress={signOut}>
        <Text>log out</Text>
      </Pressable>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;
