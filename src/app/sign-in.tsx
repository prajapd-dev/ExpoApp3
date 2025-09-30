import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

import React from "react";

const reAuth = false;
const isLoggedIn = true;

export default function SignInScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
