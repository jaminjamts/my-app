import { supabase } from "@/lib/supabase";
import { styled } from "nativewind";
import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const Settings = () => {
  return (
    <SafeAreaView>
      <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
      <Text>settings</Text>
    </SafeAreaView>
  );
};

export default Settings;
