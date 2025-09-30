import { View } from "react-native";
import { AppText } from "@/components/AppText";
import React from "react";
import { Button } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <Button icon="plus" mode="elevated">Add Item</Button>
      <Button icon="arrow-left" mode="elevated">Return to market selection</Button>
    </View>
  );
}
