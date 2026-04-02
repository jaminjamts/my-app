import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Signin = () => {
  return (
    <View>
      <Text>Signin</Text>
      <Link href="/(auth)/sign-up" className="text-blue-500">
        Create account
      </Link>
    </View>
  );
};

export default Signin;
