import React, { createContext, useState, useEffect } from "react";

// Initial tasks can be fetched from Firebase or local storage if needed
const initialTasks = [];

export const TasksContext = createContext({
  tasks: initialTasks,
  setTasks: () => {},
});

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    // Fetch tasks from Firebase (if applicable)
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
