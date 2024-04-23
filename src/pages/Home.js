import { StatusBar } from "expo-status-bar";
import React, { useEffect, useContext } from "react";
import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LocalStorage from "../storage/LocalStorage";
import { AuthContext } from "../context/AuthContext";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Home = () => {
  const { userData, setUserData } = useContext(AuthContext);

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
    <SafeAreaView>
      <Text>Home</Text>
      <Pressable onPress={signOut}>
        <Text>logout</Text>
      </Pressable>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;
