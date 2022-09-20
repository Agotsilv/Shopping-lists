import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { TaskList } from "../../Components/TaskList";
import { useTaskList } from "../../Context/TasksContext";

export const Home = () => {
  const [newTask, setNewTask] = useState("");
  const [name] = useState("Tiago Oliveira");

  const { addTask } = useTaskList();

  const submit = () => {
    setNewTask('')
  }

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : "Task empty",
    };
    addTask(data);
  };

  const handlesubmit = () => {
    setNewTask('')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Shopping lists</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#555"
          placeholder="new task"
          onChangeText={setNewTask}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={handleAddNewTask}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.MyTasks}>Lists</Text>

        <TaskList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#121214",
  },
  container: {
    flex: 1,
    backgroundColor: "#67159C",
    paddingHorizontal: 30,
    paddingVertical: 50,
  },

  title: {
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    color: "#121212",
    fontSize: 18,
    padding: 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#67159C",
    fontSize: 18,
    fontWeight: "bold",
  },
  MyTasks: {
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
    marginVertical: 20,
  },
  buttonTask: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  titleTask: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
