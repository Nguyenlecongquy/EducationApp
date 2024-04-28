import React from "react";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View className="flex flex-row bg-white rounded-xl items-center mt-2.5 p-2.5 border border-border">
      <Ionicons name="search" size={24} color="#979191" />
      <TextInput placeholder="Search" className="ml-2.5"/>
    </View>
  );
};

export default SearchBar;
