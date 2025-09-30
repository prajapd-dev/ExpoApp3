import { Stack } from "expo-router";
import "../../global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";

const isLoggedIn = false; // Change this to true to simulate a logged-in user

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="listExpoEvents" options={{title: "Current markets/expos"}}/>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="sign-in" options={{ title: "Sign In" }} />
        </Stack.Protected>
      </Stack>
    </React.Fragment>
  );
}
