import { Text, View } from "react-native";
import { AppText } from "@/components/AppText";
import React from "react";
import { Button, TextInput } from "react-native-paper";

export default function SignUpScreen() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");


  /* 
  checks: 
  1. all fields are filled
  2. password and confirm password match
  3. handle correct email format (basic check)
  4. on submit - figure out how aws cognito fits here
  */
  const handleSignUp = () => {
    // Handle sign-up logic here
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  }
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <TextInput label="Username" placeholder="username" mode="outlined" onChangeText={setUsername}/>
      <TextInput label="Email" placeholder="example@gmail.com" mode="outlined" onChangeText={setEmail}/>
      <TextInput label="Password" placeholder="password" mode="outlined" secureTextEntry onChangeText={setPassword}/>
      <TextInput label="Confirm Password" placeholder="confirm password" mode="outlined" secureTextEntry onChangeText={setConfirmPassword}/>

      <Button mode="contained" onPress={handleSignUp}>Sign up</Button>
    </View>
  );
}

/* 
sign up flow is as follows: 

1. user clicks sign up button on sign in screen
2. user is taken to sign up screen where they enter username, email, password, confirm password
3. user clicks sign up button on sign up screen
4. if successful, user is taken to listExpoEvents screen (for now)
5. if unsuccessful, user is shown an error message




*/