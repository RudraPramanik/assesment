import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { signOut } from "firebase/auth";

const DrawerContent = (props) => {
  const { state, ...rest } = props;
  const newState = { ...state };
  newState.routes = newState.routes.filter(item => item.name !== 'Inside');

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList state={newState} {...rest} />
      <TouchableOpacity
        onPress={() => {
          signOut(props.auth)
            .then(() => {
              console.log("User signed out");
              props.setUser(null);
            })
            .catch((error) => {
              console.error("Error signing out: ", error);
            });
        }}
        style={styles.logoutButton}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  logoutButtonText: {
    color: "#ff0000",
    fontWeight: "bold",
  },
});

export default DrawerContent;
