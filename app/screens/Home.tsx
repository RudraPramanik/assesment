// Home.js
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useTaskContext } from "../context/TaskContext";

const Home = () => {
  const { tasks } = useTaskContext();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task List</Text>
      {
        tasks.length === 0 && (<><Text style={styles.notask} >no task found</Text></>)
      }
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
            <Text>{item.completed ? "Completed" : "Pending"}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center", 
    marginTop: "auto", 
  },
  notask:{
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center", 
    marginTop: "auto", 
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default Home;
