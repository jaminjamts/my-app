import "@/global.css";

import { Link } from "expo-router";
import { Text } from "react-native";

import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <RNSafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 px-4 py-2 bg-blue-500 bg-primary text-white rounded"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
      >
        Go to Sign Up
      </Link>
      <Link
        href="/subscriptions/stopify"
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
      >
        Go to Stopify Subscription
      </Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "stop" } }}
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
      >
        Go to a
      </Link>
    </RNSafeAreaView>
  );
}
