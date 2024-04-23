import React from "react";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View className="flex flex-row bg-white p-2.5 rounded-xl mt-2.5 items-center mx-5 shadow-sm shadow-gray-500">
      <Ionicons name="search" size={24} color="#979191" />
      <TextInput placeholder="Search" className="ml-2.5"/>
    </View>
  );
};

export default SearchBar;
