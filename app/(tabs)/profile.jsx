import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">profile</Text>
      <Link href="/" style={{ color: "blue" }}>
        Home
      </Link>
    </View>
  );
};
//className="flex-1 items-center justify-center bg-white"
export default profile;
