import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Title,
  Form,
  Input,
  Icon,
  Button,
  Task,
  Span,
  Column,
} from "./form.styles";

import addIcon from "../../assets/plus.png";
import ToDoDisplay from "../todoDisplay/todoDisplay.component";

const AppForm = () => {
  const [tasks, setTasks] = useState([]);
  const [fieldInput, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  // handles the input onChanges
  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  // handles the form submition
  const submitHandler = (e) => {
    e.preventDefault();
    if (!fieldInput) return;
    const taskId = Math.floor(Math.random() * 100);

    setTasks([
      ...tasks,
      {
        id: taskId,
        task: fieldInput,
        completed: false,
      },
    ]);
    setCount(count + 1);
    setInput("");
  };

  // handles the remove action
  const handleRemove = (taskToRemove) => {
    const newArr = tasks.filter((task) => task.id !== taskToRemove.id);
    setTasks(newArr);
    setCount(count - 1);
  };

  // handles the status change action
  // const handleStatus = (taskToChange) => {
  //   const updatedTasks = tasks.map((task) => {
  //     if (task.id === taskToChange.id) {
  //       return {
  //         ...task,
  //         completed: !task.completed,
  //       };
  //     }
  //     return task;
  //   });
  //   setTasks(updatedTasks);
  //   const { completed } = tasks;
  //   if(!completed){
  //     setCompletedCount(completedCount-1)
  //   }else{
  //     setCompletedCount(completedCount+1)
  //   }

  // };

  return (
    <>
      <Container>
        <Box>
          <Title>To do({count})</Title>
          <Form onSubmit={submitHandler}>
            <Input
              autoComplete="off"
              value={fieldInput}
              onChange={handleChange}
              name="task"
              placeholder="Add task"
            />
            <Button>
              <Icon src={addIcon}></Icon>
            </Button>
          </Form>
          <ToDoDisplay  handleRemove={handleRemove} tasks={tasks} />
          <Title>Completed({completedCount})</Title>
        </Box>
      </Container>
    </>
  );
};

export default AppForm;
