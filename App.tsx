import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./app/screens/Login";
import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import Home from "./app/screens/Home";
import Tasks from "./app/screens/Tasks";
import Settings from "./app/screens/Setings";
import { User, onAuthStateChanged } from "firebase/auth";
import { UserContext } from "./UserContext";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const InsideStack = createNativeStackNavigator();



function InsideLayout({ setUser, user }) {
  // const [tasks, setTasks] = useState([]); 
  // Callback function to update tasks
  // const updateTasks = (newTasks) => {
  //   setTasks(newTasks);
  // };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tasks" component={Tasks} />
      <Drawer.Screen name="Setings" component={Settings} initialParams={{ user }} />
    </Drawer.Navigator>
 
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      console.log("user", user);
    });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            options={{ headerShown: true }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: true }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
