
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useTaskContext } from "../context/TaskContext";

const Tasks = () => {
  const { tasks, addTask, deleteTask, completeTask } = useTaskContext();
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask({ id: tasks.length + 1, title: newTask, completed: false });
      setNewTask("");
    }
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleCompleteTask = (taskId) => {
    completeTask(taskId);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text>Add Task </Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => handleCompleteTask(item.id)}>
              <Text style={styles.completeButton}>
                {item.completed ? "Undo" : "Complete"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
              <Text style={styles.deleteButton}>+</Text>
            </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    padding: 10,
    borderWidth:2,
    alignItems: "center",
    borderColor:"gray",
    borderRadius: 5,
    marginBottom: 10,
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
  completeButton: {
    color: "green",
    marginRight: 10,
  },
  deleteButton: {
    color: "red",
    fontSize: 20,
  },
});

export default Tasks;




