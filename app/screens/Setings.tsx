import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { UserContext } from "../context/UserContext";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const Setings = ({}) => {
  const user = useContext(UserContext);
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

  console.log(user.user.email, "user from setting page");
  return (
    <View style={styles.container} >
      <Text style={styles.text} > user Id is: {user.user.email} </Text>
      <Text style={styles.text} > 
        your email is {" "}
        {user.user.emailVerified ? (
          <Text style={styles.text} >verified</Text>
        ) : (
          <Text>not verified</Text>

        )}
      </Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Setings;

const styles = StyleSheet.create({
    container:{
        alignContent: 'center',
        marginTop: 40,
    },

    text:{
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center", 
        marginTop: "auto", 
      },
      btn:{
        
      }
});
