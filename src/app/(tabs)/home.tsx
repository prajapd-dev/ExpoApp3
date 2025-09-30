import { View } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { Button } from "react-native-paper";

export default function HomeScreen() {
    const router = useRouter();
  return (
    <View style={{ justifyContent: "center", flex: 1, padding: 16 }}>
      <Button icon="plus" mode="elevated">Add Item</Button>
      <Button icon="arrow-left" mode="elevated" onPress={() => router.replace("../listExpoEvents")}>Return to market selection</Button>
    </View>
  );
}
