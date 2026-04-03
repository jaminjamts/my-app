import { View } from "react-native";
import Auth from "../../components/Auth";

export default function SignIn() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      <Auth />
    </View>
  );
}
