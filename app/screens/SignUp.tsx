import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { UserContext } from '../../UserContext'

const SignUp = () => {
    const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    // Perform the user logout
    try {
      await signOut(FIREBASE_AUTH);
      setUser(null); // Reset the user context
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})