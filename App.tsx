import { Text, View } from "react-native";
import { TasksProvider } from "./src/Context/TasksContext";
import { Home } from "./src/pages/Home";

const App = () => {
  return (
  <TasksProvider>
  <Home />
  </TasksProvider>
  );
};

export default App;
