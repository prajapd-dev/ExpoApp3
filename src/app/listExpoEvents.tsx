import { useRouter } from "expo-router";
import { View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";


// we would grab the data from here, set the content
// for the tabs page based on which market/expo is selected 
// and then navigate to the home page for that market/expo
export default function ExpoEventsScreen() {
  const router = useRouter();
  return (
    <View className="justify-center flex-1 p-4">
      <Button
        mode="contained"
        onPress={() => router.replace("/(tabs)/home")}
      >
        Expo Event Button
      </Button>
    </View>
  );
}
