import React from "react";
import {
  Alert,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { iTask, TasksContext } from "../../Context/TasksContext";

export const TaskList = () => {
  const { tasks, removeTask } = React.useContext(TasksContext);

  const handleRemoveTask = (id: string) => {
    Alert.alert("Tem certeza ?", "Deseja realmente excluir a tarefa ?", [
      {
        text: "Cancelar",
        onPress: () => {},
      },
      {
        text: "Excluir",
        onPress: () => removeTask(id),
      },
    ]);
  };

  return (
    <FlatList
      data={tasks as unknown as iTask[]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.buttonTask}
          onPress={() => handleRemoveTask(item.id)}
        >
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  titleTask: {
    color: "#67159C",
    fontSize: 20,
    fontWeight: "bold",
  },
});
