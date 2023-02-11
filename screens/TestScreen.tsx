import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export default function TestScreen({ navigation }: NativeStackHeaderProps) {
  useEffect(() => {
    console.log("Rendering Test Screen");
    return () => console.log("Unmounting Test Screen");
  }, []);

  return (
    <View>
      <Text>I am Test screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.push("Root")}
      ></Button>
    </View>
  );
}
