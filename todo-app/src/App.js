import { useState } from "react";
import "./App.styles.jsx";
import FormController from "./components/form/form-controller.component";
import ToDoDisplay from "./components/todoDisplay/todoDisplay.component";
import { Container, Box } from "./App.styles.jsx";

function App() {
  const [tasks, setTasks] = useState([]);

  /**
   * set the tasks state with the new task
   * @param {object} newTask
   */
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

  /**
   * filters and updates the state with the new tasks
   * @param {object} taskToRemove
   */
  const removeTask = (taskToRemove) => {
    const newTaskList = tasks.filter((task) => {
      return taskToRemove.id !== task.id;
    });
    setTasks(newTaskList);
  };

  /**
   * updates the task status to true/false
   * @param {object} taskToUpdate
   */
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

  /**
   * gets the array of the completed tasks
   * @returns {arr}
   */
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
