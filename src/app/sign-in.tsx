import { View } from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

import React from "react";

const reAuth = false;
const isLoggedIn = false;

export default function SignInScreen() {
  const router = useRouter();
  return (
    <View className="justify-center flex-1 p-4">
      {reAuth &&
        !isLoggedIn && ( // this would be true when a user is logged in but needs to re-authenticate
          <>
            <Button
              icon="account"
              mode="contained"
              onPress={() => console.log("re-login")}
            >
              Username
            </Button>
            <Button mode="contained" onPress={() => router.navigate("/sign-up")}>
              Sign Up
            </Button>
          </>
        )}
      {!reAuth &&
        !isLoggedIn && ( // this would be true when a user is not logged in
          <>
            <Button mode="contained" onPress={() => console.log("login")}>
              Sign In
            </Button>
            <Button mode="contained" onPress={() => router.navigate("/sign-up")}>
              Sign Up
            </Button>
          </>
        )}
    </View>
  );
}
