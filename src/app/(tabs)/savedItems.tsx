import { View } from "react-native";
import { AppText } from "@/components/AppText";
import React from "react";

export default function SavedItemsScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>
       Saved Items - Sorted by Stores
      </AppText>
    </View>
  );
}
