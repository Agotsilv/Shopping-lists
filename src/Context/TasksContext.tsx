import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";

interface IProps {
  children: React.ReactElement;
}

export interface ITasksContext {
  tasks: iTask[];
  addTask(task: iTask): void;
  removeTask(id: string): void;
}

const tasksData = "@MyTasks:Tasks";

export interface iTask {
  id: string;
  title: string;
}

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext
);

export const TasksProvider: React.FunctionComponent<IProps> = ({
  children,
}) => {
  const [data, setData] = useState<iTask[]>([]);

  useEffect(() => {
    async function loadTasks() {
      const tasksList = await AsyncStorage.getItem(tasksData);

      if (tasksList) {
        setData(JSON.parse(tasksList));
      }
    }
    loadTasks();
  }, []);

  const addTask = async (task: iTask) => {
    try {
      const newTaskList = [...data, task];
      setData(newTaskList);
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const removeTask = async(id: string) => {
    const newTaskList = data.filter(task => task.id !== id )
    setData(newTaskList);
    await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
  }

  return (
    <TasksContext.Provider value={{ tasks: data, addTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
};


export function useTaskList(): ITasksContext{
    const context = useContext(TasksContext)

    if(!context){
        throw new Error('useTaskList deve ser usado em um TasksProvider')
    }

    return context
}