import { useState } from "react";
import "./App.styles.jsx";
import FormController from "./components/form/form-controller.component";
import ToDoDisplay from "./components/todoDisplay/todoDisplay.component";
import { Container, Box } from "./App.styles.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks,setCompletedTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 100),
        name: newTask,
        completed: false,
      },
    ]);
  };

  const removeTask = (taskToRemove) => {
    const newTaskList = tasks.filter((task) => {
      return taskToRemove.id !== task.id;
    });
    setTasks(newTaskList);
  };

  const updateStatus = (taskToUpdate) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id == taskToUpdate.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const getCompleted = () => {
    const completedTasks = tasks.filter((task) => {
      if (task.completed) return task;
    });


    return completedTasks;
  };

  return (
    <>
      <Container>
        <Box>
          <FormController addTask={addTask} />
          <ToDoDisplay
            getCompleted={getCompleted}
            updateStatus={updateStatus}
            removeTask={removeTask}
            tasks={tasks}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
