import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

const Setings = ({}) => {
  const user = useContext(UserContext);

  console.log(user.user.email, "user from setting page");
  return (
    <View>
      <Text> user Id is: {user.user.email} </Text>
      <Text>
        your email is {" "}
        {user.user.emailVerified ? (
          <Text>verified</Text>
        ) : (
          <Text>not verified</Text>
        )}
      </Text>
    </View>
  );
};

export default Setings;

const styles = StyleSheet.create({});
